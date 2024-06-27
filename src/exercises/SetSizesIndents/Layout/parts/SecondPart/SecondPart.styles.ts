import styled, { css } from 'styled-components';

import blanketImage from 'exercises/SetSizesIndents/Layout/img/blanket.jpg';
import backgroundImage from 'exercises/SetSizesIndents/Layout/img/inside-tent.jpg';
import boxImage from 'exercises/img/box-plain.png';

import { mixin } from '../../../../styles';
import { SetLayoutRoot } from '../../../../ui';
import { SetSizesIndentsUtils } from '../../../utils';
import { BaseBerries, BaseBook, BaseCoin, BaseMushroom, BaseScroll } from '../../ui';

export const Root = styled(SetLayoutRoot).attrs({
  $backgroundImage: backgroundImage,
  $overlayOpaque: 0.3,
})`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${SetSizesIndentsUtils.VALUES.secondPart.boxVerticalPaddingPx}px
    ${SetSizesIndentsUtils.VALUES.secondPart.boxHorizontalPaddingPx}px;

  box-sizing: border-box;

  ${mixin.backgroundImageCover(boxImage)};
  ${mixin.square(`${SetSizesIndentsUtils.VALUES.secondPart.boxSizePx}px`)};
`;

export const BoxInner = styled.div`
  position: relative;
  ${mixin.square('100%')};
`;

export const Blanket = styled.div<{ $fullContainer?: boolean; $paddingAndBorder?: boolean }>`
  position: absolute;

  display: flex;
  flex-wrap: wrap;
  align-content: start;
  align-items: center;

  box-shadow: 0 0 16px 4px rgba(0, 0, 0, 0.2);

  ${mixin.animate(['width', 'height'])};
  ${mixin.centerXY};
  ${mixin.backgroundImageCover(blanketImage)};

  ${({ $fullContainer }) => ($fullContainer ? mixin.square('100%') : mixin.square('300px'))};

  ${({ $paddingAndBorder }) =>
    $paddingAndBorder &&
    css`
      padding: 52px;
      border: 36px solid #ffca24;
    `}
`;

export const Coin = styled(BaseCoin)`
  ${mixin.square('30px')};
`;

export const Mushroom = styled(BaseMushroom)`
  ${mixin.square('50px')};
`;

export const Scroll = styled(BaseScroll)`
  ${mixin.square('80px')};
`;

export const Book = styled(BaseBook)`
  ${mixin.square('80px')};
`;

export const Berries = styled(BaseBerries)`
  ${mixin.square('70px')};
`;
