import {
  IInputFlowBlock,
  InputFlowBlockApi,
  InputFlowBlockParams,
  InputFlowType,
} from 'entities/contentFlowBlock/inputFlowBlock';
import { IField } from 'entities/fieldModel';

export interface IInputFlowOnlyCode extends IInputFlowBlock {
  readonly value: IField;
  readonly inputType: InputFlowType.textArea;
  readonly linesCount: number;
}

export type InputFlowOnlyCodeParams = InputFlowBlockParams & {
  linesCount: number;
  value: string;
};

export type InputFlowOnlyCodeApi = InputFlowBlockApi & {
  inputType: InputFlowType.textArea;
  linesCount: number;
  value: string;
};
