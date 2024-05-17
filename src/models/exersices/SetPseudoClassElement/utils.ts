import { TaskIds } from 'models/exersices/types';

export class SetPseudoClassElementUtils {
  static CLASSNAMES = {
    partOne: {
      table: 'table',
    },
    partTwo: {
      scroll: 'scroll',
      red: 'red',
      green: 'green',
      blue: 'blue',
      plain: 'plain',
    },
    partThree: {
      scroll: 'scroll',
    },
  };

  static ELEMENTS_TAGS = {
    root: 'div',
    partOne: {
      table: 'img',
    },
    partTwo: {
      scroll: 'div',
    },
    partThree: {
      scroll: 'div',
    },
  };

  static PART_ONE_TASKS = [TaskIds.task11];
  static PART_TWO_TASKS = [TaskIds.task12, TaskIds.task13, TaskIds.task14];
  static PART_THREE_TASKS = [TaskIds.task15, TaskIds.task16, TaskIds.task17];

  static isPartOne(taskId: TaskIds): boolean {
    return SetPseudoClassElementUtils.PART_ONE_TASKS.includes(taskId);
  }

  static isPartTwo(taskId: TaskIds): boolean {
    return SetPseudoClassElementUtils.PART_TWO_TASKS.includes(taskId);
  }

  static isPartThree(taskId: TaskIds): boolean {
    return SetPseudoClassElementUtils.PART_THREE_TASKS.includes(taskId);
  }

  static isTaskPassed(params: { currentTaskId: number; taskToCompare: number }) {
    const order = {
      [TaskIds.task11]: 1,
      [TaskIds.task12]: 2,
      [TaskIds.task13]: 3,
      [TaskIds.task14]: 4,
      [TaskIds.task15]: 5,
      [TaskIds.task16]: 6,
      [TaskIds.task17]: 7,
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
