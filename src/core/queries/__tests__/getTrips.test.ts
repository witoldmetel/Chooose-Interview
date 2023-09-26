import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { BASE_URL } from '../../constants';
import { getTrips } from '../getTrips';

const mock = new MockAdapter(axios);

describe('getTrips', () => {
  test('should fetch trips with default page', async () => {
    const mockTrips = [
      { id: 1, name: 'Trip 1' },
      { id: 2, name: 'Trip 2' },
    ];

    mock.onGet(BASE_URL).reply(200, mockTrips);

    const result = await getTrips();

    expect(result).toEqual(mockTrips);
  });
});
