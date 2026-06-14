// Web Audio API custom synthesizer engine for real-time interactive playback
// Allows user to control stems, BPM, and XY filters with high performance

let audioCtx: AudioContext | null = null;
let isPlaying = false;
let currentBpm = 120;
let baseFrequency = 110.0; // Base note frequency
let activeTrackId = "";

// Web Audio Nodes
let masterGain: GainNode | null = null;
let delayNode: DelayNode | null = null;
let filterNode: BiquadFilterNode | null = null;
let analyserNode: AnalyserNode | null = null;

// Sequencer state
let currentStep = 0;
let nextNoteTime = 0.0;
const scheduleAheadTime = 0.1; // How far ahead to schedule audio (sec)
const lookahead = 25.0; // How frequently to call scheduling function (ms)
let timerId: any = null;

// active stems state (managed inside or from UI)
let stemsState = {
  drums: true,
  bass: true,
  lead: true,
  space: true,
};

// Callback to notify UI of current playing step
let stepCallback: ((step: number) => void) | null = null;

// Initialize or resume the audio context
function initAudio() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    audioCtx = new AudioContextClass();
    
    // Create master nodes
    analyserNode = audioCtx.createAnalyser();
    analyserNode.fftSize = 256;
    
    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.4, audioCtx.currentTime); // Safe volume

    filterNode = audioCtx.createBiquadFilter();
    filterNode.type = "lowpass";
    filterNode.frequency.setValueAtTime(2000, audioCtx.currentTime);
    filterNode.Q.setValueAtTime(4.0, audioCtx.currentTime); // Resonance

    delayNode = audioCtx.createDelay(1.0);
    delayNode.delayTime.setValueAtTime(0.33, audioCtx.currentTime); // Dotted eighth delay
    
    const delayGain = audioCtx.createGain();
    delayGain.gain.setValueAtTime(0.35, audioCtx.currentTime); // Feedback level

    // Wire up: Synth Notes -> Filter -> MasterGain & Delay
    // Delay -> DelayGain -> back to Delay & MasterGain
    delayNode.connect(delayGain);
    delayGain.connect(delayNode); // Feedback loop
    delayGain.connect(analyserNode); // Feed delay to analyser too

    filterNode.connect(masterGain);
    filterNode.connect(delayNode); // Send to delay
    
    masterGain.connect(analyserNode);
    analyserNode.connect(audioCtx.destination);
  }
  
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

// Low-level voice generation
function playKick(time: number) {
  if (!audioCtx) return;
  
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  
  osc.connect(gain);
  gain.connect(masterGain!); // bypass filter to keep kick deep & punchy
  
  // Frequency sweep: 150Hz -> 0.01Hz (standard punchy kick trick)
  osc.frequency.setValueAtTime(150, time);
  osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.18);
  
  // Volume decay
  gain.gain.setValueAtTime(0.9, time);
  gain.gain.exponentialRampToValueAtTime(0.01, time + 0.18);
  
  osc.start(time);
  osc.stop(time + 0.19);
}

function playHiHat(time: number, accent: boolean = false) {
  if (!audioCtx) return;
  
  // Hi-hat synthesized via high-passed noise source
  const bufferSize = audioCtx.sampleRate * 0.05; // Short 50ms buffer
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  
  const noiseSource = audioCtx.createBufferSource();
  noiseSource.buffer = buffer;
  
  const filter = audioCtx.createBiquadFilter();
  filter.type = "highpass";
  filter.frequency.setValueAtTime(8000, time); // High frequency tick
  
  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(accent ? 0.22 : 0.11, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + (accent ? 0.045 : 0.025));
  
  noiseSource.connect(filter);
  filter.connect(gain);
  gain.connect(filterNode!); // feed to master filter
  
  noiseSource.start(time);
  noiseSource.stop(time + 0.05);
}

function playBass(time: number, frequency: number, duration: number) {
  if (!audioCtx) return;
  
  const osc = audioCtx.createOscillator();
  const subOsc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  const bassFilter = audioCtx.createBiquadFilter();
  
  osc.type = "sawtooth";
  osc.frequency.setValueAtTime(frequency, time);
  
  // Thick sub layer
  subOsc.type = "sine";
  subOsc.frequency.setValueAtTime(frequency / 2, time);
  
  bassFilter.type = "lowpass";
  bassFilter.frequency.setValueAtTime(320, time);
  bassFilter.Q.setValueAtTime(1.0, time);
  
  // ADSR envelope
  gain.gain.setValueAtTime(0.01, time);
  gain.gain.linearRampToValueAtTime(0.35, time + 0.015); // Quick attack
  gain.gain.exponentialRampToValueAtTime(0.01, time + duration - 0.01);
  
  osc.connect(bassFilter);
  subOsc.connect(bassFilter);
  bassFilter.connect(gain);
  gain.connect(filterNode!);
  
  osc.start(time);
  subOsc.start(time);
  
  osc.stop(time + duration);
  subOsc.stop(time + duration);
}

