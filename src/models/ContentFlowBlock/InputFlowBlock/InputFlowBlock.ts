import {
  IInputFlowBlock,
  InputFlowBlockApi,
  InputFlowBlockParams,
  InputFlowType,
} from 'entities/contentFlowBlock/inputFlowBlock';
import { ContentFlowBlockType } from 'entities/contentFlowBlock/types';
import { ContentFlowBlock } from 'models/ContentFlowBlock';
import { SubscriptionController } from 'models/SubscriptionController';

export abstract class InputFlowBlock extends ContentFlowBlock implements IInputFlowBlock {
  readonly contentType = ContentFlowBlockType.input;
  abstract readonly inputType: InputFlowType;

  protected readonly _subscriptions = new SubscriptionController();

  constructor(params: InputFlowBlockParams) {
    super({ id: params.id });
  }

  subscribe(callback: VoidFunction): VoidFunction {
    return this._subscriptions.subscribe(callback);
  }

  destroy() {
    this._subscriptions.destroy();
  }

  static transformApiFields(api: InputFlowBlockApi): InputFlowBlockParams {
    return {
      id: api.id,
    };
  }
}
