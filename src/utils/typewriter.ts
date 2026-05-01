// src/utils/typewriter.ts
export const typeEffect = async (element: HTMLElement, text: string, delay: number = 50) => {
  for (const char of text) {
    element.textContent += char;
    await new Promise(resolve => setTimeout(resolve, delay));
  }
};
export const typeText = async (text: string, container: HTMLElement) => {
  await typeEffect(container, text);
}