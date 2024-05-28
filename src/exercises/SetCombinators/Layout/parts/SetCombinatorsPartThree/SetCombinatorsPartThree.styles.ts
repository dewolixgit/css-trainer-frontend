import styled, { css } from 'styled-components';

import backgroundImage from 'exercises/SetCombinators/Layout/img/background-nature.jpg';
import { SetCombinatorsUtils } from 'exercises/SetCombinators/utils';
import blueScrollImage from 'exercises/img/blue-scroll.svg';
import greenScrollImage from 'exercises/img/green-scroll.svg';
import redScrollImage from 'exercises/img/red-scroll.svg';
import { mixin } from 'exercises/styles';
import { SetLayoutRoot } from 'exercises/ui';

export const Root = styled(SetLayoutRoot).attrs({
  $backgroundImage: backgroundImage,
  $overlayOpaque: 0.3,
})``;

const scrollSize = 240;

export const Scroll = styled.div<{ $key: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 }>`
  position: absolute;
  box-sizing: border-box;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  overflow: hidden;

  ${mixin.square(`${scrollSize}px`)};
  padding: ${scrollSize * 0.178}px ${scrollSize * 0.286}px ${scrollSize * 0.214}px
    ${scrollSize * 0.286}px;

  font-size: ${scrollSize * 0.056}px;

  ${mixin.animate(['bottom', 'right', 'filter'])};

  &.${SetCombinatorsUtils.CLASSNAMES.partThree.color.blue} {
    background-image: url(${blueScrollImage});
    color: #fff;
  }

  &.${SetCombinatorsUtils.CLASSNAMES.partThree.color.green} {
    background-image: url(${greenScrollImage});
    color: #fff;
  }

  &.${SetCombinatorsUtils.CLASSNAMES.partThree.color.red} {
    background-image: url(${redScrollImage});
    color: #fff;
  }

  ${({ $key }) => {
    switch ($key) {
      case 1:
        return css`
          bottom: 720px;
          right: 730px;
          transform: rotate(10deg);
        `;
      case 2:
        return css`
          bottom: 680px;
          right: 510px;
          transform: rotate(15deg);
        `;
      case 3:
        return css`
          bottom: 700px;
          right: 290px;
          transform: rotate(-10deg);
        `;
      case 4:
        return css`
          bottom: 710px;
          right: 60px;
          transform: rotate(15deg);
        `;
      case 5:
        return css`
          bottom: 440px;
          right: 670px;
          transform: rotate(-10deg);
        `;
      case 6:
        return css`
          bottom: 400px;
          right: 440px;
          transform: rotate(-20deg);
        `;
      case 7:
        return css`
          bottom: 440px;
          right: 210px;
          transform: rotate(10deg);
        `;
      case 8:
        return css`
          bottom: 110px;
          right: 720px;
          transform: rotate(-10deg);
        `;
      default:
      case 9:
        return css`
          bottom: 90px;
          right: 480px;
          transform: rotate(15deg);
        `;
    }
  }}
`;
