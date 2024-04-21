import { action, computed, makeObservable, observable } from 'mobx';

import { FieldModelConfigParams, IField } from 'entities/fieldModel';

export class FieldModel<T = string> implements IField<T> {
  protected _value: T;
  protected readonly _initialValue: T;

  constructor(value: T, config?: FieldModelConfigParams<T>) {
    this._value = value;
    this._initialValue = config?.initialValue ?? value;

    makeObservable<FieldModel<T>, '_value'>(this, {
      _value: observable.ref,

      value: computed,
      empty: computed,

      changeValue: action.bound,
      reset: action.bound,
    });
  }

  get value(): T {
    return this._value;
  }

  get empty(): boolean {
    return !this._value;
  }

  changeValue<I extends T>(value: I): I {
    this._value = value;

    return value;
  }

  reset(): void {
    this._value = this._initialValue;
  }
}
