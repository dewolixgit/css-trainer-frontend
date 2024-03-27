import { IInputFlowBlock, InputFlowType } from 'entities/contentFlowBlock/inputFlowBlock';
import { IPartCodeMixedRow } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow';
import { IPartCodeOnlyRow } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeOnlyRow';

export interface IInputFlowPartCode extends IInputFlowBlock {
  readonly inputType: InputFlowType.partText;
  readonly rows: (IPartCodeMixedRow | IPartCodeOnlyRow)[];

  // Notice: a row of only code may have several lines
  readonly linesCount: number;
}
