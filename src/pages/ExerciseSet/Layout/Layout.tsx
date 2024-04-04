import * as React from 'react';

import './Layout.module.scss';
import { TaskContent } from './components';

const Layout = () => {
  return (
    <div styleName="root">
      <div styleName="content">
        <TaskContent />
      </div>
      <div styleName="game-field"></div>
    </div>
  );
};

export default Layout;
