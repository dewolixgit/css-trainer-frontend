import { Method } from 'axios';

const API_URL = process.env.API_URL || '/api/';

export type Endpoint = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getUrl: (...args: any[]) => string;
  method?: Method;
};

export const ENDPOINTS = {
  register: {
    getUrl: () => `${API_URL}auth/register`,
    method: 'POST',
  },
  login: {
    getUrl: () => `${API_URL}auth/login`,
    method: 'POST',
  },
  authorize: {
    getUrl: () => `${API_URL}auth/authorize`,
    method: 'GET',
  },
  topics: {
    getUrl: () => `${API_URL}topics`,
    method: 'GET',
  },
  tasksSets: {
    getUrl: () => `${API_URL}tasks-sets/all`,
    method: 'GET',
  },
} as const satisfies Record<string, Endpoint>;
