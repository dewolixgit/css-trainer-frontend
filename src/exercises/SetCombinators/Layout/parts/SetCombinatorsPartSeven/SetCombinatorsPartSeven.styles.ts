import styled from 'styled-components';

import bookImage1 from 'exercises/SetCombinators/Layout/img/book-1.png';
import bookImage2 from 'exercises/SetCombinators/Layout/img/book-2.png';
import bookImage3 from 'exercises/SetCombinators/Layout/img/book-3.png';
import boxImage from 'exercises/SetCombinators/Layout/img/box-plain.png';
import backgroundImage from 'exercises/img/background-plank-wood.jpg';
import { mixin } from 'exercises/styles';
import { SetLayoutRoot } from 'exercises/ui';

export const Root = styled(SetLayoutRoot).attrs({
  $backgroundImage: backgroundImage,
})`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Box = styled.div`
  flex-shrink: 0;
  position: relative;
  box-sizing: border-box;

  padding: 50px 40px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${mixin.square('250px')};

  ${mixin.backgroundImageContain(boxImage)};
`;

export const bookSize = {
  large: 114,
  medium: 80,
};

export const Book = styled.img.attrs<{ $key: 1 | 2 | 3; $size: 'large' | 'medium' }>(
  ({ $key }) => ({
    src: (() => {
      switch ($key) {
        case 1:
          return bookImage1;
        case 2:
          return bookImage2;
        case 3:
        default:
          return bookImage3;
      }
    })(),
  })
)`
  flex-shrink: 0;

  object-fit: contain;
  object-position: center;

  ${({ $size }) => mixin.square(`${bookSize[$size]}px`)};

  ${mixin.animate(['transform'])};
`;
