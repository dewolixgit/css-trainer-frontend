import * as React from 'react';

import { InputItemsExtractor } from 'config/store/exerciseSetPageStore/taskProgressModel';
import {
  ITaskCheckerPlugin,
  ITaskStylistPlugin,
  TaskCheckerPluginParams,
  TaskStylistPluginParams,
} from 'config/store/exerciseSetPageStore/taskStylist';
import { Layout as Set1Layout } from 'models/exersices/Set1/Layout';
import {
  Task1CheckerPlugin,
  task1InputItemsExtractor,
  Task1StylistPlugin,
  Task2CheckerPlugin,
  task2InputItemsExtractor,
  Task2StylistPlugin,
  Task3CheckerPlugin,
  task3InputItemsExtractor,
  Task3StylistPlugin,
  Task4CheckerPlugin,
  task4InputItemsExtractor,
  Task4StylistPlugin,
} from 'models/exersices/Set1/plugins';
import { Layout as SetPseudoClassElementLayout } from 'models/exersices/SetPseudoClassElement/Layout';
import {
  Task11CheckerPlugin,
  task11InputItemsExtractor,
  Task11StylistPlugin,
} from 'models/exersices/SetPseudoClassElement/plugins';
import {
  Task12CheckerPlugin,
  task12InputItemsExtractor,
  Task12StylistPlugin,
} from 'models/exersices/SetPseudoClassElement/plugins/task12Plugins';
import {
  Task13CheckerPlugin,
  task13InputItemsExtractor,
  Task13StylistPlugin,
} from 'models/exersices/SetPseudoClassElement/plugins/task13Plugins';
import {
  Task14CheckerPlugin,
  task14InputItemsExtractor,
  Task14StylistPlugin,
} from 'models/exersices/SetPseudoClassElement/plugins/task14Plugins';
import {
  Task15CheckerPlugin,
  task15InputItemsExtractor,
  Task15StylistPlugin,
} from 'models/exersices/SetPseudoClassElement/plugins/task15Plugins';
import {
  Task16CheckerPlugin,
  task16InputItemsExtractor,
  Task16StylistPlugin,
} from 'models/exersices/SetPseudoClassElement/plugins/task16Plugins';
import {
  Task17CheckerPlugin,
  task17InputItemsExtractor,
  Task17StylistPlugin,
} from 'models/exersices/SetPseudoClassElement/plugins/task17Plugins';
import { Layout as SetSelectorsLayout } from 'models/exersices/SetSelectors/Layout';
import {
  Task10CheckerPlugin,
  task10InputItemsExtractor,
  Task10StylistPlugin,
} from 'models/exersices/SetSelectors/plugins/task10Plugins';
import {
  Task5CheckerPlugin,
  task5InputItemsExtractor,
  Task5StylistPlugin,
} from 'models/exersices/SetSelectors/plugins/task5Plugins';
import {
  Task6CheckerPlugin,
  task6InputItemsExtractor,
  Task6StylistPlugin,
} from 'models/exersices/SetSelectors/plugins/task6Plugins';
import {
  Task7CheckerPlugin,
  task7InputItemsExtractor,
  Task7StylistPlugin,
} from 'models/exersices/SetSelectors/plugins/task7Plugins';
import {
  Task8CheckerPlugin,
  task8InputItemsExtractor,
  Task8StylistPlugin,
} from 'models/exersices/SetSelectors/plugins/task8Plugins';
import {
  Task9CheckerPlugin,
  task9InputItemsExtractor,
  Task9StylistPlugin,
} from 'models/exersices/SetSelectors/plugins/task9Plugins';
import { TaskIds } from 'models/exersices/types';

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
  [TaskIds.task1]: {
    id: TaskIds.task1,
    layout: <Set1Layout taskId={TaskIds.task1} />,
    StylistPlugin: Task1StylistPlugin,
    CheckerPlugin: Task1CheckerPlugin,
    inputItemsExtractor: task1InputItemsExtractor,
  },
  [TaskIds.task2]: {
    id: TaskIds.task2,
    layout: <Set1Layout taskId={TaskIds.task2} />,
    StylistPlugin: Task2StylistPlugin,
    CheckerPlugin: Task2CheckerPlugin,
    inputItemsExtractor: task2InputItemsExtractor,
  },
  [TaskIds.task3]: {
    id: TaskIds.task3,
    layout: <Set1Layout taskId={TaskIds.task3} />,
    StylistPlugin: Task3StylistPlugin,
    CheckerPlugin: Task3CheckerPlugin,
    inputItemsExtractor: task3InputItemsExtractor,
  },
  [TaskIds.task4]: {
    id: TaskIds.task4,
    layout: <Set1Layout taskId={TaskIds.task4} />,
    StylistPlugin: Task4StylistPlugin,
    CheckerPlugin: Task4CheckerPlugin,
    inputItemsExtractor: task4InputItemsExtractor,
  },
  [TaskIds.task5]: {
    id: TaskIds.task5,
    layout: <SetSelectorsLayout taskId={TaskIds.task5} />,
    StylistPlugin: Task5StylistPlugin,
    CheckerPlugin: Task5CheckerPlugin,
    inputItemsExtractor: task5InputItemsExtractor,
  },
  [TaskIds.task6]: {
    id: TaskIds.task6,
    layout: <SetSelectorsLayout taskId={TaskIds.task6} />,
    StylistPlugin: Task6StylistPlugin,
    CheckerPlugin: Task6CheckerPlugin,
    inputItemsExtractor: task6InputItemsExtractor,
  },
  [TaskIds.task7]: {
    id: TaskIds.task7,
    layout: <SetSelectorsLayout taskId={TaskIds.task7} />,
    StylistPlugin: Task7StylistPlugin,
    CheckerPlugin: Task7CheckerPlugin,
    inputItemsExtractor: task7InputItemsExtractor,
  },
  [TaskIds.task8]: {
    id: TaskIds.task8,
    layout: <SetSelectorsLayout taskId={TaskIds.task8} />,
    StylistPlugin: Task8StylistPlugin,
    CheckerPlugin: Task8CheckerPlugin,
    inputItemsExtractor: task8InputItemsExtractor,
  },
  [TaskIds.task9]: {
    id: TaskIds.task9,
    layout: <SetSelectorsLayout taskId={TaskIds.task9} />,
    StylistPlugin: Task9StylistPlugin,
    CheckerPlugin: Task9CheckerPlugin,
    inputItemsExtractor: task9InputItemsExtractor,
  },
  [TaskIds.task10]: {
    id: TaskIds.task10,
    layout: <SetSelectorsLayout taskId={TaskIds.task10} />,
    StylistPlugin: Task10StylistPlugin,
    CheckerPlugin: Task10CheckerPlugin,
    inputItemsExtractor: task10InputItemsExtractor,
  },
  [TaskIds.task11]: {
    id: TaskIds.task11,
    layout: <SetPseudoClassElementLayout taskId={TaskIds.task11} />,
    StylistPlugin: Task11StylistPlugin,
    CheckerPlugin: Task11CheckerPlugin,
    inputItemsExtractor: task11InputItemsExtractor,
  },
  [TaskIds.task12]: {
    id: TaskIds.task12,
    layout: <SetPseudoClassElementLayout taskId={TaskIds.task12} />,
    StylistPlugin: Task12StylistPlugin,
    CheckerPlugin: Task12CheckerPlugin,
    inputItemsExtractor: task12InputItemsExtractor,
  },
  [TaskIds.task13]: {
    id: TaskIds.task13,
    layout: <SetPseudoClassElementLayout taskId={TaskIds.task13} />,
    StylistPlugin: Task13StylistPlugin,
    CheckerPlugin: Task13CheckerPlugin,
    inputItemsExtractor: task13InputItemsExtractor,
  },
  [TaskIds.task14]: {
    id: TaskIds.task14,
    layout: <SetPseudoClassElementLayout taskId={TaskIds.task14} />,
    StylistPlugin: Task14StylistPlugin,
    CheckerPlugin: Task14CheckerPlugin,
    inputItemsExtractor: task14InputItemsExtractor,
  },
  [TaskIds.task15]: {
    id: TaskIds.task15,
    layout: <SetPseudoClassElementLayout taskId={TaskIds.task15} />,
    StylistPlugin: Task15StylistPlugin,
    CheckerPlugin: Task15CheckerPlugin,
    inputItemsExtractor: task15InputItemsExtractor,
  },
  [TaskIds.task16]: {
    id: TaskIds.task16,
    layout: <SetPseudoClassElementLayout taskId={TaskIds.task16} />,
    StylistPlugin: Task16StylistPlugin,
    CheckerPlugin: Task16CheckerPlugin,
    inputItemsExtractor: task16InputItemsExtractor,
  },
  [TaskIds.task17]: {
    id: TaskIds.task17,
    layout: <SetPseudoClassElementLayout taskId={TaskIds.task17} />,
    StylistPlugin: Task17StylistPlugin,
    CheckerPlugin: Task17CheckerPlugin,
    inputItemsExtractor: task17InputItemsExtractor,
  },
};
