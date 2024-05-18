import styled, { css } from 'styled-components';

import backgroundImage from 'exercises/SetPseudoClassElement/Layout/img/background.jpg';
import scrollImage from 'exercises/SetPseudoClassElement/Layout/img/plain-scroll.svg';
import { SetLayoutRoot } from 'exercises/ui';

export const Root = styled(SetLayoutRoot)`
  background: url('${backgroundImage}') no-repeat center / cover;
`;

export const Scroll = styled.div<{ $firstLetterRed: boolean; $withBullets: boolean }>`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 95%;
  height: 95%;

  background: url('${scrollImage}') no-repeat center / contain;
  padding: 102px 269px 187px 234px;

  font-size: 28px;
  font-family: 'Rubik', sans-serif;

  ${({ $firstLetterRed }) =>
    $firstLetterRed &&
    css`
      &::first-letter {
        color: #ff0000;
        font-size: 46px;
        font-weight: 500;
      }
    `}

  ${({ $withBullets }) =>
    $withBullets &&
    css`
      li::before {
        content: '-> ';
        font-weight: 600;
        color: #ff0000;
      }
    `}}

  p:last-child {
    position: relative;
  }

  p:not(:first-child) {
    margin-top: 16px;
  }

  // To not to set high specificity, the rule written here
  li::before {
    content: '*';
  }

  ul {
    list-style: none;
    padding-left: 0;

    li {
      margin-top: 10px;
    }
  }
`;
