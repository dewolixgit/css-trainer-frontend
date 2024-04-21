import { IAppStateModel } from 'config/store/appState/types';
import { IUserStore } from 'config/store/userStore';

export interface IRootStore {
  readonly appState: IAppStateModel;
  readonly userStore: IUserStore;

  init(): Promise<boolean>;
}
