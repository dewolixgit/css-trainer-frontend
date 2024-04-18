import { action, makeObservable } from 'mobx';

import { ISubscriptionController } from 'entities/subscriptionController';

export class SubscriptionController<D = void> implements ISubscriptionController<D> {
  private static _id = 1;
  // eslint-disable-next-line func-call-spacing
  private _subscribers = new Map<number, (data: D) => void>();

  constructor() {
    makeObservable(this, {
      subscribe: action.bound,
      emit: action.bound,
      unsubscribeAll: action.bound,
      destroy: action.bound,
    });
  }

  subscribe(callback: (data: D) => void): VoidFunction {
    const id = SubscriptionController._id;

    this._subscribers.set(id, callback);

    SubscriptionController._id += 1;

    return () => {
      this._subscribers.delete(id);
    };
  }

  emit(data: D) {
    this._subscribers.forEach((callback) => {
      callback(data);
    });
  }

  unsubscribeAll(): void {
    this._subscribers.clear();
  }

  destroy(): void {
    this.unsubscribeAll();
  }
}
