import styled from 'styled-components';

import backgroundImage from 'exercises/SetCombinators/Layout/img/background-nature.jpg';
import bookImage from 'exercises/SetCombinators/Layout/img/book-2.png';
import bootsImage from 'exercises/SetCombinators/Layout/img/boots.svg';
import helmetImage from 'exercises/SetCombinators/Layout/img/helmet.svg';
import YellowRoundPortionSvg from 'exercises/SetCombinators/Layout/img/potion-round.c.svg';
import scrollImage from 'exercises/SetCombinators/Layout/img/scroll-regular.svg';
import { SET_COMBINATORS_COLORS } from 'exercises/SetCombinators/Layout/styles/color';
import { mixin } from 'exercises/styles';
import { SetLayoutRoot } from 'exercises/ui';

const commonTransition = mixin.animate(['right', 'bottom', 'filter']);

export const Root = styled(SetLayoutRoot).attrs({
  $backgroundImage: backgroundImage,
  $overlayOpaque: 0.3,
})``;

export const Boots = styled.img.attrs({
  src: bootsImage,
})`
  position: absolute;
  bottom: 620px;
  right: 600px;

  object-fit: contain;
  object-position: center;
  transform: rotate(20deg);

  ${mixin.square('290px')};
  ${commonTransition};
`;

export const Helmet = styled.img.attrs({
  src: helmetImage,
})`
  position: absolute;
  bottom: 330px;
  right: 480px;

  object-fit: contain;
  object-position: center;
  transform: rotate(-10deg);

  ${mixin.square('220px')};
  ${commonTransition};
`;

export const YellowRoundPortion = styled(YellowRoundPortionSvg)`
  position: absolute;
  bottom: 730px;
  right: 240px;

  transform: rotate(-15deg);

  color: ${SET_COMBINATORS_COLORS.yellow};

  ${mixin.square('200px')};
  ${commonTransition};
`;

export const Book = styled.img.attrs({
  src: bookImage,
})`
  position: absolute;
  bottom: 430px;
  right: 150px;

  object-fit: contain;
  object-position: center;

  ${mixin.square('220px')};
  ${commonTransition};
`;

export const Scroll = styled.img.attrs({
  src: scrollImage,
})`
  position: absolute;
  bottom: 140px;
  right: 750px;

  object-fit: contain;
  object-position: center;
  transform: rotate(10deg);

  ${mixin.square('200px')};
  ${commonTransition};
`;
