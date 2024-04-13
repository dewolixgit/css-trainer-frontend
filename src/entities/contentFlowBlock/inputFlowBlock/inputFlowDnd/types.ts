import {
  IInputFlowBlock,
  InputFlowBlockApi,
  InputFlowBlockParams,
  InputFlowType,
} from 'entities/contentFlowBlock/inputFlowBlock';

import { IInputFlowDndOption, InputFlowDndOptionApi } from './inputFlowDndOption';

export interface IInputFlowDnd extends IInputFlowBlock {
  readonly inputType: InputFlowType.dragAndDrop;
  readonly options: IInputFlowDndOption[];
  setOrder(order: IInputFlowDndOption['id'][]): void;
}

export type InputFlowDndParams = InputFlowBlockParams & {
  options: IInputFlowDndOption[];
};

export type InputFlowDndApi = InputFlowBlockApi & {
  inputType: InputFlowType.dragAndDrop;
  options: InputFlowDndOptionApi[];
};
