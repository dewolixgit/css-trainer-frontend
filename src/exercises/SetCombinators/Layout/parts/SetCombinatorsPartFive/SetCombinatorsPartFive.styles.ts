import styled, { css } from 'styled-components';

import { SetCombinatorsUtils } from 'exercises/SetCombinators/utils';
import backgroundImage from 'exercises/img/background-plank-wood.jpg';
import regularBoxImage from 'exercises/img/box-plain.png';
import coinImage from 'exercises/img/coin.svg';
import { mixin } from 'exercises/styles';
import { SetLayoutRoot } from 'exercises/ui';

import bagImage from './img/bag.png';

export const Root = styled(SetLayoutRoot).attrs({
  $backgroundImage: backgroundImage,
})``;

export const Box = styled.div`
  position: absolute;

  top: 50px;
  left: 50px;

  ${mixin.backgroundImageContain(regularBoxImage)}
  ${mixin.square(`${800}px`)};
`;

export const Bag = styled.div<{ $key: 1 | 2 }>`
  position: absolute;

  ${mixin.backgroundImageContain(bagImage)}
  ${mixin.square(`${275}px`)};

  ${({ $key }) => {
    switch ($key) {
      case 1:
        return css`
          top: 20%;
          left: 20%;
          transform: rotate(15deg);
        `;
      case 2:
      default:
        return css`
          bottom: 17%;
          right: 25%;
          transform: rotate(30deg);
        `;
    }
  }}

  .${SetCombinatorsUtils.CLASSNAMES.partFive.coin} {
    transform: scale(0.7);
  }
`;

export const Coin = styled.div<{ $top: number; $left: number }>`
  position: absolute;

  ${mixin.backgroundImageContain(coinImage)};

  ${mixin.square('46px')};

  ${mixin.animate(['transform'])};

  ${({ $top, $left }) => css`
    top: ${$top}%;
    left: ${$left}%;
  `}
`;
