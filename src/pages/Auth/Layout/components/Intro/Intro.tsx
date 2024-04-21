import { observer } from 'mobx-react';
import * as React from 'react';

import { Text, Title as TitleText } from 'components/ui';
import { FontWeightEnum } from 'config/fonts';
import { SizeEnum } from 'config/size';
import { AuthPageMode } from 'config/store/authPageStore';
import { t } from 'config/translation';
import { useAuthPageStore } from 'stores/locals/AuthPageStore';

import './Intro.module.scss';

const Intro: React.FC = () => {
  const store = useAuthPageStore();

  const onClickButton = React.useCallback(() => {
    if (store.meta.isLoading) {
      return;
    }

    if (store.mode.value === AuthPageMode.registration) {
      store.changeMode(AuthPageMode.login);

      return;
    }

    store.changeMode(AuthPageMode.registration);
  }, [store]);

  const isRegistration = store.mode.value === AuthPageMode.registration;

  return (
    <div styleName="root">
      <TitleText
        styleName="title"
        tag="h1"
        weight={FontWeightEnum.medium}
        size={SizeEnum.xl}
        textAlign="center"
      >
        {isRegistration ? t().pages.auth.registration.title : t().pages.auth.login.title}
      </TitleText>
      <Text tag="div" weight={FontWeightEnum.regular} size={SizeEnum.xs}>
        {isRegistration
          ? t().pages.auth.registration.loginSlogan
          : t().pages.auth.login.createProfileSlogan}{' '}
        <button styleName="link" onClick={onClickButton}>
          {isRegistration
            ? t().pages.auth.registration.loginAction
            : t().pages.auth.login.createProfileAction}
        </button>
      </Text>
    </div>
  );
};

export default observer(Intro);
