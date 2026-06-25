export interface TimelineItem {
  era: string;
  description: string;
  type: "education" | "professional" | "certification";
  accent: "violet" | "orange" | "green";
  label: string; // custom label replacing the generic "Formación"
}

export interface Pilar {
  id: string;
  title: string;
  description: string;
  tags: string[];
  accent: "violet" | "orange" | "green";
}

export interface Release {
  id: string;
  title: string;
  year: string;
  type: "Álbum" | "EP" | "Single" | "Demo";
  coverImage?: string;
  spotifyUrl?: string;
  roles: string[];
}

export interface Proyecto {
  id: string;
  name: string;
  role: string;
  spotifyUrl?: string;
  externalUrl?: string; // archive / project page link for "Ver más..."
  releases: Release[];
}

export interface Produccion {
  id: string;
  artist: string;
  releases: ProduccionRelease[];
}

export interface ProduccionRelease {
  title: string;
  year?: string;
  roles: string[];
  coverImage?: string;
  spotifyUrl?: string;
}

export interface BlogPost {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  tags: string[];
}

export interface Colaboracion {
  id: string;
  text: string;
}

// ─── TIMELINE ──────────────────────────────────────────────────────────────
export const TIMELINE: TimelineItem[] = [
  {
    era: "Coro del Liceo Francés — Primeros escenarios",
    description: "Inicio en el mundo de la música a través del canto coral. A los 8 años, presentación en vivo en Canal 13. Primera experiencia televisiva y escénica.",
    type: "education",
    accent: "green",
    label: "Origen",
  },
  {
    era: "Instituto Santa Ana — Piano y Coro",
    description: "Desarrollo de lectura musical, piano y canto. Raíces de una sensibilidad que moldearía toda la trayectoria artística posterior.",
    type: "education",
    accent: "green",
    label: "Conservatorio",
  },
  {
    era: "EMBA — Escuela de Música de Buenos Aires",
    description: "Carrera integral como músico profesional. Seleccionado por Pedro Aznar para participar en un taller intensivo de producción musical.",
    type: "education",
    accent: "violet",
    label: "Escuela",
  },
  {
    era: "Workshop 100% Mix y Diseño Sonoro — Mariano Bilinkis",
    description: "Especialización en mezcla y diseño sonoro. Desarrollo de criterio técnico y visión estética aplicada a la producción.",
    type: "education",
    accent: "orange",
    label: "Workshop",
  },
  {
    era: "+20 Años de Trayectoria Profesional",
    description: "Músico, productor, compositor, sesionista, docente y coach. Proyectos de banda, producciones originales, audiovisuales, clases y mentorías en constante evolución. Buenos Aires.",
    type: "professional",
    accent: "orange",
    label: "Profesional",
  },
  {
    era: "Coaching Ontológico — ICEA",
    description: "Certificación en Coaching Ontológico. Integración de herramientas de acompañamiento creativo y desarrollo personal en el trabajo con músicos y artistas.",
    type: "certification",
    accent: "violet",
    label: "Certificación",
  },
];

// ─── PILARES ────────────────────────────────────────────────────────────────
export const PILARES: Pilar[] = [
  {
    id: "produccion",
    title: "Producción Musical",
    description: "Producción integral desde la idea hasta el master. Acompañando la evolución de la obra para que el artista encuentre su identidad sonora.",
    tags: ["Grabación", "Mezcla", "Masterización"],
    accent: "violet",
  },
  {
    id: "composicion",
    title: "Composición y Arreglos",
    description: "Creación de música original para artistas y proyectos. Arreglos con identidad, narrativa y profundidad emocional.",
    tags: ["Composición", "Arreglos", "Armonía"],
    accent: "orange",
  },
  {
    id: "sesionista",
    title: "Músico Sesionista",
    description: "Guitarras y voces para proyectos en estudio y en vivo. Adaptación al estilo de cada artista con criterio musical propio.",
    tags: ["Guitarras", "Voces", "Estudio", "Live"],
    accent: "green",
  },
  {
    id: "clases",
    title: "Clases y Mentorías",
    description: "Enseñanza personalizada de guitarra, teoría, producción y composición. Metodología adaptada a cada etapa del artista.",
    tags: ["Guitarra", "Teoría", "Producción"],
    accent: "violet",
  },
  {
    id: "audiovisual",
    title: "Música para Audiovisuales",
    description: "Composición de bandas sonoras, jingles y música para cine, publicidad y video. Sincronización emocional entre imagen y sonido.",
    tags: ["Cine", "Publicidad", "Documental"],
    accent: "orange",
  },
  {
    id: "programacion",
    title: "Programación Musical",
    description: "Dirección y programación de shows en vivo para bares, restaurantes y eventos. Moby Dick Live Sessions · Muelle 3, Punta del Este (Uruguay). Formación en Protocolo y Ceremonial (2000–2001).",
    tags: ["Bares", "Restaurantes", "Eventos"],
    accent: "green",
  },
];

