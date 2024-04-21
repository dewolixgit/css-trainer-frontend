import { ILocalStore } from 'config/localStore';
import { IField } from 'entities/fieldModel';

export interface IErrorToastModel {
  readonly text: string;
  readonly open: IField<boolean>;
}

export type ErrorToastModelParams = {
  text: string;
};

export interface IErrorToastEmitter extends ILocalStore {
  readonly toasts: IField<IErrorToastModel[]>;
  showErrorToast(text: string): void;
  showMultipleErrorToasts(texts: string[]): void;
  reset(): void;
}
