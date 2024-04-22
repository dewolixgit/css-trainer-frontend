import { observer } from 'mobx-react';
import * as React from 'react';

import { CodeBlock } from 'components/CodeBlock';
import { IInfoFlowCodeBlock } from 'entities/contentFlowBlock/infoFlowBlock/infoFlowCodeBlock';

type Props = {
  className?: string;
  flowBlock: IInfoFlowCodeBlock;
};

const CodeFlowBlock: React.FC<Props> = ({ flowBlock, className }) => {
  return <CodeBlock code={flowBlock.text} className={className} />;
};

export default observer(CodeFlowBlock);
