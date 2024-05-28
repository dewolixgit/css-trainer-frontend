import styled, { css } from 'styled-components';

import RoundPotionSvg from 'exercises/SetCombinators/Layout/img/potion-round.c.svg';
import SquarePotionSvg from 'exercises/SetCombinators/Layout/img/potion-square.c.svg';
import TrianglePotionSvg from 'exercises/SetCombinators/Layout/img/potion-triangle.c.svg';
import { SetCombinatorsUtils } from 'exercises/SetCombinators/utils';
import backgroundImage from 'exercises/img/background-plank-wood.jpg';
import { mixin } from 'exercises/styles';
import { SetLayoutRoot } from 'exercises/ui';

import longPlainBoxImage from './img/box-long-plain.png';
import ToxicPotionSvg from './img/potion-triangle-toxic.c.svg';

export const Root = styled(SetLayoutRoot).attrs({
  $backgroundImage: backgroundImage,
})`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Box = styled.div`
  box-sizing: border-box;

  height: 90%;
  flex: 1 0 0;

  transform: scale(2.5);

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 310px 140px;

  ${mixin.backgroundImageContain(longPlainBoxImage)};

  .${SetCombinatorsUtils.CLASSNAMES.partSix.potion}:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const commonPotionStyles = css`
  width: 100%;
  height: 47px;
  ${mixin.animate(['transform'])};
`;

export const TriangleGreenPotion = styled(TrianglePotionSvg)`
  ${commonPotionStyles};
  color: #72ee26;
`;

export const RoundRedPotion = styled(RoundPotionSvg)`
  ${commonPotionStyles};
  color: #fa3f3f;
`;

export const ToxicPotion = styled(ToxicPotionSvg)`
  ${commonPotionStyles};
`;

export const SquareRedPotion = styled(SquarePotionSvg)`
  ${commonPotionStyles};
  color: #fa3f3f;
`;

export const SquareBluePotion = styled(SquarePotionSvg)`
  ${commonPotionStyles};
  color: #62a6ff;
`;

export const RoundGreenPotion = styled(RoundPotionSvg)`
  ${commonPotionStyles};
  color: #72ee26;
`;

export const TriangleBluePotion = styled(TrianglePotionSvg)`
  ${commonPotionStyles};
  color: #62a6ff;
`;

export const TriangleRedPotion = styled(TrianglePotionSvg)`
  ${commonPotionStyles};
  color: #fa3f3f;
`;

export const SquareGreenPotion = styled(SquarePotionSvg)`
  ${commonPotionStyles};
  color: #72ee26;
`;