// ─── PROYECTOS PROPIOS ──────────────────────────────────────────────────────
export const PROYECTOS: Proyecto[] = [
  {
    id: "falsos-clones",
    name: "Falsos Clones",
    role: "Cantante · Guitarrista · Co-productor · Co-autor",
    spotifyUrl: "https://open.spotify.com/artist/1IU4Uk9Gw2ziG1WpjtUe9o",
    externalUrl: "https://open.spotify.com/artist/1IU4Uk9Gw2ziG1WpjtUe9o",
    releases: [
      {
        id: "antibosteso",
        title: "Antibosteso",
        year: "2011",
        type: "Álbum",
        coverImage: "https://i.scdn.co/image/ab67616d00001e02c95e1f46cbfe25b756ca443d",
        spotifyUrl: "https://open.spotify.com/album/6behBJh1obcVb13FuuMV6n",
        roles: ["Cantante", "Guitarrista", "Co-productor", "Grabación", "Co-autor"],
      },
      {
        id: "desnortear",
        title: "Desnortear",
        year: "2013",
        type: "Álbum",
        coverImage: "https://i.scdn.co/image/ab67616d00001e02028b808a3c1dd7b1d6556b7c",
        spotifyUrl: "https://open.spotify.com/album/6DlKHuJaU1sunRuUtP0ASp",
        roles: ["Cantante", "Guitarrista", "Co-productor", "Grabación", "Co-autor"],
      },
      {
        id: "ballet-saturno",
        title: "El Ballet de Saturno",
        year: "2019",
        type: "Álbum",
        coverImage: "https://i.scdn.co/image/ab67616d00001e02406214721dabc6d393181741",
        spotifyUrl: "https://open.spotify.com/album/7fowKSuslpUGT0Wb3HLiab",
        roles: ["Cantante", "Guitarrista", "Co-productor", "Grabación", "Co-autor", "Mezcla"],
      },
      {
        id: "raros-clones",
        title: "Raros Clones",
        year: "2016",
        type: "Álbum",
        coverImage: "https://i.scdn.co/image/ab67616d00001e02b6dae68c598584624f64a4c3",
        spotifyUrl: "https://open.spotify.com/album/1IvPjSdVsSXgk4r0SftMxs",
        roles: ["Cantante", "Guitarrista", "Co-productor", "Grabación", "Co-autor", "Mezcla"],
      },
      {
        id: "apres-midi",
        title: "Après-Midi",
        year: "2020",
        type: "EP",
        coverImage: "https://i.scdn.co/image/ab67616d00001e0246d650e66d22c718cc623e2a",
        spotifyUrl: "https://open.spotify.com/album/2R8VYN4bHXXOOlnBNuksN4",
        roles: ["Guitarrista", "Co-productor", "Grabación", "Co-autor", "Mezcla", "Mastering"],
      },
      {
        id: "rumor",
        title: "Rumor",
        year: "2024",
        type: "Single",
        coverImage: "https://i.scdn.co/image/ab67616d00001e022930498153feec118442e16d",
        spotifyUrl: "https://open.spotify.com/album/3navl3EFpzeUfqZpArho1w",
        roles: ["Guitarras", "Voces", "Co-Producción", "Grabación", "Mezcla", "Mastering"],
      },
      {
        id: "tu-paso",
        title: "Tu Paso",
        year: "2024",
        type: "Single",
        coverImage: "https://i.scdn.co/image/ab67616d00001e026b69a92233b78f37bab519d3",
        spotifyUrl: "https://open.spotify.com/album/5922XYYHkpBfMtDgEMIfWR",
        roles: ["Guitarras", "Voces", "Producción", "Grabación", "Mezcla", "Mastering"],
      },
      {
        id: "el-loco",
        title: "El Loco",
        year: "2024",
        type: "Single",
        coverImage: "https://i.scdn.co/image/ab67616d00001e02f9f7d01a4ab8622ceb1ba94c",
        spotifyUrl: "https://open.spotify.com/album/4HkQ0gFzL9jzL88YjZhIXC",
        roles: ["Guitarras", "Voces", "Co-Producción", "Grabación", "Mezcla", "Mastering"],
      },
    ],
  },
  {
    id: "xris-garcia-rios",
    name: "Xris Garcia Rios",
    role: "Guitarras · Voces · Co-autor · Co-Producción",
    spotifyUrl: "https://open.spotify.com/album/4yBjrFyaZljESppgmVcDt8",
    releases: [
      {
        id: "xris-ep",
        title: "En ti",
        year: "2020",
        type: "EP",
        coverImage: "https://i.scdn.co/image/ab67616d00001e028581d51d5315d8c756a42866",
        spotifyUrl: "https://open.spotify.com/album/4yBjrFyaZljESppgmVcDt8",
        roles: ["Guitarras", "Voces", "Co-autor", "Co-Producción", "Mastering"],
      },
    ],
  },
  {
    id: "hormiga-sube-al-arbol",
    name: "Hormiga Sube al Árbol",
    role: "Guitarrista · Coros · Co-productor · Co-autor",
    spotifyUrl: "https://open.spotify.com/album/04k3HSFrrvIzNeOvMh3NZa",
    releases: [
      {
        id: "hormiga-album",
        title: "Hormiga Sube al Arbol",
        year: "2020",
        type: "Álbum",
        coverImage: "https://i.scdn.co/image/ab67616d00001e02c6b5a6959e3f694963aed0f2",
        spotifyUrl: "https://open.spotify.com/album/04k3HSFrrvIzNeOvMh3NZa",
        roles: ["Guitarrista", "Coros", "Co-productor", "Grabación", "Co-autor"],
      },
    ],
  },
  {
    id: "fruto-gris",
    name: "Fruto Gris",
    role: "Guitarras · Voces",
    externalUrl: "https://www.reverbnation.com/frutogris/song/5750138-como-los-pjaros",
    releases: [
      {
        id: "fruto-gris-releases",
        title: "Como los Pájaros",
        year: "—",
        type: "Single",
        roles: ["Guitarras", "Voces"],
      },
    ],
  },
  {
    id: "flor-albarracin",
    name: "Flor Albarracin y La Relámpago",
    role: "Guitarras · Sesionista",
    spotifyUrl: "https://open.spotify.com/album/1FF1GugVn4Ndarm2RuHYs9",
    releases: [
      {
        id: "flor-albarracin-releases",
        title: "Corazón de Guerrera",
        year: "2026",
        type: "Single",
        coverImage: "https://i.scdn.co/image/ab67616d00001e023f4bba25178f9ba4f81a157c",
        spotifyUrl: "https://open.spotify.com/album/1FF1GugVn4Ndarm2RuHYs9",
        roles: ["Guitarras", "Sesionista"],
      },
    ],
  },
];

