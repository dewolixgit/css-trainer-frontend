import * as React from 'react';

import { SetCascadeInheritance } from '../utils';

import { FirstPart, SecondPart } from './parts';

type Props = {
  taskId: number;
};

const Layout: React.FC<Props> = ({ taskId }) => {
  if (SetCascadeInheritance.isFirstTask(taskId)) {
    return <FirstPart />;
  }

  return <SecondPart taskId={taskId} />;
};

export default Layout;
