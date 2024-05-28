import styled, { css } from 'styled-components';

import backgroundImage from 'exercises/SetCombinators/Layout/img/background-nature.jpg';
import RoundPotionSvg from 'exercises/SetCombinators/Layout/img/potion-round.c.svg';
import SquarePotionSvg from 'exercises/SetCombinators/Layout/img/potion-square.c.svg';
import TrianglePotionSvg from 'exercises/SetCombinators/Layout/img/potion-triangle.c.svg';
import { SetCombinatorsUtils } from 'exercises/SetCombinators/utils';
import { mixin } from 'exercises/styles';
import { SetLayoutRoot } from 'exercises/ui';

const potionCommonStyles = css`
  position: absolute;

  ${mixin.animate(['right', 'bottom', 'filter'])};

  &.${SetCombinatorsUtils.CLASSNAMES.partTwo.color.blue} {
    color: #4ea5ff;
  }

  &.${SetCombinatorsUtils.CLASSNAMES.partTwo.color.red} {
    color: #ff6666;
  }

  &.${SetCombinatorsUtils.CLASSNAMES.partTwo.color.green} {
    color: #14ea33;
  }

  &.${SetCombinatorsUtils.CLASSNAMES.partTwo.size.small} {
    ${mixin.square('100px')}
  }

  &.${SetCombinatorsUtils.CLASSNAMES.partTwo.size.medium} {
    ${mixin.square('200px')}
  }

  &.${SetCombinatorsUtils.CLASSNAMES.partTwo.size.large} {
    ${mixin.square('350px')}
  }
`;

export const Root = styled(SetLayoutRoot).attrs({
  $backgroundImage: backgroundImage,
  $overlayOpaque: 0.3,
})``;

export const RoundPotion = styled(RoundPotionSvg)<{ $key: 1 | 2 | 3 }>`
  ${potionCommonStyles};

  ${({ $key }) => {
    switch ($key) {
      case 1:
        return css`
          bottom: 830px;
          right: 700px;
          transform: rotate(10deg);
        `;
      case 2:
        return css`
          bottom: 540px;
          right: 650px;
          transform: rotate(-20deg);
        `;
      default:
      case 3:
        return css`
          bottom: 410px;
          right: 640px;
          transform: rotate(30deg);
        `;
    }
  }}
`;

export const SquarePotion = styled(SquarePotionSvg)<{ $key: 1 | 2 | 3 }>`
  ${potionCommonStyles};

  ${({ $key }) => {
    switch ($key) {
      case 1:
        return css`
          bottom: 730px;
          right: 80px;
          transform: rotate(30deg);
        `;
      case 2:
        return css`
          bottom: 550px;
          right: 240px;
          transform: rotate(-10deg);
        `;
      default:
      case 3:
        return css`
          bottom: 150px;
          right: 350px;
          transform: rotate(15deg);
        `;
    }
  }}
`;

export const TrianglePotion = styled(TrianglePotionSvg)<{ $key: 1 | 2 | 3 }>`
  ${potionCommonStyles};

  ${({ $key }) => {
    switch ($key) {
      case 1:
        return css`
          bottom: 780px;
          right: 580px;
          transform: rotate(-15deg);
        `;
      case 2:
        return css`
          bottom: 630px;
          right: 540px;
          transform: rotate(20deg);
        `;
      default:
      case 3:
        return css`
          bottom: 50px;
          right: 640px;
        `;
    }
  }}
`;
