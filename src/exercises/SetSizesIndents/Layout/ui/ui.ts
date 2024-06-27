import styled from 'styled-components';

import berriesImage from '../../../img/berries-red.svg';
import bookImage from '../../../img/book-1.png';
import coinImage from '../../../img/coin.svg';
import helmetImage from '../../../img/helmet.svg';
import mushroomImage from '../../../img/mushroom.svg';
import scrollImage from '../../../img/plain-scroll.svg';
import potionImage from '../../../img/potion-round-green.svg';

export const BaseImg = styled.img`
  display: block;
  object-position: center;
  object-fit: contain;
`;

export const BaseCoin = styled(BaseImg).attrs({
  src: coinImage,
})``;

export const BaseMushroom = styled(BaseImg).attrs({
  src: mushroomImage,
})`
  filter: drop-shadow(0 0 2px #808080);
`;

export const BaseScroll = styled(BaseImg).attrs({
  src: scrollImage,
})``;

export const BaseHelmet = styled(BaseImg).attrs({
  src: helmetImage,
})``;

export const BaseBook = styled(BaseImg).attrs({
  src: bookImage,
})``;

export const BasePotion = styled(BaseImg).attrs({
  src: potionImage,
})``;

export const BaseBerries = styled(BaseImg).attrs({
  src: berriesImage,
})`
  filter: drop-shadow(0 0 2px #808080);
`;
