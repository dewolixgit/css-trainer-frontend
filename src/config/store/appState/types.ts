import { AppStateEnum } from 'models/AppStateModel';

export interface IAppStateModel {
  readonly state: AppStateEnum;
  readonly notLoaded: boolean;
  readonly loading: boolean;
  readonly loadedSuccessfully: boolean;
  readonly loadedWithError: boolean;

  setState(state: AppStateEnum): void;
  setLoading(): void;
  setLoadedSuccessfully(): void;
  setLoadedWithError(): void;
  reload(): void;
}
