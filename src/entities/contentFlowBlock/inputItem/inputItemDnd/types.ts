import { InputItemInputApi } from 'entities/contentFlowBlock/inputItem/inputItemInput';
import { IInputItem, InputItemTypeEnum } from 'entities/contentFlowBlock/inputItem/types';

export interface IInputItemDnd extends IInputItem {
  type: InputItemTypeEnum.dragAndDrop;
  order: number[];
}

export type InputItemDndApi = InputItemInputApi & {
  type: InputItemTypeEnum.dragAndDrop;
  order: number[];
};
