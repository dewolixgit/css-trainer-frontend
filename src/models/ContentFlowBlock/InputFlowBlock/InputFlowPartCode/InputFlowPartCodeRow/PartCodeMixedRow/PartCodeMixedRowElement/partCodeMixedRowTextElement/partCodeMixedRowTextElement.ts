import { PartCodeMixedRowElementType } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement';
import {
  IPartCodeMixedRowTextElement,
  PartCodeMixedRowTextElementApi,
} from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement/partCodeMixedRowTextElement';
import { PartCodeMixedRowElement } from 'models/ContentFlowBlock/InputFlowBlock/InputFlowPartCode/InputFlowPartCodeRow/PartCodeMixedRow/PartCodeMixedRowElement';

export const createPartCodeMixedRowTextElementFromApi = (
  api: PartCodeMixedRowTextElementApi
): IPartCodeMixedRowTextElement => ({
  ...PartCodeMixedRowElement.transformApiFields(api),
  type: PartCodeMixedRowElementType.text,
  text: api.text,
});
