import { css, CSSProperties } from 'styled-components';

const square = (size: string) => css`
  width: ${size};
  height: ${size};
`;

const animate = (
  properties: CSSProperties['transform'][],
  { durationS = 0.4 }: { durationS?: number } = {}
) => css`
  transition: ${properties.map((property) => `${property} ${durationS}s ease`).join(',')};
`;

const backgroundImageContain = (image: string) => css`
  background-image: url('${image}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const centerX = css`
  left: 50%;
  transform: translateX(-50%);
`;

const centerY = css`
  top: 50%;
  transform: translateY(-50%);
`;

const centerXY = css`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const mixin = {
  square,
  animate,
  backgroundImageContain,
  centerXY,
  centerX,
  centerY,
};
