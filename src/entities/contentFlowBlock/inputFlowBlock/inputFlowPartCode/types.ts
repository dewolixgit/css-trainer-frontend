import {
  IInputFlowBlock,
  InputFlowBlockApi,
  InputFlowBlockParams,
  InputFlowType,
} from 'entities/contentFlowBlock/inputFlowBlock';

import { IPartCodeMixedRow, PartCodeMixedRowApi } from './inputFlowPartCodeRow/partCodeMixedRow';
import { IPartCodeOnlyRow, PartCodeOnlyRowApi } from './inputFlowPartCodeRow/partCodeOnlyRow';

export interface IInputFlowPartCode extends IInputFlowBlock {
  readonly inputType: InputFlowType.partText;
  readonly rows: (IPartCodeMixedRow | IPartCodeOnlyRow)[];

  // Notice: a row of only code may have several lines
  readonly linesCount: number;
}

export type InputFlowPartCodeParams = InputFlowBlockParams & {
  rows: (IPartCodeMixedRow | IPartCodeOnlyRow)[];
};

export type InputFlowPartCodeApi = InputFlowBlockApi & {
  inputType: InputFlowType.partText;
  rows: (PartCodeMixedRowApi | PartCodeOnlyRowApi)[];
};
