import { action, makeObservable } from 'mobx';

import {
  ApiAuthCommonResponse,
  ApiErrorMessage,
  ApiMessageCommonResponse,
  ENDPOINTS,
} from 'config/api';
import { LocalStorageKeys } from 'config/localStorage';
import { IRootStore } from 'config/store/rootStore';
import { IUserStore } from 'config/store/userStore';
import { transformUser } from 'entities/user';
import { AppStateModel } from 'models';
import { ApiStore } from 'stores/globals/api';

import { UserStore } from './user/UserStore';

export class RootStore implements IRootStore {
  appState = new AppStateModel();
  apiStore = new ApiStore();
  userStore: IUserStore = new UserStore(this);

  constructor() {
    makeObservable(this, {
      init: action.bound,
    });
  }

  async init(): Promise<boolean> {
    this.appState.setLoading();

    const token = localStorage.getItem(LocalStorageKeys.token);

    if (!token) {
      this.userStore.setUser(null);
      this.appState.setLoadedSuccessfully();

      return true;
    }

    const response = await this.apiStore.request<ApiAuthCommonResponse, ApiMessageCommonResponse>({
      url: ENDPOINTS.authorize.getUrl(),
      method: ENDPOINTS.authorize.method,
    });

    if (response.isError) {
      this.userStore.setUser(null);
      localStorage.removeItem(LocalStorageKeys.token);

      if (
        !response.data.clientSide &&
        response.data.apiError.payload.message === ApiErrorMessage.unauthorized
      ) {
        this.appState.setLoadedSuccessfully();

        return true;
      }

      this.appState.setLoadedWithError();

      return false;
    }

    this.userStore.setUser(transformUser(response.data.payload));
    localStorage.setItem(LocalStorageKeys.token, response.data.payload.accessToken);

    this.appState.setLoadedSuccessfully();

    return true;
  }
}

const rootStore = new RootStore();

export const stores = { rootStore };
