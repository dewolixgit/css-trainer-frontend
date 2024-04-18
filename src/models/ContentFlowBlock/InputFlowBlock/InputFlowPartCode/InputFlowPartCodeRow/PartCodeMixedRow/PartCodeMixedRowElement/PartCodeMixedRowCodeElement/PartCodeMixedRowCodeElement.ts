import { IReactionDisposer, reaction } from 'mobx';

import { PartCodeMixedRowElementType } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement';
import {
  IPartCodeMixedRowCodeElement,
  PartCodeMixedRowCodeElementApi,
  PartCodeMixedRowCodeElementParams,
} from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement/partCodeMixedRowCodeElement';
import { IField } from 'entities/fieldModel';
import { PartCodeMixedRowElement } from 'models/ContentFlowBlock/InputFlowBlock/InputFlowPartCode/InputFlowPartCodeRow/PartCodeMixedRow/PartCodeMixedRowElement';
import { FieldModel } from 'models/FieldModel';
import { SubscriptionController } from 'models/SubscriptionController';

export class PartCodeMixedRowCodeElement
  extends PartCodeMixedRowElement
  implements IPartCodeMixedRowCodeElement
{
  readonly type = PartCodeMixedRowElementType.code;
  readonly symbolsLength: number;
  readonly value: IField;

  private readonly _disposer: IReactionDisposer;
  private readonly _subscriptions = new SubscriptionController();

  constructor(params: PartCodeMixedRowCodeElementParams) {
    super({ id: params.id });
    this.symbolsLength = params.symbolsLength;
    this.value = new FieldModel(params.value);

    this._disposer = reaction(() => this.value.value, this._subscriptions.emit);
  }

  subscribe(callback: VoidFunction): VoidFunction {
    return this._subscriptions.subscribe(callback);
  }

  destroy() {
    this._subscriptions.destroy();
    this._disposer();
  }

  static fromApi(api: PartCodeMixedRowCodeElementApi): PartCodeMixedRowCodeElement {
    return new PartCodeMixedRowCodeElement({
      ...PartCodeMixedRowElement.transformApiFields(api),
      value: api.value,
      symbolsLength: api.symbolsLength,
    });
  }
}
