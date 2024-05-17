import { TaskIds } from 'models/exersices/types';

type SetTasksIds =
  | TaskIds.task5
  | TaskIds.task6
  | TaskIds.task7
  | TaskIds.task8
  | TaskIds.task9
  | TaskIds.task10;

export class SetSelectorsUtils {
  static isTaskPassed(params: { currentTaskId: number; taskToCompare: number }) {
    const order = {
      [TaskIds.task5]: 1,
      [TaskIds.task6]: 2,
      [TaskIds.task7]: 3,
      [TaskIds.task8]: 4,
      [TaskIds.task9]: 5,
      [TaskIds.task10]: 6,
    };

    const currentTaskOrder = order[params.currentTaskId as SetTasksIds];
    const taskToCompareOrder = order[params.taskToCompare as SetTasksIds];

    return (
      Boolean(currentTaskOrder) &&
      Boolean(taskToCompareOrder) &&
      currentTaskOrder > taskToCompareOrder
    );
  }
}
