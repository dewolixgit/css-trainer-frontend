import styled, { css } from 'styled-components';

export const SetLayoutRoot = styled.div<{ $backgroundImage?: string; $overlayOpaque?: number }>`
  position: relative;

  width: 100%;
  height: 100%;

  overflow: hidden;

  ${({ $backgroundImage }) =>
    $backgroundImage &&
    css`
      background: url(${$backgroundImage}) no-repeat center / cover;
    `}

  ${({ $overlayOpaque }) =>
    $overlayOpaque &&
    css`
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background-color: rgba(0, 0, 0, ${$overlayOpaque});
      }
    `}
`;
