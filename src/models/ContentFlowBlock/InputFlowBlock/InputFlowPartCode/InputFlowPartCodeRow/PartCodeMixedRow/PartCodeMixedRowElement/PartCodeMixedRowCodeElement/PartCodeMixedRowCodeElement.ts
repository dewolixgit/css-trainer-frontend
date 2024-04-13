import { PartCodeMixedRowElementType } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement';
import {
  IPartCodeMixedRowCodeElement,
  PartCodeMixedRowCodeElementApi,
  PartCodeMixedRowCodeElementParams,
} from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement/partCodeMixedRowCodeElement';
import { IField } from 'entities/fieldModel';
import { PartCodeMixedRowElement } from 'models/ContentFlowBlock/InputFlowBlock/InputFlowPartCode/InputFlowPartCodeRow/PartCodeMixedRow/PartCodeMixedRowElement';
import { FieldModel } from 'models/FieldModel';

export class PartCodeMixedRowCodeElement
  extends PartCodeMixedRowElement
  implements IPartCodeMixedRowCodeElement
{
  readonly type = PartCodeMixedRowElementType.code;
  readonly symbolsLength: number;
  readonly value: IField;

  constructor(params: PartCodeMixedRowCodeElementParams) {
    super({ id: params.id });
    this.symbolsLength = params.symbolsLength;
    this.value = new FieldModel(params.value);
  }

  static fromApi(api: PartCodeMixedRowCodeElementApi): PartCodeMixedRowCodeElement {
    return new PartCodeMixedRowCodeElement({
      ...PartCodeMixedRowElement.transformApiFields(api),
      value: api.value,
      symbolsLength: api.symbolsLength,
    });
  }
}