// ─── OTRAS PRODUCCIONES ──────────────────────────────────────────────────────
export const PRODUCCIONES: Produccion[] = [
  {
    id: "vir-salazar",
    artist: "Vir Salazar",
    releases: [
      {
        title: "Yo lo comprendo",
        year: "2025",
        roles: ["Producción", "Guitarras", "Grabación", "Mezcla", "Mastering"],
        coverImage: "https://i.scdn.co/image/ab67616d00001e02b79b85da3df8f75d0577ef57",
        spotifyUrl: "https://open.spotify.com/track/23BBnC51VRL17lESZ89gqQ",
      },
      {
        title: "Cuenta conmigo",
        year: "2026",
        roles: ["Producción", "Guitarras", "Grabación", "Mezcla", "Mastering"],
        coverImage: "https://i.scdn.co/image/ab67616d00001e02ef9ea78f3a0fea4b71766a42",
        spotifyUrl: "https://open.spotify.com/track/7f7hr4lOfoMkYLF64G8ASn",
      },
      {
        title: "Misty - Niebla",
        year: "2026",
        roles: ["Producción", "Guitarras", "Grabación", "Mezcla", "Mastering"],
        coverImage: "https://i.scdn.co/image/ab67616d00001e0235345ad5c8ad4c656e0c0363",
        spotifyUrl: "https://open.spotify.com/track/5yPxk7CDe59tbW6z5Nf2aS",
      },
      {
        title: "The way you look tonight",
        year: "2026",
        roles: ["Producción", "Guitarras", "Grabación", "Mezcla", "Mastering"],
        coverImage: "https://i.scdn.co/image/ab67616d00001e02dc6cfea11ddae9e81b41469b",
        spotifyUrl: "https://open.spotify.com/track/2l6O8xrKIJS5b2EHKDUnZv",
      },
      {
        title: "Por causa de voce",
        year: "2026",
        roles: ["Producción", "Guitarras", "Grabación", "Mezcla", "Mastering"],
        coverImage: "https://i.scdn.co/image/ab67616d00001e024ef76f0279a3daa66914d0da",
        spotifyUrl: "https://open.spotify.com/track/0T6onOkjyPKUqCm7fVXn49",
      },
    ],
  },
  {
    id: "andrea-levitt",
    artist: "Andrea Levitt",
    releases: [
      {
        title: "Punto Inicial",
        year: "2020",
        roles: ["Producción", "Guitarras", "Teclados", "Coros", "Grabación", "Mezcla", "Mastering"],
        coverImage: "https://i.scdn.co/image/ab67616d00001e02f212524bee2a2aec0c3b14c2",
        spotifyUrl: "https://open.spotify.com/album/2htrlcrvskrpGp1K2i29fX",
      },
      {
        title: "De cá pra lá",
        year: "2020",
        roles: ["Producción", "Guitarras", "Coros", "Grabación", "Mezcla", "Mastering"],
        coverImage: "https://i.scdn.co/image/ab67616d00001e029c75c1e16d367f888bdd99a5",
        spotifyUrl: "https://open.spotify.com/album/0ChVgloAaPYRCFhDmD9RaT",
      },
    ],
  },
  {
    id: "cata-carpena",
    artist: "Cata Carpena",
    releases: [
      {
        title: "AEL",
        year: "2019",
        roles: ["Producción", "Grabación", "Guitarras", "Programaciones", "Mezcla", "Mastering"],
        coverImage: "https://i.scdn.co/image/ab67616d00001e029fc955d20aa51d5b428bcd7c",
        spotifyUrl: "https://open.spotify.com/album/1rHZNSR6E64dM7RFMc6o6u",
      },
    ],
  },
  {
    id: "sebastian-zambrana",
    artist: "Sebastian Zambrana",
    releases: [
      {
        title: "Producción",
        roles: ["Producción", "Guitarras", "Grabación", "Mezcla"],
      },
    ],
  },
  {
    id: "lisa-queti",
    artist: "Lisa Queti",
    releases: [
      {
        title: "Junta tus cosas",
        year: "2023",
        roles: ["Producción", "Guitarras", "Teclados", "Grabación", "Mezcla", "Mastering"],
        coverImage: "https://i.scdn.co/image/ab67616d00001e02e239f1c8567cec73ff0a7b7e",
        spotifyUrl: "https://open.spotify.com/album/36U8gzQTfDz0x8Z74vw3zD",
      },
      {
        title: "Llamame por mi nombre",
        year: "2025",
        roles: ["Producción", "Guitarras", "Grabación", "Mezcla", "Mastering"],
        coverImage: "https://i.scdn.co/image/ab67616d00001e0279a159b19589899a71c7ea22",
        spotifyUrl: "https://open.spotify.com/track/21EVhbksyv0PgOpiNhHoOS",
      },
    ],
  },
  {
    id: "franco-zamorano",
    artist: "Franco Zamorano",
    releases: [
      {
        title: "Boleros",
        year: "2023",
        roles: ["Producción", "Guitarras", "Grabación", "Mezcla"],
        coverImage: "https://i.scdn.co/image/ab67616d00001e02978d07f7c1c219bc66336f7f",
        spotifyUrl: "https://open.spotify.com/track/1RhlOT7V74C1mPO1KYkjmV",
      },
    ],
  },
];

