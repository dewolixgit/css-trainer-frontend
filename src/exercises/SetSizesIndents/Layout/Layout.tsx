import * as React from 'react';

import { SetSizesIndentsUtils } from '../utils';

import { FirstPart } from './parts/FirstPart';
import { SecondPart } from './parts/SecondPart';

type Props = {
  taskId: number;
};

const Layout: React.FC<Props> = ({ taskId }) => {
  if (SetSizesIndentsUtils.isFirstPart(taskId)) {
    return <FirstPart taskId={taskId} />;
  }

  return <SecondPart taskId={taskId} />;
};

export default Layout;
