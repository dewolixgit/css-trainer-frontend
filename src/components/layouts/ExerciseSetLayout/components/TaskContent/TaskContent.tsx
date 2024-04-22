import * as React from 'react';

import './TaskContent.module.scss';
import { SmoothOverflow } from 'components/ui';
import { SmoothOverflowModeEnum } from 'config/components/smoothOverflow';

import { TaskCompleteState, Body, Navigation } from './components';

const TaskContent: React.FC = () => {
  return (
    <div styleName="root">
      <div styleName="navigation">
        <Navigation />
      </div>
      <SmoothOverflow
        styleName="smooth-overflow"
        overflowMode={SmoothOverflowModeEnum.top}
        gradientSize={8}
      >
        <Body />
      </SmoothOverflow>
      <TaskCompleteState />
    </div>
  );
};

export default TaskContent;