// ─── COLABORACIONES ──────────────────────────────────────────────────────────
export const COLABORACIONES: Colaboracion[] = [
  { id: "moby-dick", text: "Programación · Moby Dick Live Sessions 2025" },
  { id: "muelle-3", text: "Programación · Muelle 3, Punta del Este, Uruguay" },
  { id: "palermo-vintage", text: "Palermo Vintage — Muestras y Producciones de Streaming" },
  { id: "sergio-rotman", text: "Grabé guitarras para el disco de Sergio Rotman en el estudio de Mario Siperman" },
  { id: "vadala", text: "Grabé guitarras para el disco de Ger Kalinscky, junto a músicos como Guillermo Vadalá." },
  { id: "zorrito", text: "En vivo junto al Zorrito Von Quintero y Jimmy Rip" },
  { id: "lado-u", text: "Sesionista de Lado U, productora de espectáculos" },
  { id: "audiovisual", text: "Música para documentales y publicidades" },
];

// ─── SHOWS EN VIVO ──────────────────────────────────────────────────────────
export interface ShowProposal {
  id: string;
  name: string;
  genre: string;
  description: string;
  accent: "violet" | "orange" | "green";
}

export const SHOWS_EN_VIVO: ShowProposal[] = [
  {
    id: "press-start",
    name: "PRESS START",
    genre: "Rock Internacional",
    description: "Un recorrido por los clásicos del rock internacional: The Beatles, Rolling Stones, U2, Foo Fighters, Radiohead y más. Alta energía, nostalgia y canciones que todos conocen.",
    accent: "violet",
  },
  {
    id: "handle",
    name: "HANDLE",
    genre: "80s · 90s Rock & Pop",
    description: "Lo mejor del pop y rock de los 80s y 90s: Depeche Mode, The Cure, Duran Duran, Alanis Morissette, Nirvana. Para fiestas temáticas y eventos corporativos.",
    accent: "orange",
  },
  {
    id: "portastudio",
    name: "PORTASTUDIO",
    genre: "Rock Argentino",
    description: "El nombre viene de la grabadora multipista de cassette que usaban los grandes: en esas máquinas nacieron las demos del rock argentino. El show es eso: Charly García, Fito Páez, Serú Girán, Los Redonditos, Divididos, Soda Stereo. Directo, sin adornos, con toda la intensidad del original.",
    accent: "green",
  },
  {
    id: "lounge-service",
    name: "LOUNGE SERVICE",
    genre: "Bossa & Jazz",
    description: "Música de ambiente sofisticado. Bossa nova, jazz standards y MPB para cócteles, inauguraciones, restaurants de alta gama y eventos corporativos.",
    accent: "violet",
  },
  {
    id: "dumont",
    name: "DUMONT",
    genre: "Clásicos Franceses",
    description: "Jacques Brel, Édith Piaf, Serge Gainsbourg, Georges Brassens. Canciones francesas icónicas en formato dúo o trío. Ideal para embajadas, institutos culturales y eventos temáticos.",
    accent: "orange",
  },
  {
    id: "duo-garcia",
    name: "DUO GARCIA",
    genre: "Blues · R&B · Oldies",
    description: "Un dúo íntimo de blues, rhythm & blues y oldies americanos. Versátil y atmosférico, adaptable a espacios íntimos o como apertura de eventos más grandes.",
    accent: "green",
  },
];

