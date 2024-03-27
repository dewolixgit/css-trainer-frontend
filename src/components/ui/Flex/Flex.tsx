import * as React from 'react';

import './Flex.module.scss';

export type FlexProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  style?: React.CSSProperties;
  direction?: React.CSSProperties['flexDirection'];
  justifyContent?: React.CSSProperties['justifyContent'];
  alignItems?: React.CSSProperties['alignItems'];
  flexGrow?: React.CSSProperties['flexGrow'];
  flexShrink?: React.CSSProperties['flexShrink'];
};

const Flex: React.FC<FlexProps> = ({
  direction = 'row',
  alignItems = 'normal',
  justifyContent = 'normal',
  flexGrow = 0,
  flexShrink = 1,
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
          ['--flex-grow']: flexGrow,
          ['--flex-shrink']: flexShrink,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export default Flex;
