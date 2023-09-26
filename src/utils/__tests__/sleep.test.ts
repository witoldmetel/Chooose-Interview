import '@testing-library/jest-dom/extend-expect';

import { sleep } from '../sleep';

describe('sleep', () => {
  test('should resolve after the specified time', async () => {
    const start = Date.now();
    const ms = 1000;

    await sleep(ms);

    const end = Date.now();
    const elapsedTime = end - start;

    expect(elapsedTime).toBeGreaterThanOrEqual(ms);
  });
});
