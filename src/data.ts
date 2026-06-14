export interface TimelineItem {
  era: string;
  description: string;
  type: "education" | "professional" | "certification";
  accent: "violet" | "orange" | "green";
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
  releases: Release[];
}

export interface Produccion {
  id: string;
  artist: string;
  title: string;
  year?: string;
  roles: string[];
}

export interface BlogPost {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  tags: string[];
}

// ─── TIMELINE ──────────────────────────────────────────────────────────────
export const TIMELINE: TimelineItem[] = [
  {
    era: "Formación musical desde la infancia",
    description: "Participación en coros desde la escuela primaria. Desarrollo de la escucha, el canto y el trabajo grupal. Piano y guitarra como primeros instrumentos.",
    type: "education",
    accent: "green",
  },
  {
    era: "Instituto Santa Ana — Piano y Coro",
    description: "Formación formal en piano y coro. Raíces de una sensibilidad que moldearía toda la trayectoria artística posterior.",
    type: "education",
    accent: "green",
  },
  {
    era: "EMBA — Escuela de Música de Buenos Aires",
    description: "Formación integral como músico profesional. Seleccionado para trabajar con Pedro Aznar en un workshop intensivo de producción.",
    type: "education",
    accent: "violet",
  },
  {
    era: "Mezcla y Diseño Sonoro — Mariano Bilinkis",
    description: "Estudios especializados en mezcla y diseño sonoro. Desarrollo de criterio técnico y visión estética aplicada a la producción.",
    type: "education",
    accent: "orange",
  },
  {
    era: "+20 Años de Trayectoria Profesional",
    description: "Músico, productor, compositor, docente y coach. Proyectos de banda, producciones originales, audiovisuales, clases y mentorías en constante evolución. Buenos Aires.",
    type: "professional",
    accent: "orange",
  },
  {
    era: "Coaching Ontológico — ICEA",
    description: "Certificación en Coaching Ontológico. Integración de herramientas de acompañamiento creativo y desarrollo personal en el trabajo con músicos y artistas.",
    type: "certification",
    accent: "violet",
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
    id: "clases",
    title: "Clases y Mentorías",
    description: "Enseñanza personalizada de guitarra, teoría, producción y composición. Metodología adaptada a cada etapa del artista.",
    tags: ["Guitarra", "Teoría", "Producción"],
    accent: "green",
  },
  {
    id: "audiovisual",
    title: "Música para Audiovisuales",
    description: "Composición de bandas sonoras, jingles y música para cine, publicidad y video. Sincronización emocional entre imagen y sonido.",
    tags: ["Cine", "Publicidad", "Documental"],
    accent: "violet",
  },
  {
    id: "shows",
    title: "Shows en Vivo",
    description: "Performances con energía, presencia escénica y conexión genuina con el público. Años de experiencia en escenarios de toda escala.",
    tags: ["Conciertos", "Festivales", "Eventos"],
    accent: "orange",
  },
  {
    id: "band",
    title: "Band Experience",
    description: "Workshop musical para empresas. Un equipo se convierte en banda para experimentar liderazgo, escucha activa y trabajo colaborativo.",
    tags: ["Team Building", "Workshop", "Coach"],
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
];

// ─── PRODUCCIONES EXTERNAS ──────────────────────────────────────────────────
export const PRODUCCIONES: Produccion[] = [
  {
    id: "andrea-levitt-1",
    artist: "Andrea Levitt",
    title: "Punto Inicial",
    year: "2013",
    roles: ["Producción", "Guitarras", "Teclados", "Coros", "Grabación", "Mezcla", "Mastering"],
  },
  {
    id: "andrea-levitt-2",
    artist: "Andrea Levitt",
    title: "De Lá Pra Aca",
    roles: ["Producción", "Guitarras", "Coros", "Grabación", "Mezcla", "Mastering"],
  },
  {
    id: "cata-carpena",
    artist: "Cata Carpena",
    title: "AEL",
    year: "2015/16",
    roles: ["Producción", "Grabación", "Guitarras", "Programaciones", "Mezcla", "Mastering"],
  },
  {
    id: "lisa-queti-1",
    artist: "Lisa Queti",
    title: "Junta Tus Cosas",
    year: "2021",
    roles: ["Producción", "Guitarras", "Teclados", "Grabación", "Mezcla", "Mastering"],
  },
  {
    id: "lisa-queti-2",
    artist: "Lisa Queti",
    title: "Llamame por mi Nombre",
    roles: ["Producción", "Guitarras", "Grabación", "Mezcla", "Mastering"],
  },
];

export const OTROS_PROYECTOS: string[] = [
  "Flor Albarracin y la Relampago",
  "Programación Moby Dick Live Sessions 2025",
  "Palermo Vintage — Muestras y Streaming",
  "Sergio Rotman y Mario Siperman",
  "Guillermo Vadalá",
  "Zorrito Von Quintero (Lado U)",
  "Pedro Aznar — Workshop EMBA",
  "Música para documentales",
  "Música para publicidades",
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
