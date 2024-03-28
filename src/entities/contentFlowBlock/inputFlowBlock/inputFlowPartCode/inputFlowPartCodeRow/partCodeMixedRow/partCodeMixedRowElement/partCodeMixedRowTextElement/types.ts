import {
  IPartCodeMixedRowElement,
  PartCodeMixedRowElementType,
} from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement';

export interface IPartCodeMixedRowTextElement extends IPartCodeMixedRowElement {
  readonly type: PartCodeMixedRowElementType.text;
  readonly text: string;
}