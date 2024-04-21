import { isEmailValid } from '../form/isEmailValid';

describe('isEmailValid', () => {
  it('should return true for valid emails', () => {
    expect(isEmailValid('test@example.com')).toBe(true);
    expect(isEmailValid('john.doe@example.co.uk')).toBe(true);
    expect(isEmailValid('jane_doe@example.io')).toBe(true);
  });

  it('should return false for invalid emails', () => {
    expect(isEmailValid('test@example')).toBe(false);
    expect(isEmailValid('john.doe@.co.uk')).toBe(false);
    expect(isEmailValid('jane_doe@example')).toBe(false);
    expect(isEmailValid('почта@мэил.ру')).toBe(false);
    expect(isEmailValid('')).toBe(false);
  });
});
