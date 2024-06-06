import styled, { css } from 'styled-components';

import backgroundImage from 'exercises/SetCascadeInheritance/Layout/img/background.jpg';
import bagImage from 'exercises/SetCascadeInheritance/Layout/img/bag-front-view.png';
import purpleBerriesImage from 'exercises/SetCascadeInheritance/Layout/img/berries-purple.svg';
import redToxicBerriesImage from 'exercises/SetCascadeInheritance/Layout/img/berries-red-toxic.svg';
import redBerriesImage from 'exercises/SetCascadeInheritance/Layout/img/berries-red.svg';
import binImage from 'exercises/SetCascadeInheritance/Layout/img/bin.png';
import bucketImage from 'exercises/SetCascadeInheritance/Layout/img/bucket.png';
import cloverImage from 'exercises/SetCascadeInheritance/Layout/img/clover.svg';
import herbsImage from 'exercises/SetCascadeInheritance/Layout/img/healing-herbs.svg';
import jarImage from 'exercises/SetCascadeInheritance/Layout/img/jar.png';
import toxicMushroomImage from 'exercises/SetCascadeInheritance/Layout/img/mushroom-toxic.svg';
import mushroomImage from 'exercises/SetCascadeInheritance/Layout/img/mushroom.svg';
import { SetLayoutRoot } from 'exercises/ui';

import { mixin } from '../../../../styles';

const elementSize = '160px';
const halfElementSize = '80px';
const elementAnimate = mixin.animate(['top', 'left']);

export const Root = styled(SetLayoutRoot).attrs({
  $backgroundImage: backgroundImage,
  $overlayOpaque: 0.4,
})``;

export const Bin = styled.img.attrs({
  src: binImage,
})`
  position: absolute;
  top: 50%;
  right: -40px;
  left: auto;
  bottom: auto;

  object-fit: contain;
  object-position: center;

  transform: rotate(-20deg);

  ${mixin.square('300px')};
`;

export const Bag = styled.img.attrs({
  src: bagImage,
})`
  position: absolute;
  top: 70%;

  object-fit: contain;
  object-position: center;

  ${mixin.square('340px')};
  ${mixin.centerX};
`;

export const Jar = styled.img.attrs({
  src: jarImage,
})`
  position: absolute;
  top: 50%;
  left: -40px;

  object-fit: contain;
  object-position: center;

  transform: rotate(20deg);

  ${mixin.square('300px')};
`;

export const Mushroom = styled.div<{ $key?: 1 | 2 | 3 }>`
  position: absolute;

  ${mixin.backgroundImageContain(mushroomImage)};
  ${mixin.square(elementSize)};
  ${mixin.centerXY};
  ${elementAnimate};

  ${({ $key }) => {
    switch ($key) {
      case 1:
        return css`
          transform: translate(calc(-50% + 20px), calc(-50% + 38px)) rotate(20deg);
        `;
      case 2:
        return css`
          transform: translate(calc(-50% - 38px), calc(-50% - 40px)) rotate(-20deg);
        `;
      case 3:
        return css`
          transform: translate(calc(-50% + 60px), calc(-50% - 80px)) rotate(20deg);
        `;
      default:
        return '';
    }
  }}}
`;

export const ToxicMushroom = styled.div<{ $key?: 1 | 2 | 3 | 4 }>`
  position: absolute;

  ${mixin.backgroundImageContain(toxicMushroomImage)};
  ${mixin.square(elementSize)};
  ${mixin.centerXY};
  ${elementAnimate};

  ${({ $key }) => {
    switch ($key) {
      case 1:
        return css`
          transform: translate(calc(-50% - ${halfElementSize}), calc(-50% + ${halfElementSize}));
        `;
      case 2:
        return css`
          transform: translate(calc(-50% - 90px), calc(-50% + 55px)) rotate(-20deg);
        `;
      case 3:
        return css`
          transform: translate(calc(-50% - 55px), calc(-50% - 88px)) rotate(20deg);
        `;
      case 4:
        return css`
          transform: translate(calc(-50% + 28px), calc(-50% + 88px)) rotate(-10deg);
        `;
      default:
        return '';
    }
  }}}
`;

export const Herbs = styled.img.attrs({ src: herbsImage })<{ $key?: 1 | 2 }>`
  position: absolute;

  object-fit: contain;
  object-position: center;

  ${mixin.square(elementSize)};
  ${mixin.centerXY};
  ${elementAnimate};

  ${({ $key }) => {
    switch ($key) {
      case 1:
        return css`
          transform: translate(calc(-50% + ${halfElementSize}), calc(-50% - ${halfElementSize}));
        `;
      case 2:
        return css`
          transform: translate(calc(-50% - ${halfElementSize}), calc(-50% + ${halfElementSize}));
        `;
      default:
        return '';
    }
  }}
`;

export const Berries = styled.img`
  position: absolute;

  object-fit: contain;
  object-position: center;

  ${mixin.square(elementSize)};
  ${mixin.centerXY};
  ${elementAnimate};
`;

export const RedBerries = styled(Berries).attrs({
  src: redBerriesImage,
})<{ $key?: 1 }>`
  ${({ $key }) =>
    $key &&
    css`
      transform: translate(calc(-50% - ${halfElementSize}), calc(-50% - ${halfElementSize}));
    `};
`;

export const PurpleBerries = styled(Berries).attrs({
  src: purpleBerriesImage,
})<{ $key?: 1 }>`
  ${({ $key }) =>
    $key &&
    css`
      transform: translate(calc(-50% - ${halfElementSize}), calc(-50% - ${halfElementSize}));
    `};
`;

export const RedToxicBerries = styled(RedBerries).attrs({
  src: redToxicBerriesImage,
})<{ $key?: 1 }>`
  ${({ $key }) =>
    $key &&
    css`
      transform: translate(calc(-50% + ${halfElementSize}), calc(-50% + ${halfElementSize}));
    `};
`;

export const Clover = styled.img.attrs({
  src: cloverImage,
})`
  position: absolute;

  object-fit: contain;
  object-position: center;

  ${mixin.square(elementSize)};
  ${mixin.centerXY};
  ${elementAnimate};
`;

export const Bucket = styled.div`
  position: absolute;

  ${mixin.backgroundImageContain(bucketImage)};
  ${mixin.square(elementSize)};
  ${elementAnimate};

  top: 360px;
  right: 150px;

  ${Mushroom} {
    position: fixed;
  }

  ${Mushroom}:nth-child(1) {
    transform: scale(0.4) translate(-90px, -100px) rotate(45deg);
  }

  ${Mushroom}:nth-child(2) {
    transform: scale(0.4) translate(-10px, -130px) rotate(-35deg);
  }

  ${Mushroom}:nth-child(3) {
    transform: scale(0.4) translate(100px, -90px) rotate(-15deg);
  }
`;
