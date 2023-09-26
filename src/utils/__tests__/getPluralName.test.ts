import { getPluralName } from '../getPluralName';

describe('getPluralName', () => {
  test('should return the singular word when count is 1', () => {
    const word = 'apple';
    const count = 1;

    const result = getPluralName(word, count);

    expect(result).toBe('1 apple');
  });

  test('should return the plural word when count is greater than 1', () => {
    const word = 'apple';
    const count = 3;

    const result = getPluralName(word, count);

    expect(result).toBe('3 apples');
  });
});
