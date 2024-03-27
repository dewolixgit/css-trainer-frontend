/**
 * Creates an array of length n
 */
export const range = (n: number, { from = 0 }: { from?: number } = {}) => {
  const originLength = n + from;

  return Array.from(Array(originLength).keys()).slice(from, originLength);
};
