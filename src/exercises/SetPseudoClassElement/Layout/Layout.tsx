import * as React from 'react';

import SetPseudoClassElementPartOne from 'exercises/SetPseudoClassElement/Layout/parts/SetPseudoClassElementPartOne/SetPseudoClassElementPartOne';
import { SetPseudoClassElementPartThree } from 'exercises/SetPseudoClassElement/Layout/parts/SetPseudoClassElementPartThree';
import SetPseudoClassElementPartTwo from 'exercises/SetPseudoClassElement/Layout/parts/SetPseudoClassElementPartTwo/SetPseudoClassElementPartTwo';
import { SetPseudoClassElementUtils } from 'exercises/SetPseudoClassElement/utils';
import { TaskIds } from 'exercises/types';

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
