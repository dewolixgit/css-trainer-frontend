import styled, { css } from 'styled-components';

import backgroundImage from 'exercises/SetSizesIndents/Layout/img/background-outside.jpg';
import blanket from 'exercises/SetSizesIndents/Layout/img/blanket.jpg';
import campfireImage from 'exercises/SetSizesIndents/Layout/img/campfire.png';
import jarImage from 'exercises/SetSizesIndents/Layout/img/jar-with-mushrooms.png';
import mainCharacterImage from 'exercises/SetSizesIndents/Layout/img/main-character-no-armor.png';
import tentImage from 'exercises/SetSizesIndents/Layout/img/tent.png';
import boxImage from 'exercises/SetSizesIndents/Layout/img/wooden-box-closed.jpg';
import duffelBagImage from 'exercises/img/duffel-bag.png';

import { mixin } from '../../../../styles';
import { SetLayoutRoot } from '../../../../ui';
import {
  BaseBerries,
  BaseBook,
  BaseCoin,
  BaseHelmet,
  BaseImg,
  BaseMushroom,
  BasePotion,
  BaseScroll,
} from '../../ui';

export const Root = styled(SetLayoutRoot).attrs({
  $backgroundImage: backgroundImage,
  $overlayOpaque: 0.3,
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  z-index: 1;
`;

export const Tent = styled(BaseImg).attrs({
  src: tentImage,
})<{ $withBorder?: boolean; $small?: boolean }>`
  object-fit: fill;

  ${mixin.animate(['width', 'height'])};

  ${({ $small }) => ($small ? mixin.square('180px') : mixin.square('360px'))};

  ${({ $withBorder }) =>
    $withBorder &&
    css`
      border: 4px dashed #ffff00;
    `}
`;

export const MainCharacter = styled(BaseImg).attrs({
  src: mainCharacterImage,
})`
  height: 360px;
  width: 180px;
`;

export const Bag = styled(BaseImg).attrs({
  src: duffelBagImage,
})`
  ${mixin.square('180px')};
`;

export const Campfire = styled(BaseImg).attrs<{ $margin?: boolean }>({
  src: campfireImage,
})`
  width: 180px;
  height: 220px;

  ${mixin.animate(['margin'])};

  ${({ $margin }) =>
    $margin &&
    css`
      margin: 30px 20px;
    `}
`;

export const Jar = styled(BaseImg).attrs({
  src: jarImage,
})`
  width: 130px;
  height: 150px;
`;

export const Box = styled(BaseImg).attrs({
  src: boxImage,
})`
  ${mixin.animate(['border-width'])};
  ${mixin.square('170px')};
`;

export const Blanket = styled.div<{ $padding?: boolean }>`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  align-content: start;
  align-items: center;

  ${mixin.animate(['padding'])};
  ${mixin.square('300px')};
  ${mixin.backgroundImageCover(blanket)};

  ${({ $padding }) =>
    $padding &&
    css`
      padding: 12px 20px 18px;
    `};
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

export const Helmet = styled(BaseHelmet)`
  ${mixin.square('80px')};
`;

export const Book = styled(BaseBook)`
  ${mixin.square('80px')};
`;

export const Potion = styled(BasePotion)`
  ${mixin.square('80px')};
`;

export const Berries = styled(BaseBerries)`
  ${mixin.square('80px')};
`;
