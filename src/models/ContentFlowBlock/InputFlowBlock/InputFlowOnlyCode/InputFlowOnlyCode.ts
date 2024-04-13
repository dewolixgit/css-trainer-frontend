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

  constructor(params: InputFlowOnlyCodeParams) {
    super({ id: params.id });
    this.linesCount = params.linesCount;
    this.value = new FieldModel(params.value);
  }

  static fromApi(api: InputFlowOnlyCodeApi): InputFlowOnlyCode {
    return new InputFlowOnlyCode({
      ...InputFlowBlock.transformApiFields(api),
      linesCount: api.linesCount,
      value: api.value,
    });
  }
}
