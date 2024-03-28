import { IInputFlowBlock, InputFlowType } from 'entities/contentFlowBlock/inputFlowBlock';

import { IInputFlowDndOption } from './inputFlowDndOption';

export interface IInputFlowDnd extends IInputFlowBlock {
  inputType: InputFlowType.dragAndDrop;
  options: IInputFlowDndOption[];
  setOrder(order: IInputFlowDndOption['id'][]): void;
}
