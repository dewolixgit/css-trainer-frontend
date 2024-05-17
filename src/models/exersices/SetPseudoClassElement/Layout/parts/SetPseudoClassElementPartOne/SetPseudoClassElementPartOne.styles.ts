import styled, { css } from 'styled-components';

import { SetLayoutRoot } from 'models/exersices/ui';

import backgroundImage from './img/background.jpg';
import tableOneImage from './img/table-one.png';
import tableTwoImage from './img/table-two.png';

export const Root = styled(SetLayoutRoot)`
  background: url(${backgroundImage}) no-repeat center / cover;
`;

export const Table = styled.img.attrs<{ $key: 1 | 2 | 3 | 4; $tableType: 1 | 2; href?: string }>(
  ({ $tableType }) => ({
    src: $tableType === 1 ? tableOneImage : tableTwoImage,
  })
)`
  position: absolute;
  display: block;

  width: 312px;
  height: 312px;

  object-position: center;
  object-fit: contain;

  transition: filter 0.4s ease;

  ${({ $key }) => {
    switch ($key) {
      case 1:
        return css`
          bottom: 100px;
          left: 90px;
          transform: scale(0.9);
        `;
      case 2:
        return css`
          bottom: 0;
          left: 260px;
          z-index: 1;
        `;
      case 3:
        return css`
          bottom: 100px;
          left: 450px;
          transform: scale(-0.8, 0.8);
        `;
      default:
      case 4:
        return css`
          bottom: 0;
          left: 660px;
        `;
    }
  }}
`;
