import { InputFlowType } from 'entities/contentFlowBlock/inputFlowBlock';
import {
  IInputFlowPartCode,
  InputFlowPartCodeApi,
  InputFlowPartCodeParams,
} from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode';
import { PartCodeRowType } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow';
import { IPartCodeMixedRow } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow';
import { IPartCodeOnlyRow } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeOnlyRow';
import { InputFlowBlock } from 'models/ContentFlowBlock/InputFlowBlock';
import { PartCodeMixedRow } from 'models/ContentFlowBlock/InputFlowBlock/InputFlowPartCode/InputFlowPartCodeRow/PartCodeMixedRow';
import { PartCodeOnlyRow } from 'models/ContentFlowBlock/InputFlowBlock/InputFlowPartCode/InputFlowPartCodeRow/PartCodeOnlyRow';

export class InputFlowPartCode extends InputFlowBlock implements IInputFlowPartCode {
  readonly inputType = InputFlowType.partText;
  readonly linesCount: number;
  readonly rows: (IPartCodeMixedRow | IPartCodeOnlyRow)[];

  constructor(params: InputFlowPartCodeParams) {
    super({ id: params.id });
    this.linesCount = params.linesCount;
    this.rows = params.rows;
  }

  static fromApi(api: InputFlowPartCodeApi): InputFlowPartCode {
    return new InputFlowPartCode({
      ...InputFlowBlock.transformApiFields(api),
      linesCount: api.linesCount,
      rows: api.rows.map((row) => {
        switch (row.type) {
          case PartCodeRowType.mixed:
            return PartCodeMixedRow.fromApi(row);
          case PartCodeRowType.code:
          default:
            return PartCodeOnlyRow.fromApi(row);
        }
      }),
    });
  }
}
