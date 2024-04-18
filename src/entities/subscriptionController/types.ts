import { ILocalStore } from 'config/localStore';

export interface ISubscriptionController<D = void> extends ILocalStore {
  subscribe(callback: (data: D) => void): VoidFunction;
  emit(data: D): void;
  unsubscribeAll(): void;
}
