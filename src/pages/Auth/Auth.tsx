import * as React from 'react';

import { Text, Input } from 'components/ui';
import { FontWeightEnum } from 'config/fonts';
import { SizeEnum } from 'config/size';

const Auth: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: 'lightgreen',
      }}
    >
      <Text tag="h1" weight={FontWeightEnum.medium} size={SizeEnum.m}>
        Авторизация
      </Text>
      <Input label="Lorem ipsum" stretched />
      <Input label="Lorem ipsum" />
    </div>
  );
};

export default Auth;
