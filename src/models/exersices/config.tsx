import * as React from 'react';

import {
  ITaskStylistPlugin,
  TaskStylistPluginParams,
} from 'config/store/exerciseSetPageStore/taskStylist';
import Layout from 'models/exersices/Set1/Layout/Layout';
import { Task1StylistPlugin, Task2StylistPlugin } from 'models/exersices/Set1/stylistPlugins';
import { StubTaskStylistPlugin } from 'models/taskStylistPlugin';

export const TASKS: Record<
  number,
  {
    id: number;
    layout: React.ReactNode;
    StylistPlugin: new (params: TaskStylistPluginParams) => ITaskStylistPlugin;
  }
> = {
  [1]: {
    id: 1,
    layout: <Layout taskId={1} />,
    StylistPlugin: Task1StylistPlugin,
  },
  [2]: {
    id: 2,
    layout: <Layout taskId={2} />,
    StylistPlugin: Task2StylistPlugin,
  },
  [3]: {
    id: 3,
    layout: <Layout taskId={3} />,
    StylistPlugin: StubTaskStylistPlugin,
  },
  [4]: {
    id: 4,
    layout: <Layout taskId={4} />,
    StylistPlugin: StubTaskStylistPlugin,
  },
};
