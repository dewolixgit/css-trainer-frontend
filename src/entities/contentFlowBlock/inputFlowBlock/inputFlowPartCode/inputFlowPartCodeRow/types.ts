export enum PartCodeRowType {
  mixed = 'mixed',
  code = 'code',
}

/**
 * Interface of a single row of a code input block
 */
export interface IInputFlowPartCodeRow {
  readonly id: number;
  readonly type: PartCodeRowType;

  /**
   * Amount of tabs from the beginning of a line
   */
  readonly tabs: number;
}

export type InputFlowPartCodeRowParams = {
  id: number;
  tabs: number;
};

export type InputFlowPartCodeRowApi = {
  id: number;
  tabs: number;
};
