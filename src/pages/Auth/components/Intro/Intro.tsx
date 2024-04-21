import * as React from 'react';

import { Text, Title as TitleText } from 'components/ui';
import { FontWeightEnum } from 'config/fonts';
import { SizeEnum } from 'config/size';
import { t } from 'config/translation';

import './Intro.module.scss';

const Intro: React.FC = () => {
  return (
    <div styleName="root">
      <TitleText
        styleName="title"
        tag="h1"
        weight={FontWeightEnum.medium}
        size={SizeEnum.xl}
        textAlign="center"
      >
        {t().pages.auth.registration.title}
      </TitleText>
      <Text tag="div" weight={FontWeightEnum.regular} size={SizeEnum.m}>
        {t().pages.auth.registration.loginSlogan}{' '}
        <button styleName="link">{t().pages.auth.registration.loginAction}</button>
      </Text>
    </div>
  );
};

export default Intro;
