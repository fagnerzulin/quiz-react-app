export const sheffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);
