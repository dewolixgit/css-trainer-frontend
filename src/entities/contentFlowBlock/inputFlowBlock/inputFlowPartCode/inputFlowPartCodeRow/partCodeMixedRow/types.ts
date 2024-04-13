import {
  IPartCodeMixedRowCodeElement,
  PartCodeMixedRowCodeElementApi,
} from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement/partCodeMixedRowCodeElement';
import {
  IPartCodeMixedRowTextElement,
  PartCodeMixedRowTextElementApi,
} from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement/partCodeMixedRowTextElement';
import {
  IInputFlowPartCodeRow,
  InputFlowPartCodeRowApi,
  InputFlowPartCodeRowParams,
  PartCodeRowType,
} from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/types';

/**
 * Interface of a row containing both code inputs and text blocks
 */
export interface IPartCodeMixedRow extends IInputFlowPartCodeRow {
  readonly type: PartCodeRowType.mixed;
  readonly elements: (IPartCodeMixedRowCodeElement | IPartCodeMixedRowTextElement)[];
}

export type PartCodeMixedRowParams = InputFlowPartCodeRowParams & {
  elements: (IPartCodeMixedRowCodeElement | IPartCodeMixedRowTextElement)[];
};

export type PartCodeMixedRowApi = InputFlowPartCodeRowApi & {
  type: PartCodeRowType.mixed;
  elements: (PartCodeMixedRowCodeElementApi | PartCodeMixedRowTextElementApi)[];
};
