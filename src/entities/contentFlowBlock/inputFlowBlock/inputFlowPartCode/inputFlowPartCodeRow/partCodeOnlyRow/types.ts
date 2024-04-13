import {
  IInputFlowPartCodeRow,
  InputFlowPartCodeRowApi,
  InputFlowPartCodeRowParams,
  PartCodeRowType,
} from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow';
import { IField } from 'entities/fieldModel';

export interface IPartCodeOnlyRow extends IInputFlowPartCodeRow {
  readonly type: PartCodeRowType.code;
  readonly linesCount: number;
  readonly value: IField;
}

export type PartCodeOnlyRowParams = InputFlowPartCodeRowParams & {
  linesCount: number;
  value: string;
};

export type PartCodeOnlyRowApi = InputFlowPartCodeRowApi & {
  type: PartCodeRowType.code;
  linesCount: number;
  value: string;
};
