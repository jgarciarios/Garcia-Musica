export interface TimelineItem {
  era: string;
  institution: string;
  description: string;
  type: "education" | "professional" | "certification";
}

export interface Pilar {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface Album {
  id: string;
  title: string;
  year: string;
  type: "Álbum" | "EP" | "Single";
  description: string;
  tracks: number;
  gradient: string;
  textColor: string;
  coverImage?: string;
  spotifyUrl?: string;
}

// ── Proyectos Propios ──────────────────────────────────────────────────────
// Cada proyecto (banda o solista) tiene su propia lista de lanzamientos.
// Para agregar un nuevo proyecto: sumá un objeto más a PROYECTOS en data.ts.
// Para agregar un lanzamiento: sumá un objeto a la lista `releases` del proyecto.
export interface Release {
  id: string;
  title: string;
  year: string;
  type: "Álbum" | "EP" | "Single" | "Demo";
  coverImage?: string;
  gradient: string;
  spotifyUrl?: string;
  youtubeUrl?: string;
}

export interface Proyecto {
  id: string;
  name: string;           // "Falsos Clones", "Hormigas Sube al Árbol", "Xris García Ríos"
  role: string;           // Rol de Cris: "Guitarrista · Compositor", "Proyecto Solista", etc.
  gradient: string;       // Color de fondo del header del proyecto
  coverImage?: string;    // Imagen de portada del proyecto
  spotifyUrl?: string;
  releases: Release[];
}

export interface Produccion {
  id: string;
  artist: string;
  role: string;
  year?: string;
  gradient: string;
  coverImage?: string;
  spotifyUrl?: string;
  youtubeUrl?: string;
}
