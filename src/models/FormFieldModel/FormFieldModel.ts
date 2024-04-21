import { action, computed, makeObservable, observable, override } from 'mobx';

import {
  IFormField,
  FormFieldModelConfigParams,
  FormFieldValidator,
  FormFieldIsEmptyChecker,
} from 'entities/formFieldModel';
import { FieldModel } from 'models/FieldModel';

type FormFieldPrivateFields = '_error';

export class FormFieldModel<V = string> extends FieldModel<V> implements IFormField<V> {
  protected _error: string | null = null;

  protected readonly _validator: FormFieldValidator<V> | null;
  protected readonly _isEmptyChecker: FormFieldIsEmptyChecker<V> | null;

  constructor(value: V, config?: FormFieldModelConfigParams<V>) {
    super(value, {
      initialValue: config?.initialValue,
    });

    this._validator = config?.validator ?? null;
    this._isEmptyChecker = config?.isEmptyChecker ?? null;

    makeObservable<this, FormFieldPrivateFields>(this, {
      _error: observable,

      error: computed,

      resetError: action.bound,
      setError: action.bound,
      validate: action.bound,

      empty: override,
      changeValue: override,
    });
  }

  get error(): string | null {
    return this._error;
  }

  override get empty(): boolean {
    const error = this._validator?.(this.value) ?? null;

    this.setError(error);

    return error === null;
  }

  override changeValue<I extends V>(value: I): I {
    if (this._error !== null) {
      this.setError(null);
    }

    this._value = value;

    return value;
  }

  resetError(): void {
    this._error = null;
  }

  setError(value: string | null): void {
    this._error = value;
  }

  validate(): boolean {
    const error = this._validator?.(this.value) ?? null;

    this.setError(error);

    return error === null;
  }
}
