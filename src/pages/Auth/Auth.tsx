import * as React from 'react';

import { Text } from 'components/ui';
import { FontWeightEnum } from 'config/fonts';
import { SizeEnum } from 'config/size';

const Auth: React.FC = () => {
  return (
    <div>
      <Text tag="h1" weight={FontWeightEnum.medium} size={SizeEnum.m}>
        Авторизация
      </Text>
    </div>
  );
};

export default Auth;
