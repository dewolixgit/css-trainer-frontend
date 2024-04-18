import { ILocalStore } from 'config/localStore';
import {
  ContentFlowBlockApi,
  ContentFlowBlockParams,
  ContentFlowBlockType,
  IContentFlowBlock,
} from 'entities/contentFlowBlock/types';

export enum InputFlowType {
  dragAndDrop = 'drag-and-drop',
  textArea = 'text-area',
  partText = 'part-text',
}

/**
 * Interface of an input block of a blocks flow in a task
 */
export interface IInputFlowBlock extends IContentFlowBlock, ILocalStore {
  readonly inputType: InputFlowType;
  readonly contentType: ContentFlowBlockType.input;

  /**
   * Allow to subscribe to changes of the value of the input. Returns a function to unsubscribe
   */
  subscribe(callback: VoidFunction): VoidFunction;
}

export type InputFlowBlockParams = ContentFlowBlockParams;

export type InputFlowBlockApi = ContentFlowBlockApi & {
  contentType: ContentFlowBlockType.input;
};
