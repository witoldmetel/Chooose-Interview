import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { BASE_URL } from '../../constants';
import { getTrip } from '../getTrip';

const mock = new MockAdapter(axios);

describe('getTrip', () => {
  test('should fetch a trip', async () => {
    const tripId = 1;
    const mockTrip = { id: tripId, name: 'Test Trip' };

    mock.onGet(`${BASE_URL}/${tripId}`).reply(200, mockTrip);

    const result = await getTrip(tripId);

    expect(result).toEqual(mockTrip);
  });
});
