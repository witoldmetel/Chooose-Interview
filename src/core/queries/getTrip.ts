import axios from 'axios';

import { BASE_URL } from '../constants';
import { Trip } from '../types';

export const getTrip = async (id: number) => {
  return axios.get<Trip>(`${BASE_URL}/${id}`).then((response) => response.data);
};
