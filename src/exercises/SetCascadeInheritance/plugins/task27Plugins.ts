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

export const task27InputItemsExtractor: InputItemsExtractor = (inputs) => {
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
  first = 7,
  second = 8,
  third = 9,
}

const dndOptionsCode: Record<DndOptionsIds, string> = {
  [DndOptionsIds.first]: `
    .${SetCascadeInheritance.CLASSNAMES.partSecond.red} {
      top: 610px;
      left: 180px;
    }
  `,
  [DndOptionsIds.second]: `
    .${SetCascadeInheritance.CLASSNAMES.partSecond.toxic} {
      top: 550px;
      left: 830px;
    }
  `,
  [DndOptionsIds.third]: `
    .${SetCascadeInheritance.CLASSNAMES.partSecond.ground} {
      top: 830px;
      left: 500px;
    }
  `,
};

export class Task27StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    const order = task27InputItemsExtractor(this._inputs)[0].order ?? [];

    return order.map((id) => dndOptionsCode[id as DndOptionsIds] ?? '').join('\n');
  }
}

const solution = [DndOptionsIds.third, DndOptionsIds.first, DndOptionsIds.second];

export class Task27CheckerPlugin extends BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  check(): boolean {
    const order = task27InputItemsExtractor(this._inputs)[0].order ?? [];

    return order.every((option, index) => option === (solution[index] ?? null));
  }
}
