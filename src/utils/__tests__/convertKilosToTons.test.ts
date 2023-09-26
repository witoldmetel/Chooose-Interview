import { convertKilosToTons } from '../convertKilosToTons';

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
