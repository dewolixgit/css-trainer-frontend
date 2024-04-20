import {
  IInputItem,
  InputItemApi,
  InputItemTypeEnum,
} from 'entities/contentFlowBlock/inputItem/types';

export interface IInputItemInput extends IInputItem {
  type: InputItemTypeEnum.input;
  value: string;
}

export type InputItemInputApi = InputItemApi & {
  type: InputItemTypeEnum.input;
  value: string;
};