function playLead(time: number, frequency: number, duration: number, isMajor: boolean = false) {
  if (!audioCtx) return;
  
  const osc1 = audioCtx.createOscillator();
  const osc2 = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  
  osc1.type = "triangle";
  osc1.frequency.setValueAtTime(frequency, time);
  
  // Detuned second oscillator for lush width
  osc2.type = "sawtooth";
  osc2.frequency.setValueAtTime(frequency * 1.008, time);
  
  gain.gain.setValueAtTime(0.01, time);
  gain.gain.linearRampToValueAtTime(0.24, time + 0.03); // Soft attack
  gain.gain.exponentialRampToValueAtTime(0.01, time + duration - 0.01);
  
  osc1.connect(gain);
  osc2.connect(gain);
  gain.connect(filterNode!);
  
  osc1.start(time);
  osc2.start(time);
  
  osc1.stop(time + duration);
  osc2.stop(time + duration);
}

function playSpacePluck(time: number, frequency: number) {
  if (!audioCtx) return;
  
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  
  osc.type = "sawtooth";
  // Pitch octave shift (high pitch)
  osc.frequency.setValueAtTime(frequency * 4, time);
  osc.frequency.exponentialRampToValueAtTime(frequency * 2, time + 0.15);
  
  gain.gain.setValueAtTime(0.08, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.25);
  
  osc.connect(gain);
  gain.connect(delayNode!); // Directly feed deep space delay echo
  
  osc.start(time);
  osc.stop(time + 0.3);
}

// MIDI Scale notes offsets (pentatonic minor)
const PENTATONIC_STEPS = [0, 3, 5, 7, 10, 12, 15, 17, 19, 22];
const MAJOR_STEPS = [0, 2, 4, 7, 9, 12, 14, 16, 19, 21];

function getFreqFromScale(baseFreq: number, stepIndex: number, scaleType: "minor" | "major") {
  const scale = scaleType === "minor" ? PENTATONIC_STEPS : MAJOR_STEPS;
  const index = Math.abs(stepIndex) % scale.length;
  const octaveShift = Math.floor(stepIndex / scale.length);
  const semitones = scale[index] + (octaveShift * 12);
  // Frequency calculation f = f0 * 2^(n/12)
  return baseFreq * Math.pow(2, semitones / 12);
}

// Main sequencer note scheduler
function scheduleNote(step: number, time: number) {
  const scaleType = activeTrackId === "solaris-reflection" ? "major" : "minor";
  
  // 1. Drums Step Logic
  if (stemsState.drums) {
    // Four on the floor kick
    if (step % 4 === 0) {
      playKick(time);
    }
    // Tech Snare / Clap accent
    if (step % 8 === 4 && activeTrackId === "neo-tokyo-drive") {
      // Short delay clap simulation
      playHiHat(time, true);
    }
    // High hats on offbeats
    if (step % 2 === 1) {
      playHiHat(time, step % 4 === 3);
    }
  }

  const secondsPerStep = 60.0 / currentBpm / 4; // 16th notes duration

  // 2. Bassline Step Logic
  if (stemsState.bass) {
    // Generate driving repeating rhythm
    let bassStepTrigger = false;
    let noteIndex = 0;
    
    if (activeTrackId === "neo-tokyo-drive") {
      // Cyberpunk driving: bass on steps 1, 2, 3 (offbeat focus)
      bassStepTrigger = step % 4 !== 0;
      noteIndex = step % 8 < 4 ? 0 : 2; // alternates bass root
    } else if (activeTrackId === "solaris-reflection") {
      // Slow pulsing ambient bass on step 0 and 8
      bassStepTrigger = step === 0 || step === 8;
      noteIndex = step === 0 ? 0 : -3;
    } else {
      // Retro synthwave: classic running octaves
      bassStepTrigger = true;
      noteIndex = step % 2 === 0 ? 0 : 5; // jumping fifths/octaves
    }
    
    if (bassStepTrigger) {
      const bassFreq = getFreqFromScale(baseFrequency, noteIndex, scaleType);
      playBass(time, bassFreq, secondsPerStep * 0.9);
    }
  }

  // 3. Lead / Theme Step Logic
  if (stemsState.lead) {
    let leadStepTrigger = false;
    let melodyIndex = 0;
    
    if (activeTrackId === "neo-tokyo-drive") {
      // Aggressive arpeggiated industrial lead
      leadStepTrigger = (step % 3 === 0 && step % 4 !== 0) || step === 14;
      const melodies = [4, 7, 5, 8, 9, 11, 7, 12];
      melodyIndex = melodies[step % melodies.length];
    } else if (activeTrackId === "solaris-reflection") {
      // Slow etheal warm tones playing occasionally
      leadStepTrigger = step === 2 || step === 6 || step === 10 || step === 13;
      const melodies = [5, 7, 9, 12];
      melodyIndex = melodies[step % melodies.length];
    } else {
      // Synthwave nostalgic hook
      leadStepTrigger = step % 4 === 0 || step % 8 === 3 || step % 8 === 6;
      const melodies = [3, 5, 7, 5, 10, 7, 12, 10];
      melodyIndex = melodies[Math.floor(step / 2) % melodies.length];
    }
    
    if (leadStepTrigger) {
      const leadFreq = getFreqFromScale(baseFrequency * 2, melodyIndex, scaleType);
      playLead(time, leadFreq, secondsPerStep * 1.6, scaleType === "major");
    }
  }

  // 4. Space / Ambient FX Step Logic
  if (stemsState.space) {
    if (step % 12 === 2 || step % 16 === 11) {
      const fxFreq = getFreqFromScale(baseFrequency * 2, 7, scaleType);
      playSpacePluck(time, fxFreq);
    }
  }
}

