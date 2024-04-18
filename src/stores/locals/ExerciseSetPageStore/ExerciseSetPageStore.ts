import { computed, IReactionDisposer, makeObservable, reaction } from 'mobx';

import {
  IExerciseSetPageStore,
  ITasksSetStatusModel,
  ITaskProgressModel,
  ITaskTheoryModel,
} from 'config/store/exerciseSetPageStore/types';
import { MOCK_ACHIEVEMENTS_API_DATA_MAP } from 'entities/achievement';
import { TaskStatusApi } from 'entities/task';
import { TasksSetSectionEnum } from 'entities/tasksSet';
import { FieldModel } from 'models/FieldModel';
import { MetaModel } from 'models/MetaModel';
import { AchievementsController } from 'stores/locals/ExerciseSetPageStore/AchievementsController';
import { TaskProgressModel } from 'stores/locals/ExerciseSetPageStore/TaskProgressModel';
import { TaskTheoryModel } from 'stores/locals/ExerciseSetPageStore/TaskTheoryModel';
import { TasksSetStatusModel } from 'stores/locals/ExerciseSetPageStore/TasksSetStatusModel';
import { TASKS_MOCK } from 'stores/locals/ExerciseSetPageStore/mock/contentFlowBlocks';
import { INFO_FLOW_BLOCKS_MOCK } from 'stores/locals/ExerciseSetPageStore/mock/infoFlowBlocks';
import { TASKS_SET_STATUS_MOCK } from 'stores/locals/ExerciseSetPageStore/mock/tasksSetStatus';
import { sleep } from 'utils/async';

export class ExerciseSetPageStore implements IExerciseSetPageStore {
  readonly section = new FieldModel(TasksSetSectionEnum.theory);
  readonly taskProgress = new FieldModel<ITaskProgressModel | null>(null);
  readonly taskTheory = new FieldModel<ITaskTheoryModel | null>(null);
  readonly tasksSetStatus = new FieldModel<ITasksSetStatusModel | null>(null);
  readonly achievementsController = new AchievementsController();

  readonly meta = new MetaModel();
  readonly inputSavingMeta = new MetaModel();

  private readonly _disposers: IReactionDisposer[] = [];

  constructor() {
    makeObservable(this, {
      currentTaskInSet: computed,
      currentTaskIndexInSet: computed,
    });

    this._disposers.push(
      reaction(
        () => this.taskProgress.value?.completed,
        () => this._onTaskComplete()
      )
    );
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

  async init(params: { tasksSetId: number }): Promise<void> {
    if (this.meta.isLoading) {
      return;
    }

    if (isNaN(params.tasksSetId)) {
      this.meta.setLoadedErrorMeta();

      return;
    }

    this.meta.setLoadedStartMeta();

    await sleep(1000);

    this.tasksSetStatus.changeValue(TasksSetStatusModel.fromApi(TASKS_SET_STATUS_MOCK));

    this.taskTheory.changeValue(
      TaskTheoryModel.fromApi({
        content: INFO_FLOW_BLOCKS_MOCK,
      })
    );

    this.taskProgress.changeValue(
      TaskProgressModel.fromApi({
        api: {
          // @ts-ignore
          content: TASKS_MOCK[this.tasksSetStatus.value!.tasksStatus.items[1].data.id],
          task: this.tasksSetStatus.value!.tasksStatus.items[1].data,
        },
        completedEarlier: this.tasksSetStatus.value!.tasksStatus.items[1].completed,
      })
    );

    this.meta.setLoadedSuccessMeta();
  }

  async reload(params: { taskId: number }): Promise<void> {
    const tasksSetStatus = this.tasksSetStatus.value;

    if (!this.meta.isLoaded || !tasksSetStatus) {
      return;
    }

    this.meta.setLoadedStartMeta();

    this.section.reset();

    await sleep(1000);

    // Todo: Need api would send:
    // 1. task theory (see INFO_FLOW_BLOCKS_MOCK)
    // 2. tasks statuses (see TASKS_SET_STATUS_MOCK)
    // 3. current task progress, i.e. current task status and content

    this.taskTheory.changeValue(
      TaskTheoryModel.fromApi({
        content: INFO_FLOW_BLOCKS_MOCK,
      })
    );

    this.tasksSetStatus.changeValue(TasksSetStatusModel.fromApi(TASKS_SET_STATUS_MOCK));

    this.taskProgress.changeValue(
      TaskProgressModel.fromApi({
        api: {
          content:
            // @ts-ignore
            TASKS_MOCK[
              this.tasksSetStatus.value!.tasksStatus.getEntityByKey(params.taskId)!.data.id
            ],
          task: this.tasksSetStatus.value!.tasksStatus.getEntityByKey(params.taskId)!.data,
        },
        completedEarlier:
          this.tasksSetStatus.value?.tasksStatus.getEntityByKey(params.taskId)?.completed ?? false,
      })
    );

    this.meta.setLoadedSuccessMeta();
  }

  private async _onTaskComplete(): Promise<void> {
    const taskProgress = this.taskProgress.value;

    if (this.currentTaskInSet?.completed || !taskProgress) {
      return;
    }

    if (!taskProgress.completed) {
      return;
    }

    this.inputSavingMeta.setLoadedStartMeta();

    await sleep(2000);

    const updatedMockStatuses = TASKS_SET_STATUS_MOCK.tasksStatus.map<TaskStatusApi>((item) => {
      if (item.data.id === taskProgress.task.id) {
        return {
          ...item,
          completed: true,
        };
      }

      return item;
    });

    TASKS_SET_STATUS_MOCK.tasksStatus = updatedMockStatuses;

    this.tasksSetStatus.changeValue(TasksSetStatusModel.fromApi(TASKS_SET_STATUS_MOCK));

    if (Math.random() > 0.5) {
      this.achievementsController.showAchievements([MOCK_ACHIEVEMENTS_API_DATA_MAP[1].data]);
    }

    this.inputSavingMeta.setLoadedSuccessMeta();
  }

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
    this._disposers.forEach((disposer) => disposer());
  }
}
