import pluralize from 'pluralize';

export function getPluralName(word: string, count: number = 0): string {
  return pluralize(word, count, true);
}

export function convertKilosToTons(kilos: number): string {
  const tons = kilos / 1000;

  if (kilos > 1000) {
    return `${Math.round(tons * 10) / 10} t`;
  } else {
    return `${parseFloat(kilos.toFixed(1))} kg`;
  }
}
