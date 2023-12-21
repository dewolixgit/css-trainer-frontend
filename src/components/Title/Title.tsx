import cn from 'classnames';
import * as React from 'react';

import { TitleSizesUnion } from 'entities/components/title';
import { FontWeightEnum } from 'entities/fonts';
import { SizeEnum } from 'entities/size';
import { CommonProps } from 'types/props';

import './Title.module.scss';

type Props = Pick<React.HTMLAttributes<HTMLElement>, 'dangerouslySetInnerHTML' | 'onClick'> &
  CommonProps & {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';
    size?: TitleSizesUnion;
    weight?: FontWeightEnum;
  };

const Title: React.FC<Props> = ({
  tag: Tag = 'div',
  size = SizeEnum.xl,
  weight = FontWeightEnum.medium,
  className,
  children,
  ...props
}) => {
  return (
    <Tag
      styleName={cn('title', `title_size-${size}`, `title_weight-${weight}`)}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default React.memo(Title);
