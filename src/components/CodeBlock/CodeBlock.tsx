import * as React from 'react';

import { CodeContainer, CodeContainerMain } from 'components/ui';
import { CODE_LINES_DIVIDER } from 'config/code';
import splitIntoLines from 'utils/markup/splitIntoLines';

type Props = {
  className?: string;
  code: string;
  divider?: string;
};

const CodeBlock: React.FC<Props> = ({ code, divider = CODE_LINES_DIVIDER, className }) => {
  const { markup, linesCount } = React.useMemo(
    () => splitIntoLines(code, divider),
    [code, divider]
  );

  return (
    <CodeContainer
      className={className}
      linesCount={linesCount}
      lineCounterTheme="primary"
      mainTheme="primary"
    >
      <CodeContainerMain>{markup}</CodeContainerMain>
    </CodeContainer>
  );
};

export default React.memo(CodeBlock);
