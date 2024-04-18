import { IReactionDisposer, reaction } from 'mobx';

import { InputFlowType } from 'entities/contentFlowBlock/inputFlowBlock';
import {
  IInputFlowOnlyCode,
  InputFlowOnlyCodeApi,
  InputFlowOnlyCodeParams,
} from 'entities/contentFlowBlock/inputFlowBlock/inputFlowOnlyCode';
import { IField } from 'entities/fieldModel';
import { InputFlowBlock } from 'models/ContentFlowBlock/InputFlowBlock';
import { FieldModel } from 'models/FieldModel';

export class InputFlowOnlyCode extends InputFlowBlock implements IInputFlowOnlyCode {
  readonly inputType = InputFlowType.textArea;
  readonly linesCount: number;
  readonly value: IField;

  private readonly _disposer: IReactionDisposer;

  constructor(params: InputFlowOnlyCodeParams) {
    super({ id: params.id });
    this.linesCount = params.linesCount;
    this.value = new FieldModel(params.value);

    this._disposer = reaction(() => this.value.value, this._subscriptions.emit);
  }

  destroy() {
    super.destroy();

    this._disposer();
  }

  static fromApi(api: InputFlowOnlyCodeApi): InputFlowOnlyCode {
    return new InputFlowOnlyCode({
      ...InputFlowBlock.transformApiFields(api),
      linesCount: api.linesCount,
      value: api.value,
    });
  }
}
