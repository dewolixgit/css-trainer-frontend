import { IField } from 'entities/fieldModel';

export type FormFieldValidator<V> = (value: V) => string | null;

export type FormFieldIsEmptyChecker<V> = (value: V) => boolean;

export interface IFormField<V = string> extends IField<V> {
  get error(): string | null;

  setError(value: string | null): void;
  resetError(): void;

  validate(): boolean;
}

export type FormFieldModelConfigParams<V> = {
  initialValue?: V;
  validator?: FormFieldValidator<V>;
  isEmptyChecker?: FormFieldIsEmptyChecker<V>;
};
