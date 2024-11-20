export const shuffleArray = (array: any[]) => {
  for (let i = array.length - 2; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
