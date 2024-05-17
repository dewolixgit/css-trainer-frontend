import * as React from 'react';

import { CodeContainer, CodeContainerMain } from 'components/ui';
import { CODE_LINES_DIVIDER } from 'config/code';
import { countOccurrences } from 'utils/string/countOccurrences';

import './CodeBlock.module.scss';

type Props = {
  className?: string;
  code: string;
};

const CodeBlock: React.FC<Props> = ({ code, className }) => {
  const linesCount = React.useMemo(() => countOccurrences(code, CODE_LINES_DIVIDER) + 1, [code]);

  return (
    <CodeContainer
      className={className}
      linesCount={linesCount}
      lineCounterTheme="primary"
      mainTheme="primary"
    >
      <CodeContainerMain>
        <pre styleName="pre">
          <code styleName="code">{code}</code>
        </pre>
      </CodeContainerMain>
    </CodeContainer>
  );
};

export default React.memo(CodeBlock);
