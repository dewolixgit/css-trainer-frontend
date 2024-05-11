import { action, computed, makeObservable } from 'mobx';

import {
  ITaskProgressModel,
  TaskSavePayloadOnComplete,
} from 'config/store/exerciseSetPageStore/taskProgressModel';
import {
  IExerciseSetPageStore,
  ITasksSetStatusModel,
  ITaskTheoryModel,
} from 'config/store/exerciseSetPageStore/types';
import { TasksSetSectionEnum } from 'entities/tasksSet';
import { FieldModel } from 'models/FieldModel';
import { MetaModel } from 'models/MetaModel';
import { AchievementsController } from 'stores/locals/ExerciseSetPageStore/AchievementsController';

type PrivateFields = '_onTaskComplete';

export abstract class AbstractExerciseSetPageStore implements IExerciseSetPageStore {
  readonly section = new FieldModel(TasksSetSectionEnum.theory);
  readonly taskProgress = new FieldModel<ITaskProgressModel | null>(null);
  readonly taskTheory = new FieldModel<ITaskTheoryModel | null>(null);
  readonly tasksSetStatus = new FieldModel<ITasksSetStatusModel | null>(null);
  readonly achievementsController = new AchievementsController();

  readonly meta = new MetaModel();
  readonly inputSavingMeta = new MetaModel();

  constructor() {
    makeObservable<this, PrivateFields>(this, {
      currentTaskInSet: computed,
      currentTaskIndexInSet: computed,

      _onTaskComplete: action.bound,
    });
  }

  get currentTaskInSet() {
    return (
      this.tasksSetStatus.value?.tasksStatus.getEntityByKey(
        this.taskProgress.value?.task.id ?? -1
      ) ?? null
    );
  }

  get currentTaskIndexInSet() {
    return (
      this.tasksSetStatus.value?.tasksStatus.getEntityAndIndex(
        this.taskProgress.value?.task.id ?? -1
      )?.index ?? null
    );
  }

  get isCurrentTaskFirst(): boolean {
    return (
      this.taskProgress.value?.task.id ===
      this.tasksSetStatus.value?.tasksStatus.firstEntity?.data.id
    );
  }

  get isCurrentTaskLast(): boolean {
    return (
      this.taskProgress.value?.task.id ===
      this.tasksSetStatus.value?.tasksStatus.lastEntity?.data.id
    );
  }

  abstract init(params: { tasksSetId: number }): Promise<void>;

  abstract reload(params: { taskId: number }): Promise<void>;

  protected abstract _onTaskComplete({
    completed,
    tasksStatus,
    achievements,
  }: TaskSavePayloadOnComplete): Promise<void>;

  async goToNextTask(): Promise<void> {
    const tasksSetStatus = this.tasksSetStatus.value;
    const taskProgress = this.taskProgress.value;

    if (!tasksSetStatus || !taskProgress || this.isCurrentTaskLast) {
      return;
    }

    const nextTask = tasksSetStatus?.getNextTask(taskProgress?.task.id);

    if (!nextTask) {
      return;
    }

    await this.reload({ taskId: nextTask.data.id });
  }

  async goToPreviousTask(): Promise<void> {
    const tasksSetStatus = this.tasksSetStatus.value;
    const taskProgress = this.taskProgress.value;

    if (!tasksSetStatus || !taskProgress || this.isCurrentTaskFirst) {
      return;
    }

    const previousTask = tasksSetStatus?.getPreviousTask(taskProgress?.task.id);

    if (!previousTask) {
      return;
    }

    await this.reload({ taskId: previousTask.data.id });
  }

  destroy() {
    this.tasksSetStatus.value?.destroy();
    this.taskProgress.value?.destroy();
    this.taskTheory.value?.destroy();
    this.achievementsController.destroy();
  }
}
