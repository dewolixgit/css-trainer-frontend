export enum PartCodeMixedRowElementType {
  code = 'code',
  text = 'text',
}

/**
 * Interface of an element in a single row of an input block.
 * The row contains both text blocks and code inputs
 */
export interface IPartCodeMixedRowElement {
  readonly id: number;
  readonly type: PartCodeMixedRowElementType;
}
