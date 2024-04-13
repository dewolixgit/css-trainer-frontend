import { computed, makeObservable } from 'mobx';

import {
  IExerciseSetPageStore,
  ITasksSetStatusModel,
  ITaskProgressModel,
  ITaskTheoryModel,
} from 'config/store/exerciseSetPageStore/types';
import { TasksSetSectionEnum } from 'entities/tasksSet';
import { FieldModel } from 'models/FieldModel';
import { MetaModel } from 'models/MetaModel';
import { TaskProgressModel } from 'stores/locals/ExerciseSetPageStore/TaskProgressModel';
import { TaskTheoryModel } from 'stores/locals/ExerciseSetPageStore/TaskTheoryModel';
import { TasksSetStatusModel } from 'stores/locals/ExerciseSetPageStore/TasksSetStatusModel';
import { CONTENT_FLOW_BLOCKS_MOCK } from 'stores/locals/ExerciseSetPageStore/mock/contentFlowBlocks';
import { INFO_FLOW_BLOCKS_MOCK } from 'stores/locals/ExerciseSetPageStore/mock/infoFlowBlocks';
import { TASKS_SET_STATUS_MOCK } from 'stores/locals/ExerciseSetPageStore/mock/tasksSetStatus';
import { sleep } from 'utils/async';

export class ExerciseSetPageStore implements IExerciseSetPageStore {
  readonly section = new FieldModel(TasksSetSectionEnum.theory);
  readonly taskProgress = new FieldModel<ITaskProgressModel | null>(null);
  readonly taskTheory = new FieldModel<ITaskTheoryModel | null>(null);
  readonly tasksSetStatus = new FieldModel<ITasksSetStatusModel | null>(null);
  readonly meta = new MetaModel();

  constructor() {
    makeObservable(this, {
      currentTaskInSet: computed,
      currentTaskIndexInSet: computed,
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

    this.taskTheory.changeValue(
      TaskTheoryModel.fromApi({
        content: INFO_FLOW_BLOCKS_MOCK,
      })
    );

    this.tasksSetStatus.changeValue(TasksSetStatusModel.fromApi(TASKS_SET_STATUS_MOCK));

    this.taskProgress.changeValue(
      TaskProgressModel.fromApi({
        content: CONTENT_FLOW_BLOCKS_MOCK,
        task: this.tasksSetStatus.value!.tasksStatus.items[1].data,
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

    this.taskTheory.changeValue(
      TaskTheoryModel.fromApi({
        content: INFO_FLOW_BLOCKS_MOCK,
      })
    );

    this.tasksSetStatus.changeValue(TasksSetStatusModel.fromApi(TASKS_SET_STATUS_MOCK));

    this.taskProgress.changeValue(
      TaskProgressModel.fromApi({
        content: CONTENT_FLOW_BLOCKS_MOCK,
        task: this.tasksSetStatus.value!.tasksStatus.getEntityByKey(params.taskId)!.data,
      })
    );

    this.meta.setLoadedSuccessMeta();
  }

  destroy() {
    this.tasksSetStatus.value?.destroy();
    this.taskProgress.value?.destroy();
    this.taskTheory.value?.destroy();
  }
}
