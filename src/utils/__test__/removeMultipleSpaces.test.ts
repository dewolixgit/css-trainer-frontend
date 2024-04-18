import { removeMultipleSpaces } from '../string/removeMultipleSpaces';

describe('removeMultipleSpaces', () => {
  it('should replace multiple spaces with a single space and trim the string by default', () => {
    expect(removeMultipleSpaces('   Hello     world   ')).toBe('Hello world');
  });

  it('should replace multiple spaces with a single space and not trim the string when trim is false', () => {
    expect(removeMultipleSpaces('   Hello     world   ', { trim: false })).toBe(' Hello world ');
  });

  it('should handle strings with no spaces', () => {
    expect(removeMultipleSpaces('Helloworld')).toBe('Helloworld');
  });

  it('should handle strings with single space', () => {
    expect(removeMultipleSpaces('Hello world')).toBe('Hello world');
  });

  it('should handle empty strings', () => {
    expect(removeMultipleSpaces('')).toBe('');
  });
});
