import { PartCodeRowType } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow';
import {
  IPartCodeMixedRow,
  PartCodeMixedRowApi,
  PartCodeMixedRowParams,
} from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow';
import { PartCodeMixedRowElementType } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement';
import { IPartCodeMixedRowCodeElement } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement/partCodeMixedRowCodeElement';
import { IPartCodeMixedRowTextElement } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement/partCodeMixedRowTextElement';
import { InputFlowPartCodeRow } from 'models/ContentFlowBlock/InputFlowBlock/InputFlowPartCode/InputFlowPartCodeRow';
import { PartCodeMixedRowCodeElement } from 'models/ContentFlowBlock/InputFlowBlock/InputFlowPartCode/InputFlowPartCodeRow/PartCodeMixedRow/PartCodeMixedRowElement/PartCodeMixedRowCodeElement';
import { createPartCodeMixedRowTextElementFromApi } from 'models/ContentFlowBlock/InputFlowBlock/InputFlowPartCode/InputFlowPartCodeRow/PartCodeMixedRow/PartCodeMixedRowElement/partCodeMixedRowTextElement';

export class PartCodeMixedRow extends InputFlowPartCodeRow implements IPartCodeMixedRow {
  readonly type = PartCodeRowType.mixed;
  elements: (IPartCodeMixedRowCodeElement | IPartCodeMixedRowTextElement)[];

  constructor(params: PartCodeMixedRowParams) {
    super({ id: params.id, tabs: params.tabs });
    this.elements = params.elements;
  }

  static fromApi(api: PartCodeMixedRowApi): PartCodeMixedRow {
    return new PartCodeMixedRow({
      ...InputFlowPartCodeRow.transformApiFields(api),
      elements: api.elements.map((item) => {
        switch (item.type) {
          case PartCodeMixedRowElementType.code:
            return PartCodeMixedRowCodeElement.fromApi(item);
          case PartCodeMixedRowElementType.text:
          default:
            return createPartCodeMixedRowTextElementFromApi(item);
        }
      }),
    });
  }
}
