import { TaskIds } from '../types';

export class SetSizesIndentsUtils {
  static CLASSNAMES = {
    firstPart: {
      tent: 'tent',
      campfire: 'campfire',
      box: 'box',
      blanket: 'blanket',
    },
    secondPart: {
      blanket: 'blanket',
    },
  };

  static VALUES = {
    secondPart: {
      boxSizePx: 600,
      boxVerticalPaddingPx: 36,
      boxHorizontalPaddingPx: 30,
    },
  };

  static TASK_ORDER_TO_ID = {
    [1]: TaskIds.task36,
    [2]: TaskIds.task37,
    [3]: TaskIds.task38,
    [4]: TaskIds.task39,
    [5]: TaskIds.task40,
    [6]: TaskIds.task41,
  };

  static FIRST_PART_TASKS = [TaskIds.task36, TaskIds.task37, TaskIds.task38, TaskIds.task39];

  static isFirstPart(taskId: number): boolean {
    return this.FIRST_PART_TASKS.includes(taskId);
  }

  static isTaskPassed(params: { currentTaskId: number; taskToCompare: number }) {
    const order = {
      [TaskIds.task36]: 1,
      [TaskIds.task37]: 2,
      [TaskIds.task38]: 3,
      [TaskIds.task39]: 4,
      [TaskIds.task40]: 5,
      [TaskIds.task41]: 6,
    };

    const currentTaskOrder = order[params.currentTaskId as keyof typeof order];
    const taskToCompareOrder = order[params.taskToCompare as keyof typeof order];

    return (
      Boolean(currentTaskOrder) &&
      Boolean(taskToCompareOrder) &&
      currentTaskOrder > taskToCompareOrder
    );
  }
}
