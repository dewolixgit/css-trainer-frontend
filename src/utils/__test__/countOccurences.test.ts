import { countOccurrences } from 'utils/string/countOccurrences';

const testBunch = (params: {
  occurrence: string;
  tests: {
    input: string;
    occurrencesAmount: number;
  }[];
}) => {
  describe(`${params.occurrence}`, () => {
    params.tests.forEach(({ input, occurrencesAmount }) => {
      it(`Amount of occurrences: ${occurrencesAmount}`, () => {
        expect(countOccurrences(input, params.occurrence)).toBe(occurrencesAmount);
      });
    });
  });
};

describe('Function countOccurrences', () => {
  testBunch({
    occurrence: 'ugia',
    tests: [
      {
        input: 'Ut sed tortor at magna feugaiat fermentum id ut dui',
        occurrencesAmount: 0,
      },
      {
        input: 'Ut sed tortor at magna feugiat fermentum id ut dui',
        occurrencesAmount: 1,
      },
      {
        input: 'Ut sed tortor at magna feugiat fermentum id ugia ut dui',
        occurrencesAmount: 2,
      },
    ],
  });

  testBunch({
    occurrence: '\t tor',
    tests: [
      {
        input: 'Ut sed tortor at magna feugiat fermentum id ut dui',
        occurrencesAmount: 0,
      },
      {
        input: 'Ut sed tortor at magna feugiat\t torfermentum id ut dui',
        occurrencesAmount: 1,
      },
      {
        input: 'Ut sed\t tortor at magna feugiat fermentum id ut \t tordui',
        occurrencesAmount: 2,
      },
    ],
  });
});
