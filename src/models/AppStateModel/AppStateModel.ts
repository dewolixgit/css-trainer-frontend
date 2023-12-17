import { action, computed, makeObservable, observable } from 'mobx';

import { AppStateEnum } from './types';

export class AppStateModel {
  state: AppStateEnum = AppStateEnum.notLoaded;

  constructor() {
    makeObservable(this, {
      state: observable,

      notLoaded: computed,
      loading: computed,
      loadedSuccessfully: computed,
      loadedWithError: computed,

      setState: action.bound,
      setLoading: action.bound,
      setLoadedSuccessfully: action.bound,
      setLoadedWithError: action.bound,
      reload: action.bound,
    });
  }

  get notLoaded(): boolean {
    return this.state === AppStateEnum.notLoaded;
  }

  get loading(): boolean {
    return this.state === AppStateEnum.loading;
  }

  get loadedSuccessfully(): boolean {
    return this.state === AppStateEnum.loadedSuccessfully;
  }

  get loadedWithError(): boolean {
    return this.state === AppStateEnum.loadedWithError;
  }

  setState(state: AppStateEnum) {
    this.state = state;
  }

  setLoading(): void {
    this.setState(AppStateEnum.loading);
  }

  setLoadedSuccessfully(): void {
    this.setState(AppStateEnum.loadedSuccessfully);
  }

  setLoadedWithError(): void {
    this.setState(AppStateEnum.loadedWithError);
  }

  reload(): void {
    this.setState(AppStateEnum.notLoaded);
  }
}
