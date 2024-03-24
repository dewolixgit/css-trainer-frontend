import cn from 'classnames';
import * as React from 'react';

import { TitleSizesUnion } from 'config/components/title';
import { FontWeightEnum } from 'config/fonts';
import { SizeEnum } from 'config/size';
import { CommonProps } from 'types/props';

import './Title.module.scss';

type Props = Pick<React.HTMLAttributes<HTMLElement>, 'dangerouslySetInnerHTML' | 'onClick'> &
  CommonProps & {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';
    size?: TitleSizesUnion;
    weight?: FontWeightEnum;
    textAlign?: Extract<React.CSSProperties['textAlign'], 'center' | 'start' | 'end'>;
  };

const Title: React.FC<Props> = ({
  tag: Tag = 'div',
  size = SizeEnum.xl,
  weight = FontWeightEnum.medium,
  textAlign,
  className,
  children,
  ...props
}) => {
  return (
    <Tag
      styleName={cn(
        'title',
        `title_size-${size}`,
        `title_weight-${weight}`,
        textAlign && `title_text-align-${textAlign}`
      )}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default React.memo(Title);
