import { action, makeObservable } from 'mobx';

import { IErrorToastEmitter } from 'config/components/errorToastEmitter';
import {
  AuthPageMode,
  AuthPageStoreParams,
  IAuthPageFormStore,
  IAuthPageStore,
} from 'config/store/authPageStore';
import { IRootStore } from 'config/store/rootStore';
import { t } from 'config/translation';
import { FormFieldModel } from 'models/FormFieldModel';
import { MetaModel } from 'models/MetaModel';
import { AuthPageApiAdapter } from 'stores/locals/AuthPageStore/AuthPageApiAdapter';
import { AuthPageFormStore } from 'stores/locals/AuthPageStore/AuthPageFormStore';
import { BasePromiseResponse } from 'types/props';

export class AuthPageStore implements IAuthPageStore {
  readonly form: IAuthPageFormStore;

  readonly meta = new MetaModel();
  readonly mode = new FormFieldModel(AuthPageMode.login);

  private readonly _errorEmitter: IErrorToastEmitter;

  constructor(params: AuthPageStoreParams, private readonly _rootStore: IRootStore) {
    this._errorEmitter = params.errorEmitter;

    this.form = new AuthPageFormStore({ errorEmitter: params.errorEmitter });

    makeObservable(this, {
      changeMode: action.bound,
      login: action.bound,
      register: action.bound,
    });
  }

  changeMode(mode: AuthPageMode) {
    this.mode.changeValue(mode);
    this.form.reset();
    this._errorEmitter.reset();
  }

  async login(): BasePromiseResponse<boolean> {
    if (this.meta.isLoading || this.mode.value !== AuthPageMode.login) {
      return {
        isError: true,
        data: false,
      };
    }

    this._errorEmitter.reset();

    const validationError = this.form.validate();

    if (validationError) {
      this._errorEmitter.showErrorToast(validationError);

      return {
        isError: false,
        data: false,
      };
    }

    this.meta.setLoadedStartMeta();

    const result = await AuthPageApiAdapter.login({
      email: this.form.email.value.trim(),
      password: this.form.password.value.trim(),
    });

    if (result.isError) {
      if (result.data.validationErrorText) {
        this._errorEmitter.showErrorToast(result.data.validationErrorText);
        this.meta.setLoadedSuccessMeta();

        return {
          isError: false,
          data: false,
        };
      }

      this._errorEmitter.showErrorToast(t().common.unknownErrorOccurred);
      this.meta.setLoadedErrorMeta();

      return {
        isError: true,
        data: false,
      };
    }

    this._rootStore.userStore.setUser(result.data);

    this.meta.setLoadedSuccessMeta();

    return {
      isError: false,
      data: true,
    };
  }

  async register(): BasePromiseResponse<boolean> {
    if (this.meta.isLoading || this.mode.value !== AuthPageMode.registration) {
      return {
        isError: true,
      };
    }

    this._errorEmitter.reset();

    const validationError = this.form.validate();

    console.log('validationError', validationError);

    if (validationError) {
      this._errorEmitter.showErrorToast(validationError);

      return {
        isError: false,
        data: false,
      };
    }

    this.meta.setLoadedStartMeta();

    const result = await AuthPageApiAdapter.register({
      email: this.form.email.value.trim(),
      password: this.form.password.value.trim(),
    });

    if (result.isError) {
      if (result.data.validationErrorText) {
        this._errorEmitter.showErrorToast(result.data.validationErrorText);
        this.meta.setLoadedSuccessMeta();

        return {
          isError: false,
          data: false,
        };
      }

      this._errorEmitter.showErrorToast(t().common.unknownErrorOccurred);
      this.meta.setLoadedErrorMeta();

      return {
        isError: true,
        data: false,
      };
    }

    this._rootStore.userStore.setUser(result.data);

    this.meta.setLoadedSuccessMeta();

    return {
      isError: false,
      data: true,
    };
  }

  destroy() {
    this.form.destroy();
  }
}
