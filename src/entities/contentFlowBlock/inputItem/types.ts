export enum InputItemTypeEnum {
  partCodeMixedRowCodeElement = 'part-code-mixed-row-code-element',
  partCodeOnlyRow = 'part-code-only-row',
  inputFlowDnd = 'input-flow-dnd',
  inputFlowOnlyCode = 'input-flow-only-code',
}

export interface IInputItem {
  id: number;
  type: InputItemTypeEnum;
  order?: number[];
  value?: string;
}

export type InputItemApi = {
  inputId: number;
  inputType: InputItemTypeEnum;
  order?: number[];
  value?: string;
};
