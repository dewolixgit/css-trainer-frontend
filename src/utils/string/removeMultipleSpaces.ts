export const removeMultipleSpaces = (
  str: string,
  { trim = true }: { trim?: boolean } = {}
): string => {
  let result = str.replace(/\s+/g, ' ');

  if (trim) {
    result = result.trim();
  }

  return result;
};
