import { ILocalStore } from 'config/localStore';

export enum PartCodeRowType {
  mixed = 'mixed',
  code = 'code',
}

/**
 * Interface of a single row of a code input block
 */
export interface IInputFlowPartCodeRow extends ILocalStore {
  readonly id: number;
  readonly type: PartCodeRowType;

  /**
   * Amount of tabs from the beginning of a line
   */
  readonly tabs: number;

  /**
   * Allow to subscribe to changes of the value of the input row or inner inputs.
   * Returns a function to unsubscribe
   */
  subscribe(callback: VoidFunction): VoidFunction;
}

export type InputFlowPartCodeRowParams = {
  id: number;
  tabs: number;
};

export type InputFlowPartCodeRowApi = {
  id: number;
  tabs: number;
};
