import {
  IPartCodeMixedRowElement,
  PartCodeMixedRowElementApi,
  PartCodeMixedRowElementType,
} from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement';

export interface IPartCodeMixedRowTextElement extends IPartCodeMixedRowElement {
  readonly type: PartCodeMixedRowElementType.text;
  readonly text: string;
}

export type PartCodeMixedRowTextElementApi = PartCodeMixedRowElementApi & {
  type: PartCodeMixedRowElementType.text;
  text: string;
};
