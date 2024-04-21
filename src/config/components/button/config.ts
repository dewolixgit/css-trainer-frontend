import { ButtonSizeUnion } from 'config/components/button';
import { LoaderSizeEnum } from 'config/components/loaders';
import { SizeEnum } from 'config/size';

export const BUTTON_LOADER_SIZE: Record<ButtonSizeUnion, LoaderSizeEnum> = {
  [SizeEnum.m]: LoaderSizeEnum.l,
};
