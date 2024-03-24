import * as React from 'react';

import './Spacing.module.scss';

export type SpacingProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: number;
  style?: React.CSSProperties;
};

/**
 * Вертикальный отступ
 */
const Spacing = ({ size = 8, style, ...restProps }: SpacingProps) => {
  return (
    <div
      styleName="spacing"
      style={{
        ...style,
        // @ts-ignore
        ['--size']: `${size}px`,
      }}
      {...restProps}
    />
  );
};

export default React.memo(Spacing);
