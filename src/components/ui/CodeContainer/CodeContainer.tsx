import cn from 'classnames';
import * as React from 'react';

import './CodeContainer.module.scss';
import { range } from 'utils/array';

const CODE_CONTAINER_VERTICAL_INDENT = 8;
const CODE_CONTAINER_BORDER_RADIUS = 16;

export type CodeContainerProps = {
  linesCount: number;
  lineCounterTheme?: 'primary' | 'secondary';
  mainTheme?: 'primary' | 'secondary' | null;
  className?: string;
  renderMain?: (params: {
    codeContainerVerticalIndent: number;
    codeContainerBorderRadius: number;
  }) => React.ReactNode;
};

const CodeContainer: React.FC<CodeContainerProps> = ({
  linesCount,
  lineCounterTheme = 'primary',
  mainTheme = 'primary',
  renderMain,
  className,
}) => {
  const lineKeys = React.useMemo(() => range(linesCount, { from: 1 }), [linesCount]);

  return (
    <div
      styleName="root"
      className={className}
      style={
        {
          ['--code-container-vertical-indent']: `${CODE_CONTAINER_VERTICAL_INDENT}px`,
          ['--code-container-border-radius']: `${CODE_CONTAINER_BORDER_RADIUS}px`,
        } as React.CSSProperties
      }
    >
      <div styleName={cn('line-counter', `line-counter_theme-${lineCounterTheme}`)}>
        {lineKeys.map((key) => (
          <div key={key}>{key}</div>
        ))}
      </div>
      <div styleName={cn('main', mainTheme && `main_theme-${mainTheme}`)}>
        {renderMain?.({
          codeContainerVerticalIndent: CODE_CONTAINER_VERTICAL_INDENT,
          codeContainerBorderRadius: CODE_CONTAINER_BORDER_RADIUS,
        })}
      </div>
    </div>
  );
};

export default React.memo(CodeContainer);
