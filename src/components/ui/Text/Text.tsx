import cn from 'classnames';
import * as React from 'react';

import { TextSizesUnion, TextWeightsUnion } from 'config/components/text';
import { FontWeightEnum } from 'config/fonts';
import { SizeEnum } from 'config/size';
import { CommonProps } from 'types/props';

import './Text.module.scss';

export type Props = Pick<React.HTMLAttributes<HTMLElement>, 'dangerouslySetInnerHTML' | 'style'> &
  CommonProps & {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span' | 'p';
    size?: TextSizesUnion;
    weight?: TextWeightsUnion;
    nobr?: boolean;
    onClick?: VoidFunction;
  };

const Text: React.FC<Props> = ({
  tag: Tag = 'div',
  size = SizeEnum.m,
  weight = FontWeightEnum.regular,
  nobr,
  className,
  children,
  onClick,
  ...props
}) => {
  return (
    <Tag
      styleName={cn('text', `text_size-${size}`, `text_weight-${weight}`, nobr && 'text_nobr')}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default React.memo(Text);
