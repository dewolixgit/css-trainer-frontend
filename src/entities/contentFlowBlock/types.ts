export enum ContentFlowBlockType {
  input = 'input',
  info = 'info',
}

export interface IContentFlowBlock {
  readonly id: number;
  readonly contentType: ContentFlowBlockType;
}

export type ContentFlowBlockParams = {
  id: number;
};

export type ContentFlowBlockApi = {
  id: number;
};
