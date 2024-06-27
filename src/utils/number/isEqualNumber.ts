export const isEqualNumber = (a: number, b: number, options: { tolerance?: number } = {}) => {
  if (!options.tolerance) {
    return a === b;
  }

  return Math.abs(a - b) <= options.tolerance;
};
