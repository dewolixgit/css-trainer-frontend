import { action, makeObservable } from 'mobx';

import { IRootStore } from 'config/store/rootStore';
import { IUserStore } from 'config/store/userStore';
import { AppStateModel } from 'models';

import { UserStore } from './user/UserStore';

export class RootStore implements IRootStore {
  appState = new AppStateModel();
  userStore: IUserStore = new UserStore(this);

  constructor() {
    makeObservable(this, {
      init: action.bound,
    });
  }

  async init(): Promise<boolean> {
    this.appState.setLoading();

    // Todo: Authentication check

    return true;
  }
}

const rootStore = new RootStore();

export const stores = { rootStore };
