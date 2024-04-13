import {
  IPartCodeMixedRowElement,
  PartCodeMixedRowElementApi,
  PartCodeMixedRowElementParams,
  PartCodeMixedRowElementType,
} from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement';

export abstract class PartCodeMixedRowElement implements IPartCodeMixedRowElement {
  readonly id: number;
  abstract readonly type: PartCodeMixedRowElementType;

  constructor(params: PartCodeMixedRowElementParams) {
    this.id = params.id;
  }

  static transformApiFields(api: PartCodeMixedRowElementApi): PartCodeMixedRowElementParams {
    return {
      id: api.id,
    };
  }
}
