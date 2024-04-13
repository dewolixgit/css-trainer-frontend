import {
  IInputFlowPartCodeRow,
  InputFlowPartCodeRowApi,
  InputFlowPartCodeRowParams,
  PartCodeRowType,
} from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow';

export abstract class InputFlowPartCodeRow implements IInputFlowPartCodeRow {
  readonly id: number;
  readonly tabs: number;
  abstract readonly type: PartCodeRowType;

  constructor(params: InputFlowPartCodeRowParams) {
    this.id = params.id;
    this.tabs = params.tabs;
  }

  static transformApiFields(api: InputFlowPartCodeRowApi): InputFlowPartCodeRowParams {
    return {
      id: api.id,
      tabs: api.tabs,
    };
  }
}
