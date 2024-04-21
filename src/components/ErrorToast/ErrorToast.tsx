import * as Toast from '@radix-ui/react-toast';
import * as React from 'react';

import { DismissButton, Title } from 'components/ui';
import { BaseToast, BaseToastProps } from 'components/ui/BaseToast';
import { DismissButtonColor, DismissButtonSize } from 'config/components/dismiss';
import { FontWeightEnum } from 'config/fonts';
import { SizeEnum } from 'config/size';
import ErrorExclamationPointSvg from 'img/svgComponents/error-exclamation-point.c.svg';

import './ErrorToast.module.scss';

type Props = BaseToastProps & {
  text?: string;
};

const ErrorToast: React.FC<Props> = ({ text, className, ...props }) => {
  return (
    <BaseToast styleName="root" className={className} {...props}>
      <ErrorExclamationPointSvg styleName="icon" />
      <Title styleName="text" tag="h5" size={SizeEnum.xxxs} weight={FontWeightEnum.medium}>
        {text}
      </Title>
      <Toast.Close asChild>
        <DismissButton
          styleName="dismiss"
          size={DismissButtonSize.m}
          color={DismissButtonColor.secondary}
        />
      </Toast.Close>
    </BaseToast>
  );
};

export default React.memo(ErrorToast);
