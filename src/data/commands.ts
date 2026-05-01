// Definimos una interfaz para que TypeScript nos ayude a no cometer errores
interface Proyecto {
  nombre: string;
  tech: string[];
  descripcion: string;
}

export const MIS_PROYECTOS: Proyecto[] = [
  {
    nombre: "Dashboard Financiero",
    tech: ["TypeScript", "Vite", "LocalStorage"],
    descripcion: "Gestor de ingresos/gastos con modo oscuro y filtros."
  },
  {
    nombre: "Movie Collection",
    tech: ["TypeScript", "JSON", "Node.js"],
    descripcion: "Sistema de gestión de películas con persistencia en archivos."
  },
  {
    nombre: "To-Do List Fullstack",
    tech: ["MongoDB", "Express", "React", "Node"],
    descripcion: "Aplicación de tareas con integración a base de datos en la nube."
  }
];

export const INFO_BIO = {
  nombre: "Alejandro González",
  rol: "Fullstack Developer en formación",
  ubicacion: "Tijuana, México",
  skills: ["HTML/CSS","JavaScript", "TypeScript", "Node.js", "React", "MongoDB", "Bootstrap"]
};

// Añade esto a tu archivo de datos
export const SOCIAL_NETWORKS = [
  { plataforma: "GitHub", usuario: "Chester1989", url: "https://github.com/Chester1989" },
  { plataforma: "LinkedIn", usuario: "Alex Gonzalez", url: "https://www.linkedin.com/in/alex-gonzalez-98804a365" },
  { plataforma: "Email", usuario: "agf_001@outlook.com", url: "mailto:agf_001@outlook.com" }
];