import { observer } from 'mobx-react';
import * as React from 'react';

import { IInfoFlowTextBlock } from 'entities/contentFlowBlock/infoFlowBlock/infoFlowTextBlock';

type Props = {
  className?: string;
  flowBlock: IInfoFlowTextBlock;
};

const TextBlock: React.FC<Props> = ({ flowBlock, className }) => {
  return <p className={className}>{flowBlock.text}</p>;
};

export default observer(TextBlock);
