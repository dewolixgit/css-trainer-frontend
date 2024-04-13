import {
  IInputFlowBlock,
  InputFlowBlockApi,
  InputFlowBlockParams,
  InputFlowType,
} from 'entities/contentFlowBlock/inputFlowBlock';
import { ContentFlowBlockType } from 'entities/contentFlowBlock/types';
import { ContentFlowBlock } from 'models/ContentFlowBlock';

export abstract class InputFlowBlock extends ContentFlowBlock implements IInputFlowBlock {
  readonly contentType = ContentFlowBlockType.input;
  abstract readonly inputType: InputFlowType;

  constructor(params: InputFlowBlockParams) {
    super({ id: params.id });
  }

  static transformApiFields(api: InputFlowBlockApi): InputFlowBlockParams {
    return {
      id: api.id,
    };
  }
}
