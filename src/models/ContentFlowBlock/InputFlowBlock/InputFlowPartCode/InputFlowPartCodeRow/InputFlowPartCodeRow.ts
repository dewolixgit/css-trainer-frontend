import {
  IInputFlowPartCodeRow,
  InputFlowPartCodeRowApi,
  InputFlowPartCodeRowParams,
  PartCodeRowType,
} from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow';
import { SubscriptionController } from 'models/SubscriptionController';

export abstract class InputFlowPartCodeRow implements IInputFlowPartCodeRow {
  readonly id: number;
  readonly tabs: number;
  abstract readonly type: PartCodeRowType;

  protected readonly _subscriptions = new SubscriptionController();

  constructor(params: InputFlowPartCodeRowParams) {
    this.id = params.id;
    this.tabs = params.tabs;
  }

  subscribe(callback: VoidFunction): VoidFunction {
    return this._subscriptions.subscribe(callback);
  }

  static transformApiFields(api: InputFlowPartCodeRowApi): InputFlowPartCodeRowParams {
    return {
      id: api.id,
      tabs: api.tabs,
    };
  }

  destroy() {
    this._subscriptions.destroy();
  }
}
