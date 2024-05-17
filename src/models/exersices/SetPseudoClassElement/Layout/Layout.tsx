import * as React from 'react';

import SetPseudoClassElementPartOne from 'models/exersices/SetPseudoClassElement/Layout/parts/SetPseudoClassElementPartOne/SetPseudoClassElementPartOne';
import { SetPseudoClassElementPartThree } from 'models/exersices/SetPseudoClassElement/Layout/parts/SetPseudoClassElementPartThree';
import SetPseudoClassElementPartTwo from 'models/exersices/SetPseudoClassElement/Layout/parts/SetPseudoClassElementPartTwo/SetPseudoClassElementPartTwo';
import { SetPseudoClassElementUtils } from 'models/exersices/SetPseudoClassElement/utils';
import { TaskIds } from 'models/exersices/types';

type Props = {
  taskId: TaskIds;
};

const Layout: React.FC<Props> = ({ taskId }) => {
  if (SetPseudoClassElementUtils.isPartOne(taskId)) {
    return <SetPseudoClassElementPartOne />;
  }

  if (SetPseudoClassElementUtils.isPartTwo(taskId)) {
    return <SetPseudoClassElementPartTwo />;
  }

  if (SetPseudoClassElementUtils.isPartThree(taskId)) {
    return <SetPseudoClassElementPartThree taskId={taskId} />;
  }

  return null;
};

export default Layout;
