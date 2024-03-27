import { range } from 'utils/array';

describe('Range function', () => {
  [[], [0], [0, 1], [0, 1, 2]].forEach((expectedArray) => {
    it(`Should return an array of length ${expectedArray.length}`, () => {
      expect(range(expectedArray.length)).toEqual(expectedArray);
    });
  });

  [[], [0], [3, 4], [6, 7, 8]].forEach((expectedArray) => {
    const startsFrom = expectedArray[0] ?? 5;

    it(`Should return an array of length ${expectedArray.length}. The parameter "from" is ${startsFrom}`, () => {
      expect(range(expectedArray.length, { from: startsFrom })).toEqual(expectedArray);
    });
  });
});
