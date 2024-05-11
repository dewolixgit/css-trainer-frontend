import axios, { AxiosError, AxiosHeaders, AxiosResponse } from 'axios';

import { HeadersKeys, authorizationHeaderTemplate } from 'config/api';
import { LocalStorageKeys } from 'config/localStorage';
import {
  ApiStoreClientError,
  ApiStoreRequestEndpoint,
  ApiStoreRequestOptions,
  ApiStoreRequestResponse,
  IApiStore,
} from 'config/store/apiStore';

export class ApiStore implements IApiStore {
  async request<D = undefined, E = undefined>(
    endpoint: ApiStoreRequestEndpoint,
    { withAuthorization = true, data }: ApiStoreRequestOptions = {}
  ): ApiStoreRequestResponse<D, E> {
    const headers = new AxiosHeaders();

    if (withAuthorization) {
      const token = this._getAuthorizationToken();

      if (!token) {
        return {
          isError: true,
          data: {
            clientSide: true,
            clientError: {
              error: ApiStoreClientError.notAuthorized,
            },
          },
        };
      }

      headers.set(HeadersKeys.authorization, authorizationHeaderTemplate(token));
    }

    return axios({
      method: endpoint.method,
      url: endpoint.url,
      data: endpoint.method === 'GET' ? null : data,
      params: endpoint.method === 'GET' ? data : null,
      headers,
    }).then(
      (response) => ({
        isError: false,
        data: {
          payload: response.data,
          status: response.status,
        },
      }),
      (error: AxiosError) => ({
        isError: true,
        data: {
          clientSide: false,
          apiError: {
            payload: (error.response as AxiosResponse).data as E,
            status: (error.response as AxiosResponse).status,
          },
        },
      })
    );
  }

  private _getAuthorizationToken(): string | null {
    return localStorage.getItem(LocalStorageKeys.token);
  }
}
