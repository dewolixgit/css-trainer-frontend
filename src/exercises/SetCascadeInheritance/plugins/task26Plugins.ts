import { InputItemsExtractor } from 'config/store/exerciseSetPageStore/taskProgressModel';
import {
  ITaskCheckerPlugin,
  ITaskStylistPlugin,
} from 'config/store/exerciseSetPageStore/taskStylist';
import { IInputFlowDnd } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowDnd';
import { InputItemTypeEnum } from 'entities/contentFlowBlock/inputItem';
import { BaseTaskCheckerPlugin } from 'models/taskCheckerPlugin';
import { BaseTaskStylistPlugin } from 'models/taskStylistPlugin';

import { SetCascadeInheritance } from '../utils';

export const task26InputItemsExtractor: InputItemsExtractor = (inputs) => {
  const input = inputs[0] as IInputFlowDnd;

  return [
    {
      id: input.id,
      type: InputItemTypeEnum.inputFlowDnd,
      order: input.options.map((option) => option.id),
    },
  ];
};

enum DndOptionsIds {
  first = 4,
  second = 5,
  third = 6,
}

const dndOptionsCode: Record<DndOptionsIds, string> = {
  // to jar
  [DndOptionsIds.first]: `
    .${SetCascadeInheritance.CLASSNAMES.partSecond.mushroom} {
      top: 600px;
      left: 140px;
    }
  `,
  // to bag
  [DndOptionsIds.second]: `
    .${SetCascadeInheritance.CLASSNAMES.partSecond.mushroom} {
      top: 810px;
      left: 500px;
    }
  `,
  // to bin
  [DndOptionsIds.third]: `
    .${SetCascadeInheritance.CLASSNAMES.partSecond.mushroom} {
      top: 600px;
      left: 870px;
    }
  `,
};

export class Task26StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    const order = task26InputItemsExtractor(this._inputs)[0].order ?? [];

    return order.map((id) => dndOptionsCode[id as DndOptionsIds] ?? '').join('\n');
  }
}

export class Task26CheckerPlugin extends BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  check(): boolean {
    const order = task26InputItemsExtractor(this._inputs)[0].order ?? [];

    return order[order.length - 1] === DndOptionsIds.first;
  }
}
