import { InfoFlowBlockType } from 'entities/contentFlowBlock/infoFlowBlock';
import {
  IInfoFlowImageBlock,
  InfoFlowImageBlockApi,
  InfoFlowImageBlockParams,
} from 'entities/contentFlowBlock/infoFlowBlock/infoFlowImageBlock/types';
import { InfoFlowBlock } from 'models/ContentFlowBlock/InfoFlowBlock/InfoFlowBlock';

export class InfoFlowImageBlock extends InfoFlowBlock implements IInfoFlowImageBlock {
  readonly infoType = InfoFlowBlockType.image;

  readonly linesHeight: number;
  readonly url: string;
  readonly alt: string;

  constructor(params: InfoFlowImageBlockParams) {
    super({
      id: params.id,
    });
    this.url = params.url;
    this.linesHeight = params.linesHeight;
    this.alt = params.alt;
  }

  static fromApi(api: InfoFlowImageBlockApi): InfoFlowImageBlock {
    return new InfoFlowImageBlock({
      ...InfoFlowBlock.transformApiFields(api),
      url: api.url,
      linesHeight: api.linesHeight,
      alt: api.alt,
    });
  }
}
