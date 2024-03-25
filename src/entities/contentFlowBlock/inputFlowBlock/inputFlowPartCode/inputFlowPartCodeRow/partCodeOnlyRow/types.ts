import {
  IInputFlowPartCodeRow,
  PartCodeRowType,
} from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/types';
import { IField } from 'entities/fieldModel';

export interface IPartCodeOnlyRow extends IInputFlowPartCodeRow, IField {
  readonly type: PartCodeRowType.code;
}
