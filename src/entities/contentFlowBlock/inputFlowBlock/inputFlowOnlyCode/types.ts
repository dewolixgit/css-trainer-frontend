import { IInputFlowBlock, InputFlowType } from 'entities/contentFlowBlock/inputFlowBlock';
import { IField } from 'entities/fieldModel';

export interface IInputFlowOnlyCode extends IInputFlowBlock, IField {
  readonly inputType: InputFlowType.textArea;
  readonly linesCount: number;
}
