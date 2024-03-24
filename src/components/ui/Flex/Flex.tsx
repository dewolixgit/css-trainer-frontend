import * as React from 'react';

import './Flex.module.scss';

export type FlexProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  style?: React.CSSProperties;
  direction?: React.CSSProperties['flexDirection'];
  justifyContent?: React.CSSProperties['justifyContent'];
  alignItems?: React.CSSProperties['alignItems'];
};

const Flex: React.FC<FlexProps> = ({
  direction = 'row',
  alignItems = 'normal',
  justifyContent = 'normal',
  className,
  style = {},
  ...props
}) => {
  return (
    <div
      styleName="flex"
      className={className}
      style={
        {
          ['--direction']: direction,
          ['--align-items']: alignItems,
          ['--justify-content']: justifyContent,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export default Flex;
