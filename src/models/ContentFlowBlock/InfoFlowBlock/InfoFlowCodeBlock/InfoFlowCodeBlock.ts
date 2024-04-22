import { InfoFlowBlockType } from 'entities/contentFlowBlock/infoFlowBlock';
import {
  IInfoFlowCodeBlock,
  InfoFlowCodeBlockApi,
} from 'entities/contentFlowBlock/infoFlowBlock/infoFlowCodeBlock';
import { InfoFlowTextBlockParams } from 'entities/contentFlowBlock/infoFlowBlock/infoFlowTextBlock';
import { InfoFlowBlock } from 'models/ContentFlowBlock/InfoFlowBlock/InfoFlowBlock';

export class InfoFlowCodeBlock extends InfoFlowBlock implements IInfoFlowCodeBlock {
  readonly infoType = InfoFlowBlockType.code;
  readonly text: string;

  constructor(params: InfoFlowTextBlockParams) {
    super({
      id: params.id,
    });
    this.text = params.text;
  }

  static fromApi(api: InfoFlowCodeBlockApi): InfoFlowCodeBlock {
    return new InfoFlowCodeBlock({
      ...InfoFlowBlock.transformApiFields(api),
      text: api.text,
    });
  }
}
