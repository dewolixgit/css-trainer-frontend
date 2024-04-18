import {
  ContentFlowBlockType,
  FlowBlockInterfaceUnion,
  InputFlowBlockInterfaceUnion,
} from 'entities/contentFlowBlock/types';

export const filterInputFlowBlockInterfaceUnion = (
  contentFlowBlocks: FlowBlockInterfaceUnion[]
): InputFlowBlockInterfaceUnion[] =>
  contentFlowBlocks.filter(
    (item) => item.contentType === ContentFlowBlockType.input
  ) as InputFlowBlockInterfaceUnion[];
