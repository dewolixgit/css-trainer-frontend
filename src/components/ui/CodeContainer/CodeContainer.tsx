import cn from 'classnames';
import * as React from 'react';

import './CodeContainer.module.scss';
import { range } from 'utils/array';

export type CodeContainerProps = {
  linesCount: number;
  lineCounterTheme?: 'primary' | 'secondary';
  mainTheme?: 'primary' | 'secondary' | null;
  className?: string;
  children?: React.ReactNode;
};

const CodeContainer: React.FC<CodeContainerProps> = ({
  linesCount,
  lineCounterTheme = 'primary',
  mainTheme = 'primary',
  children,
  className,
}) => {
  const lineKeys = React.useMemo(() => range(linesCount, { from: 1 }), [linesCount]);

  return (
    <div styleName="root" className={className}>
      <div styleName={cn('line-counter', `line-counter_theme-${lineCounterTheme}`)}>
        {lineKeys.map((key) => (
          <div key={key}>{key}</div>
        ))}
      </div>
      <div styleName={cn('main', mainTheme && `main_theme-${mainTheme}`)}>{children}</div>
    </div>
  );
};

export default React.memo(CodeContainer);
