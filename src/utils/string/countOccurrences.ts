export const countOccurrences = (input: string, toCount: string): number =>
  (input.match(new RegExp(toCount, 'g')) ?? [])?.length;
