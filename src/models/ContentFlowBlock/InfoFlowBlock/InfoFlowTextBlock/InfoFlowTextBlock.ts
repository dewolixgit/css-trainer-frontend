import { InfoFlowBlockType } from 'entities/contentFlowBlock/infoFlowBlock';
import {
  IInfoFlowTextBlock,
  InfoFlowTextBlockApi,
  InfoFlowTextBlockParams,
} from 'entities/contentFlowBlock/infoFlowBlock/infoFlowTextBlock';
import { InfoFlowBlock } from 'models/ContentFlowBlock/InfoFlowBlock/InfoFlowBlock';

export class InfoFlowTextBlock extends InfoFlowBlock implements IInfoFlowTextBlock {
  readonly infoType = InfoFlowBlockType.text;
  readonly text: string;

  constructor(params: InfoFlowTextBlockParams) {
    super({
      id: params.id,
    });
    this.text = params.text;
  }

  static fromApi(api: InfoFlowTextBlockApi): InfoFlowTextBlock {
    return new InfoFlowTextBlock({
      ...InfoFlowBlock.transformApiFields(api),
      text: api.text,
    });
  }
}
