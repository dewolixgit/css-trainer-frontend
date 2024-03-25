import { IInputFlowPartCodeRow } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/types';
import { IInputFlowBlock, InputFlowType } from 'entities/contentFlowBlock/inputFlowBlock/types';

export interface IInputFlowPartCode extends IInputFlowBlock {
  readonly inputType: InputFlowType.partText;
  readonly rows: IInputFlowPartCodeRow[];
  readonly linesCount: number;
}
