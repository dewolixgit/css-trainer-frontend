import * as React from 'react';

import {
  ITaskCheckerPlugin,
  ITaskStylistPlugin,
  TaskCheckerPluginParams,
  TaskStylistPluginParams,
} from 'config/store/exerciseSetPageStore/taskStylist';
import Layout from 'models/exersices/Set1/Layout/Layout';
import {
  Task1CheckerPlugin,
  Task1StylistPlugin,
  Task2CheckerPlugin,
  Task2StylistPlugin,
  Task4CheckerPlugin,
  Task4StylistPlugin,
  Task3CheckerPlugin,
  Task3StylistPlugin,
} from 'models/exersices/Set1/plugins';

export const TASKS: Record<
  number,
  {
    id: number;
    layout: React.ReactNode;
    StylistPlugin: new (params: TaskStylistPluginParams) => ITaskStylistPlugin;
    CheckerPlugin: new (params: TaskCheckerPluginParams) => ITaskCheckerPlugin;
  }
> = {
  [1]: {
    id: 1,
    layout: <Layout taskId={1} />,
    StylistPlugin: Task1StylistPlugin,
    CheckerPlugin: Task1CheckerPlugin,
  },
  [2]: {
    id: 2,
    layout: <Layout taskId={2} />,
    StylistPlugin: Task2StylistPlugin,
    CheckerPlugin: Task2CheckerPlugin,
  },
  [3]: {
    id: 3,
    layout: <Layout taskId={3} />,
    StylistPlugin: Task3StylistPlugin,
    CheckerPlugin: Task3CheckerPlugin,
  },
  [4]: {
    id: 4,
    layout: <Layout taskId={4} />,
    StylistPlugin: Task4StylistPlugin,
    CheckerPlugin: Task4CheckerPlugin,
  },
};
