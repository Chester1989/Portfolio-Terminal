import './style.css';
import { printLine, showPrompt } from './ui/render';
import { MIS_PROYECTOS, INFO_BIO, SOCIAL_NETWORKS } from './data/commands';

const initTerminal = async () => {
  const container = "terminal-content";

  // 1. Bio
  await printLine("whoami", container, "command");
  await printLine(`${INFO_BIO.nombre} - ${INFO_BIO.rol}`, container, "response");
  await printLine(`Ubicación: ${INFO_BIO.ubicacion}`, container, "response");
  
  await new Promise(resolve => setTimeout(resolve, 500));

  // 2. Proyectos (Automatizado)
  await printLine("ls projects/ --detail", container, "command");
  
  for (const proy of MIS_PROYECTOS) {
    // Imprimimos una línea formateada para cada proyecto
    const techString = proy.tech.join(", ");
    await printLine(`> ${proy.nombre.toUpperCase()}`, container, "response");
    await printLine(`  [${techString}]`, container, "system");
    await printLine(`  ${proy.descripcion}`, container, "response");
    await printLine(" ", container, "response"); // Salto de línea estético
  }

  await new Promise(resolve => setTimeout(resolve, 800));

  // 3. Redes Sociales
  await printLine("cat contact.txt", container, "command");
  
 // En la sección de redes sociales de tu main.ts
for (const red of SOCIAL_NETWORKS) {
  // Pasamos el contenido y la URL como cuarto argumento
  await printLine(`${red.plataforma}: ${red.usuario}`, container, "response", red.url);
}

  await printLine("----------------------------------", container, "system");
  await printLine("Proceso finalizado. Sistema listo.", container, "system");

  // 4. Prompt Final (El cursor parpadeante)
  showPrompt(container);
};

initTerminal();