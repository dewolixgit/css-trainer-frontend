import styled, { css } from 'styled-components';

import backgroundImage from 'exercises/SetPseudoClassElement/Layout/img/background.jpg';
import plainScrollImage from 'exercises/SetPseudoClassElement/Layout/img/plain-scroll.svg';
import { SetLayoutRoot } from 'exercises/ui';

import blueScrollImage from './img/blue-scroll.svg';
import greenScrollImage from './img/green-scroll.svg';
import redScrollImage from './img/red-scroll.svg';

export const Root = styled(SetLayoutRoot)`
  background: url('${backgroundImage}') no-repeat center / cover;
`;

export const Scroll = styled.div<{
  $color: 'red' | 'blue' | 'green' | 'plain';
  $key: 1 | 2 | 3 | 4 | 5 | 6 | 7;
}>`
  position: absolute;
  box-sizing: border-box;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  width: 280px;
  height: 280px;
  padding: 50px 80px 60px 80px;

  font-size: 16px;

  overflow: hidden;

  transition: filter 0.4s ease;

  ${({ $color }) => {
    switch ($color) {
      case 'red':
        return css`
          color: #fff;
          background-image: url('${redScrollImage}');
        `;
      case 'blue':
        return css`
          color: #fff;
          background-image: url('${blueScrollImage}');
        `;
      case 'green':
        return css`
          color: #fff;
          background-image: url('${greenScrollImage}');
        `;
      default:
      case 'plain':
        return css`
          background-image: url('${plainScrollImage}');
        `;
    }
  }}

  ${({ $key }) => {
    switch ($key) {
      case 1:
        return css`
          top: 90px;
          left: 30px;
        `;
      case 2:
        return css`
          top: 40px;
          left: 360px;
        `;
      case 3:
        return css`
          top: 130px;
          left: 680px;
        `;
      case 4:
        return css`
          top: 400px;
          left: 180px;
        `;
      case 5:
        return css`
          top: 400px;
          left: 520px;
        `;
      case 6:
        return css`
          top: 700px;
          left: 90px;
        `;
      default:
      case 7:
        return css`
          top: 660px;
          left: 650px;
        `;
    }
  }}
`;
