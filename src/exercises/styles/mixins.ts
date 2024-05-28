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

export const mixin = {
  square,
  animate,
  backgroundImageContain,
};
