import { ApiAuthCommonResponse, ApiMessageCommonResponse, ENDPOINTS } from 'config/api';
import { IApiStore } from 'config/store/apiStore';
import { IUser, transformUser } from 'entities/user';
import { BasePromiseResponse } from 'types/props';

export class AuthPageApiAdapter {
  static async login(
    apiStore: IApiStore,
    params: { password: string; email: string }
  ): BasePromiseResponse<
    {
      userData: IUser;
      accessToken: string;
    },
    {
      validationErrorText: string | null;
    } | null
  > {
    const response = await apiStore.request<ApiAuthCommonResponse, ApiMessageCommonResponse>(
      {
        url: ENDPOINTS.login.getUrl(),
        method: ENDPOINTS.login.method,
      },
      {
        withAuthorization: false,
        data: {
          email: params.email.trim(),
          password: params.password.trim(),
        },
      }
    );

    if (response.isError) {
      if (response.data.clientSide) {
        return {
          isError: true,
          data: null,
        };
      }

      return {
        isError: true,
        data: {
          validationErrorText: response.data.apiError.payload.message,
        },
      };
    }

    return {
      isError: false,
      data: {
        userData: transformUser(response.data.payload),
        accessToken: response.data.payload.accessToken,
      },
    };
  }

  static async register(
    apiStore: IApiStore,
    params: { password: string; email: string }
  ): BasePromiseResponse<
    {
      userData: IUser;
      accessToken: string;
    },
    {
      validationErrorText: string | null;
    } | null
  > {
    const response = await apiStore.request<ApiAuthCommonResponse, ApiMessageCommonResponse>(
      {
        url: ENDPOINTS.register.getUrl(),
        method: ENDPOINTS.register.method,
      },
      {
        withAuthorization: false,
        data: {
          email: params.email.trim(),
          password: params.password.trim(),
        },
      }
    );

    if (response.isError) {
      if (response.data.clientSide) {
        return {
          isError: true,
          data: null,
        };
      }

      return {
        isError: true,
        data: {
          validationErrorText: response.data.apiError.payload.message,
        },
      };
    }

    return {
      isError: false,
      data: {
        userData: transformUser(response.data.payload),
        accessToken: response.data.payload.accessToken,
      },
    };
  }
}
