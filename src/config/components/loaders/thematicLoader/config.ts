import SwordSvg from 'img/svgComponents/sword-vertical.c.svg';
import { SvgrComponent } from 'types/props';

import { ThematicLoaderTypeEnum } from './types';

export const thematicLoaderTypeSVGMap: Record<ThematicLoaderTypeEnum, SvgrComponent> = {
  [ThematicLoaderTypeEnum.sword]: SwordSvg,
};
