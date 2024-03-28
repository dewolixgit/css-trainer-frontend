import { IPartCodeMixedRowCodeElement } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement/partCodeMixedRowCodeElement';
import { IPartCodeMixedRowTextElement } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement/partCodeMixedRowTextElement';
import {
  IInputFlowPartCodeRow,
  PartCodeRowType,
} from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/types';

/**
 * Interface of a row containing both code inputs and text blocks
 */
export interface IPartCodeMixedRow extends IInputFlowPartCodeRow {
  type: PartCodeRowType.mixed;
  elements: (IPartCodeMixedRowCodeElement | IPartCodeMixedRowTextElement)[];
}