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
    id: "shows",
    title: "Shows en Vivo",
    description: "Performances con energía, presencia escénica y conexión genuina con el público. Años de experiencia en escenarios de toda escala.",
    tags: ["Conciertos", "Festivales", "Eventos"],
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
        year: "2014",
        type: "Álbum",
        spotifyUrl: "https://open.spotify.com/artist/1IU4Uk9Gw2ziG1WpjtUe9o",
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
    releases: [
      {
        id: "xris-ep",
        title: "EP Solista",
        year: "2023",
        type: "EP",
        roles: ["Guitarras", "Voces", "Co-autor", "Co-Producción", "Mastering"],
      },
    ],
  },
  {
    id: "hormiga-sube-al-arbol",
    name: "Hormiga Sube al Árbol",
    role: "Guitarrista · Coros · Co-productor · Co-autor",
    releases: [
      {
        id: "hormiga-album",
        title: "Álbum",
        year: "—",
        type: "Álbum",
        roles: ["Guitarrista", "Coros", "Co-productor", "Grabación", "Co-autor"],
      },
    ],
  },
  {
    id: "fruto-gris",
    name: "Fruto Gris",
    role: "Guitarras · Voces",
    releases: [
      {
        id: "fruto-gris-releases",
        title: "Lanzamientos",
        year: "—",
        type: "Álbum",
        roles: ["Guitarras", "Voces"],
      },
    ],
  },
  {
    id: "flor-albarracin",
    name: "Flor Albarracin y La Relámpago",
    role: "Guitarras · Sesionista",
    releases: [
      {
        id: "flor-albarracin-releases",
        title: "Producciones",
        year: "—",
        type: "Álbum",
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
        title: "Producción",
        roles: ["Producción", "Guitarras", "Grabación", "Mezcla", "Mastering"],
      },
    ],
  },
  {
    id: "andrea-levitt",
    artist: "Andrea Levitt",
    releases: [
      {
        title: "Punto Inicial",
        year: "2013",
        roles: ["Producción", "Guitarras", "Teclados", "Coros", "Grabación", "Mezcla", "Mastering"],
      },
      {
        title: "De Lá Pra Aca",
        roles: ["Producción", "Guitarras", "Coros", "Grabación", "Mezcla", "Mastering"],
      },
    ],
  },
  {
    id: "cata-carpena",
    artist: "Cata Carpena",
    releases: [
      {
        title: "AEL",
        year: "2015/16",
        roles: ["Producción", "Grabación", "Guitarras", "Programaciones", "Mezcla", "Mastering"],
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
        title: "Junta Tus Cosas",
        year: "2021",
        roles: ["Producción", "Guitarras", "Teclados", "Grabación", "Mezcla", "Mastering"],
      },
      {
        title: "Llamame por mi Nombre",
        roles: ["Producción", "Guitarras", "Grabación", "Mezcla", "Mastering"],
      },
    ],
  },
  {
    id: "franco-zamorano",
    artist: "Franco Zamorano",
    releases: [
      {
        title: "Producción",
        roles: ["Producción", "Guitarras", "Grabación", "Mezcla"],
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

// ─── YOUTUBE VIDEOS ─────────────────────────────────────────────────────────
// Replace these IDs with real video IDs from @garciamusicaYT
// To get an ID: open a video on YouTube → the URL is youtube.com/watch?v=ID_HERE
export const YOUTUBE_VIDEO_IDS: string[] = [
  "VIDEO_ID_1", // e.g. "dQw4w9WgXcQ"
  "VIDEO_ID_2",
  "VIDEO_ID_3",
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
