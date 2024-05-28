import * as React from 'react';

import { TaskIds } from '../../types';
import { SetCombinatorsUtils } from '../utils';

import {
  SetCombinatorsPartFive,
  SetCombinatorsPartFour,
  SetCombinatorsPartOne,
  SetCombinatorsPartSeven,
  SetCombinatorsPartSix,
  SetCombinatorsPartThree,
  SetCombinatorsPartTwo,
} from './parts';

type Props = {
  taskId: TaskIds;
};

const Layout: React.FC<Props> = ({ taskId }) => {
  switch (SetCombinatorsUtils.getOrderOfTaskById(taskId)) {
    case 1:
      return <SetCombinatorsPartOne />;
    case 2:
      return <SetCombinatorsPartTwo />;
    case 3:
      return <SetCombinatorsPartThree />;
    case 4:
      return <SetCombinatorsPartFour />;
    case 5:
      return <SetCombinatorsPartFive />;
    case 6:
      return <SetCombinatorsPartSix />;
    case 7:
      return <SetCombinatorsPartSeven />;
    default:
      return null;
  }
};

export default React.memo(Layout);
