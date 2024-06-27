import styled, { css } from 'styled-components';

import blueBoxImage from 'exercises/SetCombinators/Layout/img/box-blue.png';
import greenBoxImage from 'exercises/SetCombinators/Layout/img/box-green.png';
import redBoxImage from 'exercises/SetCombinators/Layout/img/box-red.png';
import { SetCombinatorsUtils } from 'exercises/SetCombinators/utils';
import backgroundImage from 'exercises/img/background-plank-wood.jpg';
import regularBoxImage from 'exercises/img/box-plain.png';
import coinImage from 'exercises/img/coin.svg';
import { mixin } from 'exercises/styles';
import { SetLayoutRoot } from 'exercises/ui';

export const Root = styled(SetLayoutRoot).attrs({
  $backgroundImage: backgroundImage,
})``;

const boxSize = {
  medium: 200,
  large: 450,
};

export const Box = styled.div<{ $top: number; $left: number; $size: 'medium' | 'large' }>`
  position: absolute;
  box-sizing: border-box;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  ${({ $size }) => css`
    ${mixin.square(`${boxSize[$size]}px`)};

    padding: ${boxSize[$size] * 0.19}px ${boxSize[$size] * 0.17}px ${boxSize[$size] * 0.15}px
      ${boxSize[$size] * 0.15}px;
  `}

  ${({ $top, $left }) => css`
    top: ${$top}%;
    left: ${$left}%;
  `}

  &.${SetCombinatorsUtils.CLASSNAMES.partFour.color.blue} {
    background-image: url('${blueBoxImage}');
  }

  &.${SetCombinatorsUtils.CLASSNAMES.partFour.color.green} {
    background-image: url('${greenBoxImage}');
  }

  &.${SetCombinatorsUtils.CLASSNAMES.partFour.color.red} {
    background-image: url('${redBoxImage}');
  }

  &.${SetCombinatorsUtils.CLASSNAMES.partFour.color.regular} {
    background-image: url('${regularBoxImage}');
  }
`;

export const Coin = styled.div<{ $top: number; $left: number }>`
  position: absolute;

  ${mixin.backgroundImageContain(coinImage)};

  ${mixin.square('50px')};

  ${mixin.animate(['transform'])};

  ${({ $top, $left }) => css`
    top: ${$top}%;
    left: ${$left}%;
  `}
`;
