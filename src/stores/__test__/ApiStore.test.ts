import axios from 'axios';

import { authorizationHeaderTemplate, HeadersKeys } from 'config/api';
import { LocalStorageKeys } from 'config/localStorage';
import { ApiStoreClientError, ApiStoreRequestEndpoint } from 'config/store/apiStore';
import { ApiStore } from 'stores/globals/api';

jest.mock('axios');

describe('ApiStore', () => {
  let store: ApiStore;
  let mockAxios: jest.MockedFunction<typeof axios>;

  beforeEach(() => {
    store = new ApiStore();
    mockAxios = jest.mocked(axios);
    delete mockAxios.AxiosHeaders.prototype[HeadersKeys.authorization];
    window.localStorage.clear();
  });

  describe('request', () => {
    const successfulEndpoint: ApiStoreRequestEndpoint = {
      method: 'GET',
      url: 'https://api.example.com/data',
    };

    const errorEndpoint: ApiStoreRequestEndpoint = {
      method: 'POST',
      url: 'https://api.example.com/error',
    };

    it('should return successful response with data', async () => {
      const mockData = { message: 'Success!' };

      mockAxios.mockResolvedValueOnce({
        data: mockData,
        status: 200,
      });

      const response = await store.request(successfulEndpoint, { withAuthorization: false });

      expect(response.isError).toBeFalsy();
      expect(response.data).toEqual({ payload: mockData, status: 200 });
    });

    it('should return error response for unauthorized request', async () => {
      const response = await store.request(successfulEndpoint);

      expect(response.isError).toBeTruthy();
      expect(response.data).toEqual({
        clientSide: true,
        clientError: { error: ApiStoreClientError.notAuthorized },
      });
    });

    it('should return error response for API error', async () => {
      // @ts-ignore
      mockAxios.AxiosHeaders.prototype.set = () => {};

      window.localStorage.setItem(LocalStorageKeys.token, 'token');
      const mockErrorData = { message: 'Internal Server Error' };

      mockAxios.mockRejectedValueOnce({ response: { data: mockErrorData, status: 500 } });

      const response = await store.request(errorEndpoint);

      expect(response.isError).toBeTruthy();
      expect(response.data).toEqual({
        clientSide: false,
        apiError: { payload: mockErrorData, status: 500 },
      });
    });

    it('should include data in request for POST requests', async () => {
      // @ts-ignore
      mockAxios.AxiosHeaders.prototype.set = () => {};

      window.localStorage.setItem(LocalStorageKeys.token, 'token');

      const postData = { name: 'John Doe' };

      mockAxios.mockResolvedValueOnce({ data: {}, status: 201 });

      await store.request(errorEndpoint, { data: postData });

      expect(mockAxios).toHaveBeenCalledWith(expect.objectContaining({ data: postData }));
    });

    it('should include authorization header if withAuthorization is true', async () => {
      // @ts-ignore
      mockAxios.AxiosHeaders.prototype.set = () => {};

      const mockToken = 'valid-token';

      window.localStorage.setItem(LocalStorageKeys.token, mockToken);

      const expectedHeader = authorizationHeaderTemplate(mockToken);

      mockAxios.AxiosHeaders.prototype[HeadersKeys.authorization] = expectedHeader;

      mockAxios.mockResolvedValueOnce({ data: {}, status: 200 });

      await store.request(successfulEndpoint);

      expect(mockAxios).toHaveBeenCalledWith(
        expect.objectContaining({
          headers: expect.objectContaining({ [HeadersKeys.authorization]: expectedHeader }),
        })
      );
    });

    it('should not include authorization header if withAuthorization is false', async () => {
      mockAxios.mockResolvedValueOnce({ data: {}, status: 200 });

      await store.request(successfulEndpoint, { withAuthorization: false });

      expect(mockAxios).not.toHaveBeenCalledWith(
        expect.objectContaining({
          headers: expect.objectContaining({ [HeadersKeys.authorization]: expect.anything() }),
        })
      );
    });
  });
});
