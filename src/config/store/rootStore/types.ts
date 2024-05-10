import { IApiStore } from 'config/store/apiStore';
import { IAppStateModel } from 'config/store/appState/types';
import { IUserStore } from 'config/store/userStore';

export interface IRootStore {
  readonly appState: IAppStateModel;
  readonly apiStore: IApiStore;
  readonly userStore: IUserStore;

  init(): Promise<boolean>;
}
