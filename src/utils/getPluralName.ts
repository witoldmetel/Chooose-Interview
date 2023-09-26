import pluralize from 'pluralize';

export function getPluralName(word: string, count: number = 0): string {
  return pluralize(word, count, true);
}
