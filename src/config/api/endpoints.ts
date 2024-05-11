import { Method } from 'axios';

const API_URL = process.env.API_URL || '/api/';

export type Endpoint = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getUrl: (...args: any[]) => string;
  method?: Method;
};

export const ENDPOINTS = {
  // Authorization/authentication
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

  // Topics
  topics: {
    getUrl: () => `${API_URL}topics`,
    method: 'GET',
  },

  // Tasks sets
  tasksSets: {
    getUrl: () => `${API_URL}tasks-sets/all`,
    method: 'GET',
  },
  tasksSetStatus: {
    getUrl: (tasksSetId: number) => `${API_URL}tasks-sets/progress/${tasksSetId}`,
    method: 'GET',
  },

  // Tasks
  saveInput: {
    getUrl: () => `${API_URL}tasks/save-input`,
    method: 'POST',
  },

  // User
  achievements: {
    getUrl: () => `${API_URL}users/skills`,
    method: 'GET',
  },
} as const satisfies Record<string, Endpoint>;
