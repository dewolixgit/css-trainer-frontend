import * as React from 'react';

import { InputItemsExtractor } from 'config/store/exerciseSetPageStore/taskProgressModel';
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
  task1InputItemsExtractor,
  task2InputItemsExtractor,
  task3InputItemsExtractor,
  task4InputItemsExtractor,
} from 'models/exersices/Set1/plugins';

export const TASKS: Record<
  number,
  {
    id: number;
    layout: React.ReactNode;
    StylistPlugin: new (params: TaskStylistPluginParams) => ITaskStylistPlugin;
    CheckerPlugin: new (params: TaskCheckerPluginParams) => ITaskCheckerPlugin;
    inputItemsExtractor: InputItemsExtractor;
  }
> = {
  [1]: {
    id: 1,
    layout: <Layout taskId={1} />,
    StylistPlugin: Task1StylistPlugin,
    CheckerPlugin: Task1CheckerPlugin,
    inputItemsExtractor: task1InputItemsExtractor,
  },
  [2]: {
    id: 2,
    layout: <Layout taskId={2} />,
    StylistPlugin: Task2StylistPlugin,
    CheckerPlugin: Task2CheckerPlugin,
    inputItemsExtractor: task2InputItemsExtractor,
  },
  [3]: {
    id: 3,
    layout: <Layout taskId={3} />,
    StylistPlugin: Task3StylistPlugin,
    CheckerPlugin: Task3CheckerPlugin,
    inputItemsExtractor: task3InputItemsExtractor,
  },
  [4]: {
    id: 4,
    layout: <Layout taskId={4} />,
    StylistPlugin: Task4StylistPlugin,
    CheckerPlugin: Task4CheckerPlugin,
    inputItemsExtractor: task4InputItemsExtractor,
  },
};
