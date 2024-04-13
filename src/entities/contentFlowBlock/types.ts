import {
  IInfoFlowImageBlock,
  InfoFlowImageBlockApi,
} from 'entities/contentFlowBlock/infoFlowBlock/infoFlowImageBlock';
import {
  IInfoFlowTextBlock,
  InfoFlowTextBlockApi,
} from 'entities/contentFlowBlock/infoFlowBlock/infoFlowTextBlock';
import {
  IInputFlowDnd,
  InputFlowDndApi,
} from 'entities/contentFlowBlock/inputFlowBlock/inputFlowDnd';
import {
  IInputFlowOnlyCode,
  InputFlowOnlyCodeApi,
} from 'entities/contentFlowBlock/inputFlowBlock/inputFlowOnlyCode';
import {
  IInputFlowPartCode,
  InputFlowPartCodeApi,
} from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode';

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

export type InfoFlowBlockInterfaceUnion = IInfoFlowTextBlock | IInfoFlowImageBlock;

export type InfoFlowBlockApiUnion = InfoFlowTextBlockApi | InfoFlowImageBlockApi;

export type InputFlowBlockInterfaceUnion = IInputFlowOnlyCode | IInputFlowPartCode | IInputFlowDnd;

export type InputFlowBlockApiUnion = InputFlowOnlyCodeApi | InputFlowPartCodeApi | InputFlowDndApi;

export type FlowBlockInterfaceUnion = InfoFlowBlockInterfaceUnion | InputFlowBlockInterfaceUnion;

export type FlowBlockApiUnion = InfoFlowBlockApiUnion | InputFlowBlockApiUnion;