// ─── YOUTUBE VIDEOS ─────────────────────────────────────────────────────────
// Seleccionados para la web — se muestran 3 random por visita
export const YOUTUBE_VIDEO_IDS: string[] = [
  "srsOWfnUIrM",
  "VFmbN1U4h6c",
  "M73R2JyjYI0",
  "CXLTKQOdEWM",
  "MXfbqAlSUaw",
  "sca4gym3o-o",
];

// Producciones
export const YOUTUBE_PRODUCCIONES: string[] = [
  "Bvqr_xvTDR8",
  "IkcgFUaXa3M",
  "VTNvOjk_VU4",
  "LdStuGNVrWs",
  "y3JM-wH7PjM",
  "VLvXKl0SdZY",
  "by5MwbEsvyY",
  "6GMluBv46Ks",
  "-7hKcx_w_vQ",
  "iS_6Nw5oPrM",
  "aoz8B7R3S3Y",
];

// Grabación, Mezcla, Mastering
export const YOUTUBE_GRABACION: string[] = [
  "-wyJyUWi48I",
  "-7hKcx_w_vQ",
];

// Colaboraciones
export const YOUTUBE_COLABORACIONES: string[] = [
  "WW7PSkibk38",
  "e29u3aCaa44",
  "Ql1_ANgInDM",
  "g84DaTBdQfk",
  "VBCLVj7Q4Vs",
  "VdgV8Fh1zfU",
  "-3vrnJh-NMw",
  "VWCFWRgZUPk",
  "jlIauHRnrs8",
  "pxl4XthFD8E",
  "F7tHYc52Ybo",
  "0H5M4u-ib7c",
  "3JT0sOnE0HM",
];

// ─── BLOG / BITÁCORA ────────────────────────────────────────────────────────
export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    date: "Junio 2026",
    title: "Live Sessions Moby Dick 2025",
    excerpt: "Un registro del proceso creativo detrás de las sesiones en vivo de 2025, el sonido y lo que aprendimos en cada show.",
    tags: ["Shows", "Producción"],
  },
  {
    id: "2",
    date: "Mayo 2026",
    title: "Producción como acompañamiento artístico",
    excerpt: "Cómo entender la producción no como imposición de una estética, sino como herramienta para que cada canción encuentre su mejor forma.",
    tags: ["Filosofía", "Proceso"],
  },
  {
    id: "3",
    date: "Abril 2026",
    title: "Band Experience: cuando el equipo suena junto",
    excerpt: "Lo que pasa cuando un grupo que nunca tocó junto tiene que escucharse, coordinarse y crear algo en tiempo real.",
    tags: ["Band Experience", "Workshop"],
  },
];