// Sequential scheduler loop
function scheduler() {
  if (!isPlaying || !audioCtx) return;
  
  while (nextNoteTime < audioCtx.currentTime + scheduleAheadTime) {
    scheduleNote(currentStep, nextNoteTime);
    
    // Notify UI (safely wrapped)
    const activeStep = currentStep;
    if (stepCallback) {
      // Run callback on animation frame or defer to avoid state locking
      setTimeout(() => {
        if (isPlaying && stepCallback) stepCallback(activeStep);
      }, 0);
    }
    
    // Advance time and steps
    const secondsPerStep = 60.0 / currentBpm / 4; // 16th note step duration
    nextNoteTime += secondsPerStep;
    
    currentStep = (currentStep + 1) % 16;
  }
  
  timerId = setTimeout(scheduler, lookahead);
}

// Expose controllable parameters
export const studioSynth = {
  play: (trackId: string, bpm: number, baseFreq: number, activeStems: any, onStep: (step: number) => void) => {
    initAudio();
    if (isPlaying) {
      studioSynth.stop();
    }
    
    isPlaying = true;
    currentBpm = bpm;
    baseFrequency = baseFreq;
    activeTrackId = trackId;
    stemsState = { ...activeStems };
    stepCallback = onStep;
    
    currentStep = 0;
    nextNoteTime = audioCtx!.currentTime + 0.05;
    
    scheduler();
    
    // Set default filter
    if (filterNode) {
      filterNode.frequency.setValueAtTime(2200, audioCtx!.currentTime);
      filterNode.Q.setValueAtTime(5.0, audioCtx!.currentTime);
    }
  },
  
  stop: () => {
    isPlaying = false;
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }
    currentStep = 0;
    stepCallback = null;
    
    // Short fade out of master gain to avoid clicks
    if (masterGain && audioCtx) {
      masterGain.gain.setValueAtTime(masterGain.gain.value, audioCtx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
    }
  },
  
  updateStems: (stems: any) => {
    stemsState = { ...stems };
  },
  
  updateBpm: (bpm: number) => {
    currentBpm = bpm;
  },
  
  updateXYFilter: (percentageX: number, percentageY: number) => {
    if (!audioCtx || !filterNode) return;
    
    // X axis controls lowpass filter cutoff frequency (80Hz to 16000Hz exponentially)
    const minHz = 80;
    const maxHz = 16000;
    const cutoff = minHz * Math.pow(maxHz / minHz, percentageX);
    
    // Y axis controls filter Q / resonance (0.5 to 15.0 lean)
    const resonance = 0.5 + (percentageY * 14.5);
    
    const now = audioCtx.currentTime;
    filterNode.frequency.setTargetAtTime(cutoff, now, 0.03); // smooth ramp
    filterNode.Q.setTargetAtTime(resonance, now, 0.03);
  },
  
  getAnalyser: () => {
    initAudio();
    return analyserNode;
  }
};
