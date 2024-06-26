import { IErrorToastEmitter } from 'config/components/errorToastEmitter';
import { ILocalStore } from 'config/localStore';
import { IField } from 'entities/fieldModel';
import { IFormField } from 'entities/formFieldModel';
import { IMetaModel } from 'entities/metaModel';
import { BasePromiseResponse } from 'types/props';

export enum AuthPageMode {
  login = 'login',
  registration = 'registration',
}

export interface IAuthPageFormStore extends ILocalStore {
  readonly email: IFormField;
  readonly password: IFormField;
  validate(): string | null;
  reset(): void;
}

export type AuthPageFormStoreParams = {
  errorEmitter: IErrorToastEmitter;
};

export interface IAuthPageStore extends ILocalStore {
  readonly meta: IMetaModel;
  readonly mode: IField<AuthPageMode>;
  readonly form: IAuthPageFormStore;
  changeMode(mode: AuthPageMode): void;
  login(): BasePromiseResponse<boolean>;
  register(): BasePromiseResponse<boolean>;
}

export type AuthPageStoreParams = {
  errorEmitter: IErrorToastEmitter;
};
