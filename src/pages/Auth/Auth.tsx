import * as React from 'react';

import { Text } from 'components/Text';
import { FontWeightEnum } from 'entities/fonts';
import { SizeEnum } from 'entities/size';

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
