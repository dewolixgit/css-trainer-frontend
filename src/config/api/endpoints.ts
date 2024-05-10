import { Method } from 'axios';

export type Endpoint = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getUrl: (...args: any[]) => string;
  method?: Method;
};
