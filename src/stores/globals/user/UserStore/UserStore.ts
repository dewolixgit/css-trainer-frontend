import { action, computed, makeObservable } from 'mobx';

import { LocalStorageKeys } from 'config/localStorage';
import { IRootStore } from 'config/store/rootStore';
import { IUserStore } from 'config/store/userStore';
import { IUser } from 'entities/user';
import { FieldModel } from 'models/FieldModel';
import { MetaModel } from 'models/MetaModel';

export class UserStore implements IUserStore {
  private readonly _rootStore: IRootStore;

  readonly meta = new MetaModel();
  readonly user = new FieldModel<IUser | null>(null);

  constructor(rootStore: IRootStore) {
    this._rootStore = rootStore;

    makeObservable(this, {
      isAuthenticated: computed,

      logout: action.bound,
      setUser: action.bound,
    });
  }

  get isAuthenticated(): boolean {
    return Boolean(this.user.value);
  }

  async logout(): Promise<void> {
    this.user.changeValue(null);
    localStorage.removeItem(LocalStorageKeys.token);
  }

  setUser(user: IUser | null): void {
    this.user.changeValue(user);
  }
}
