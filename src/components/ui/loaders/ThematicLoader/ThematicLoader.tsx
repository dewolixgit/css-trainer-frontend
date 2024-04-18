import cn from 'classnames';
import * as React from 'react';

import { LOADER_SIZES, LoaderSizeEnum } from 'config/components/loaders';
import {
  ThematicLoaderAnimationTypeEnum,
  ThematicLoaderColor,
  ThematicLoaderTypeEnum,
  thematicLoaderTypeSVGMap,
} from 'config/components/loaders/thematicLoader';
import { CommonProps } from 'types/props';

import './ThematicLoader.module.scss';

export type ThematicLoaderProps = CommonProps & {
  size?: LoaderSizeEnum | number;
  type?: ThematicLoaderTypeEnum;
  animationType?: ThematicLoaderAnimationTypeEnum;
  color?: ThematicLoaderColor;
};

/**
 * Thematic loader components
 */
const ThematicLoader: React.FC<ThematicLoaderProps> = ({
  className,
  size = LoaderSizeEnum.m,
  type = ThematicLoaderTypeEnum.sword,
  animationType = ThematicLoaderAnimationTypeEnum.spin,
  color = ThematicLoaderColor.primary,
}) => {
  const Icon = thematicLoaderTypeSVGMap[type];

  const sizeValue = typeof size === 'string' ? LOADER_SIZES[size] : size;

  return (
    <div
      styleName={cn(
        'container',
        `container_color-${color}`,
        `container_animation-${animationType}`
      )}
      className={className}
      style={
        {
          ['--size']: `${sizeValue}px`,
        } as React.CSSProperties
      }
    >
      <Icon styleName="icon" />
    </div>
  );
};

export default React.memo(ThematicLoader);
