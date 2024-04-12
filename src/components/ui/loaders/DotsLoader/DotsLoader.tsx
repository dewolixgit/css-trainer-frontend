import cn from 'classnames';
import * as React from 'react';

import './DotsLoader.module.scss';
import { LOADER_SIZES, LoaderSizeEnum } from 'config/components/loaders';
import { DotsLoaderColor } from 'config/components/loaders/dotsLoader';

export type DotsLoaderProps = React.ComponentProps<'svg'> & {
  size?: number | LoaderSizeEnum;
  color?: DotsLoaderColor;
  dotClassName?: string;
};

const DotsLoader: React.FC<DotsLoaderProps> = ({
  size = LoaderSizeEnum.m,
  color = DotsLoaderColor.primary,
  dotClassName,
  // eslint-disable-next-line react/prop-types
  className,
  ...props
}) => {
  const sizeValue = typeof size === 'string' ? LOADER_SIZES[size] : size;

  return (
    <svg
      styleName={`root_color-${color}`}
      className={className}
      width={sizeValue}
      height={sizeValue}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle styleName={cn('dot', dotClassName)} cx="4" cy="12" r="3" fill="currentColor" />
      <circle styleName={cn('dot', dotClassName)} cx="12" cy="12" r="3" fill="currentColor" />
      <circle styleName={cn('dot', dotClassName)} cx="20" cy="12" r="3" fill="currentColor" />
    </svg>
  );
};

export default React.memo(DotsLoader);
