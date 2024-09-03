export const randomBubbleGenerator = () => {
  const size = Math.random() * 100 + 100;
  const x = Math.random() * 70 + 10;
  const y = Math.random() * 70 + 10;

  return {
    coordinates: { x, y },
    size,
  };
};
