import { action, makeObservable } from 'mobx';

import { AppStateModel } from 'models';

export class RootStore {
  appState = new AppStateModel();

  constructor() {
    makeObservable(this, {
      init: action.bound,
    });
  }

  async init(): Promise<boolean> {
    this.appState.setLoading();

    // Todo: Проверка авторизации

    return true;
  }
}

const rootStore = new RootStore();

export const stores = { rootStore };
