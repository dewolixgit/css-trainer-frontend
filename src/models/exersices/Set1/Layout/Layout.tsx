import * as React from 'react';

import { SET_1_CLASSNAMES } from 'models/exersices/Set1/config';

import * as s from './Layout.styles';
import crowds from './img/crowds.png';
import lamp from './img/lamp.png';
import warrior from './img/warrior.png';

type Props = {
  taskId: number;
};

const Layout: React.FC<Props> = ({ taskId }) => {
  const isTask1 = taskId === 1;
  const isTask2 = taskId === 2;
  // const isTask3 = taskId === 3;
  const isTask4 = taskId === 4;

  return (
    <s.Root className={SET_1_CLASSNAMES.background} day={!isTask1 && !isTask2}>
      <s.Text pale={taskId === 1} className={SET_1_CLASSNAMES.text}>
        Danger!
      </s.Text>
      <s.WarriorImg
        moved={isTask4}
        className={SET_1_CLASSNAMES.mainCharacter}
        src={warrior}
        alt="Главный герой"
      />
      <s.CrowdsImg
        moved={isTask4}
        className={SET_1_CLASSNAMES.crowds}
        src={crowds}
        alt="Толпа людей"
      />
      <s.Lamp
        visible={isTask4}
        className={SET_1_CLASSNAMES.lamp}
        src={lamp}
        alt="Лампочка, символизирующая внезапно пришедшую идею"
      />
    </s.Root>
  );
};

export default Layout;
