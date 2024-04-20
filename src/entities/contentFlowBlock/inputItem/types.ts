import { IInputItemDnd, InputItemDndApi } from 'entities/contentFlowBlock/inputItem/inputItemDnd';
import {
  IInputItemInput,
  InputItemInputApi,
} from 'entities/contentFlowBlock/inputItem/inputItemInput';

export enum InputItemTypeEnum {
  input = 'input',
  dragAndDrop = 'drag-and-drop',
}

export interface IInputItem {
  id: number;
}

export type InputItemApi = {
  id: number;
};

export type InputItemInterfaceUnion = IInputItemInput | IInputItemDnd;

export type InputItemApiUnion = InputItemInputApi | InputItemDndApi;
