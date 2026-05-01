import { typeText } from '../utils/typewriter';

export async function printLine(
  content: string, 
  containerId: string, 
  type: 'command' | 'response' | 'system' = 'response',
  url?: string // Añadimos un parámetro opcional para el link
) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const line = document.createElement('div');
  line.className = `terminal-line ${type}`; 
  container.appendChild(line);

  // Si hay una URL, envolvemos el contenido en un enlace al terminar de escribir
  if (url) {
    await typeText(content, line);
    line.innerHTML = `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;">${content}</a>`;
  } else {
    await typeText(content, line);
  }

  container.scrollTop = container.scrollHeight;
}

export function showPrompt(containerId: string) {
  const container = document.getElementById(containerId);
  if (!container) return;
    const prompt = document.createElement('div');
    prompt.className = 'terminal-prompt';
    prompt.innerHTML = `<span class="prompt-symbol">></span><span class="cursor">|</span>`;
    container.appendChild(prompt);
    container.scrollTop = container.scrollHeight;
}