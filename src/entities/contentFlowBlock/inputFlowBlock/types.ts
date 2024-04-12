import { ContentFlowBlockType, IContentFlowBlock } from 'entities/contentFlowBlock/types';

export enum InputFlowType {
  dragAndDrop = 'drag-and-drop',
  textArea = 'text-area',
  partText = 'part-text',
}

/**
 * Interface of an input block of a blocks flow in a task
 * Todo: Extend interface of IContentFlowBlock
 */
export interface IInputFlowBlock extends IContentFlowBlock {
  readonly inputType: InputFlowType;
  readonly contentType: ContentFlowBlockType.input;

  // Todo: Reconsider. Maybe it's better to transform to object model
  toString(): string;
}
