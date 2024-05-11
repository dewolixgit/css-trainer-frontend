import { HttpStatusCode, Method } from 'axios';

import { BasePromiseResponse } from 'types/props';

export enum ApiStoreClientError {
  notAuthorized = 'not-authorized',
}

export type ApiStoreRequestEndpoint = {
  url: string;
  method: Method;
};

export type ApiStoreRequestOptions = {
  withAuthorization?: boolean;
  data?: Record<string, unknown>;
};

export type ApiStoreRequestResponse<D = undefined, E = undefined> = BasePromiseResponse<
  {
    payload: D;
    status: HttpStatusCode;
  },
  | {
      clientSide: true;
      clientError: {
        error: ApiStoreClientError;
        message?: string;
      };
    }
  | {
      clientSide: false;
      apiError: {
        payload: E;
        status: HttpStatusCode;
      };
    }
>;

export interface IApiStore {
  request<D = undefined, E = undefined>(
    endpoint: ApiStoreRequestEndpoint,
    options?: ApiStoreRequestOptions
  ): ApiStoreRequestResponse<D, E>;
}
