import { ILocalStore } from 'config/localStore';
import {
  IPartCodeMixedRowElement,
  PartCodeMixedRowElementApi,
  PartCodeMixedRowElementParams,
  PartCodeMixedRowElementType,
} from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement';
import { IField } from 'entities/fieldModel';

export interface IPartCodeMixedRowCodeElement extends IPartCodeMixedRowElement, ILocalStore {
  readonly type: PartCodeMixedRowElementType.code;
  readonly value: IField;

  /**
   * Length of the input block expressed in number of symbols. Symbols amount in the input block
   */
  readonly symbolsLength: number;

  /**
   * Allows to subscribe to the value changes. Returns a function to unsubscribe
   */
  subscribe(callback: VoidFunction): VoidFunction;
}

export type PartCodeMixedRowCodeElementParams = PartCodeMixedRowElementParams & {
  value: string;
  symbolsLength: number;
};

export type PartCodeMixedRowCodeElementApi = PartCodeMixedRowElementApi & {
  type: PartCodeMixedRowElementType.code;
  value: string;
  symbolsLength: number;
};
