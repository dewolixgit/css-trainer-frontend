import { observer } from 'mobx-react';
import * as React from 'react';

import { BaseLazyImage } from 'components/ui';
import { IInfoFlowImageBlock } from 'entities/contentFlowBlock/infoFlowBlock/infoFlowImageBlock';

import './ImageBlock.module.scss';

type Props = {
  flowBlock: IInfoFlowImageBlock;
  className?: string;
};

const ImageBlock: React.FC<Props> = ({ flowBlock, className }) => {
  return (
    <div
      styleName="image-wrapper"
      className={className}
      style={
        {
          ['--background-image']: `url(${flowBlock.url})`,
          ['--lines-height']: `${flowBlock.linesHeight}em`,
        } as React.CSSProperties
      }
    >
      <BaseLazyImage src={flowBlock.url} alt={flowBlock.alt} styleName="image" />
    </div>
  );
};

export default observer(ImageBlock);
