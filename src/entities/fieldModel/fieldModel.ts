export interface IField<T = string> {
  get value(): T;
  get empty(): boolean;

  changeValue(value: T): void;
  reset(): void;
}

export type FieldModelConfigParams<T> = {
  initialValue?: T;
};
