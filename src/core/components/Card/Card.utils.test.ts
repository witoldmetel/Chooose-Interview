import { convertKilosToTons, getPluralName } from './Card.utils';

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

describe('convertKilosToTons', () => {
  test('should convert kilos to tons', () => {
    expect(convertKilosToTons(5432.55)).toBe('5.4 t');
    expect(convertKilosToTons(1500)).toBe('1.5 t');
    expect(convertKilosToTons(2500)).toBe('2.5 t');
    expect(convertKilosToTons(1000.999)).toBe('1 t');
  });

  test('should not convert when kilos are less than or equal to 1000', () => {
    expect(convertKilosToTons(0)).toBe('0 kg');
    expect(convertKilosToTons(1000)).toBe('1000 kg');
    expect(convertKilosToTons(999)).toBe('999 kg');
  });
});
