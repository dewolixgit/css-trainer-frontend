import { sanitize } from 'dompurify';
import { observer } from 'mobx-react';
import * as React from 'react';

import { IInfoFlowTextBlock } from 'entities/contentFlowBlock/infoFlowBlock/infoFlowTextBlock';

type Props = {
  className?: string;
  flowBlock: IInfoFlowTextBlock;
};

const TextBlock: React.FC<Props> = ({ flowBlock, className }) => {
  const satitized = React.useMemo(() => sanitize(flowBlock.text), [flowBlock.text]);

  return <p className={className} dangerouslySetInnerHTML={{ __html: satitized }} />;
};

export default observer(TextBlock);
