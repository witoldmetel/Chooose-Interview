import axios from 'axios';

import { sleep } from '../../utils/sleep';
import { Trip } from '../types';

const BASE_URL = 'http://localhost:5000/trips';
const PAGE_SIZE = 15;

export const client = axios.create({
  baseURL: BASE_URL,
});

// @todo: Simulate slow request
client.interceptors.response.use(async (response) => {
  // add artificial delay for dev env
  if (process.env.NODE_ENV === 'development') {
    await sleep();
  }

  return response.data;
});

export const getTrips = async (page: number = 1) => {
  return axios
    .get<Trip[]>(BASE_URL, {
      params: {
        _page: page,
        _limit: PAGE_SIZE,
      },
    })
    .then((response) => response.data);
};
