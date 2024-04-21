import * as React from 'react';

import './Navigation.module.scss';
import './Navigation.scss';
import { TaskContentSwitch, TaskContentBackButton, TaskContentCounter } from './components';

const Navigation: React.FC = () => {
  return (
    <div styleName="root">
      <TaskContentBackButton styleName="item" />
      <TaskContentSwitch styleName="item" />
      <TaskContentCounter styleName="item" />
    </div>
  );
};

export default Navigation;
