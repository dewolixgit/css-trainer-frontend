import { PartCodeRowType } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow';
import {
  IPartCodeOnlyRow,
  PartCodeOnlyRowApi,
  PartCodeOnlyRowParams,
} from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeOnlyRow';
import { IField } from 'entities/fieldModel';
import { InputFlowPartCodeRow } from 'models/ContentFlowBlock/InputFlowBlock/InputFlowPartCode/InputFlowPartCodeRow';
import { FieldModel } from 'models/FieldModel';

export class PartCodeOnlyRow extends InputFlowPartCodeRow implements IPartCodeOnlyRow {
  readonly type = PartCodeRowType.code;
  readonly linesCount: number;
  readonly value: IField;

  constructor(params: PartCodeOnlyRowParams) {
    super({ id: params.id, tabs: params.tabs });
    this.linesCount = params.linesCount;
    this.value = new FieldModel(params.value);
  }

  static fromApi(api: PartCodeOnlyRowApi): PartCodeOnlyRow {
    return new PartCodeOnlyRow({
      ...InputFlowPartCodeRow.transformApiFields(api),
      linesCount: api.linesCount,
      value: api.value,
    });
  }
}
