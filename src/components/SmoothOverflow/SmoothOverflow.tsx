import cn from 'classnames';
import * as React from 'react';

import { SmoothOverflowModeEnum } from 'entities/components/smoothOverflow';
import { CommonProps } from 'types/props';

import './SmoothOverflow.module.scss';

type Props = CommonProps & {
  overflowMode?: SmoothOverflowModeEnum;
  gradientSize?: number;
};

const SmoothOverflow = React.forwardRef<HTMLDivElement, Props>(
  ({ className, children, overflowMode = SmoothOverflowModeEnum.top, gradientSize = 24 }, ref) => {
    return (
      <div
        styleName={cn('container', `container--mode-${overflowMode}`)}
        className={className}
        ref={ref}
        style={{ ['--smooth-overflow-gradient-size']: `${gradientSize}px` } as React.CSSProperties}
      >
        {children}
      </div>
    );
  }
);

export default SmoothOverflow;
