/* eslint-disable */
import styled, { css, keyframes } from 'styled-components';

import backgroundImage from './img/background.png';

const bellKeyframes = keyframes`
  0% {
    transform: rotate(30deg);
  }

  25% {
    transform: rotate(40deg);
  }

  50% {
    transform: rotate(30deg);
  }

  75% {
    transform: rotate(40deg);
  }

  100% {
    transform: rotate(30deg);
  }
`;

export const Root = styled.div<{ day?: boolean }>`
  position: relative;

  width: 100%;
  height: 100%;

  background: url(${backgroundImage}) no-repeat center / cover;
  background-color: ${({ day }) => (day ? 'skyblue' : '#ffffe9')};

  overflow: hidden;

  transition: background-color 300ms linear;
`;

export const Text = styled.div<{ pale?: boolean }>`
  position: absolute;
  top: 510px;
  left: 380px;

  font-size: 40px;
  line-height: 1.3;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;

  color: ${({ pale }) => (pale ? '#f5f5f5' : 'red')};
  transform: rotate(10deg);

  transition: color 300ms linear;
`;

export const Img = styled.img`
  object-fit: contain;
  object-position: center;
`;

export const CrowdsImg = styled(Img)<{ moved?: boolean }>`
  position: absolute;
  top: 530px;
  left: 190px;
  width: 500px;
  height: 500px;

  ${({ moved }) =>
    moved &&
    css`
      top: 700px;
      left: 20px;
    `}

  transition: top 300ms linear, left 300ms linear;
`;

export const WarriorImg = styled(Img)<{ moved?: boolean }>`
  position: absolute;
  top: 700px;
  left: 600px;
  width: 450px;
  height: 450px;

  ${({ moved }) =>
    moved &&
    css`
      top: 620px;
      left: 220px;
    `}

  transition: top 300ms linear, left 300ms linear;
`;

export const Lamp = styled(Img)<{ visible?: boolean }>`
  position: absolute;
  top: 560px;
  left: 460px;
  width: 140px;
  height: 140px;

  display: ${({ visible }) => (visible ? 'block' : 'none')};
  opacity: 0.6;

  animation: ${bellKeyframes} 0.8s infinite linear;
  transform-origin: bottom center;

  transition: opacity 300ms linear;
`;
