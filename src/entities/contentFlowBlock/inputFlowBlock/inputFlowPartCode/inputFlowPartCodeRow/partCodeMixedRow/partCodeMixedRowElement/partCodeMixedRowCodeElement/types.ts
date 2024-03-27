import {
  IPartCodeMixedRowElement,
  PartCodeMixedRowElementType,
} from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement';
import { IField } from 'entities/fieldModel';

export interface IPartCodeMixedRowCodeElement extends IPartCodeMixedRowElement, IField {
  readonly type: PartCodeMixedRowElementType.code;

  /**
   * Length of the input block expressed in number of symbols. Symbols amount in the input block
   */
  readonly symbolsLength: number;
}
