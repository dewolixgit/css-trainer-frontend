import { IPartCodeMixedRowElement } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement/types';
import { IInputFlowPartCodeRow } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/types';

/**
 * Interface of a row containing both code inputs and text blocks
 */
export interface IPartCodeMixedRow extends IInputFlowPartCodeRow {
  elements: IPartCodeMixedRowElement[];
}
