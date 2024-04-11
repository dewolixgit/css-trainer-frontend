import { computed, makeObservable } from 'mobx';

import {
  IExerciseSetPageStore,
  ITasksSetStatusModel,
  ITaskStatusModel,
} from 'config/store/exerciseSetPageStore/types';
import { SkillEnum } from 'entities/skill';
import { ITaskStatus } from 'entities/task';
import { TasksSetSectionEnum } from 'entities/tasksSet';
import { FieldModel } from 'models/FieldModel';
import { ListModel } from 'models/ListModel';
import { MetaModel } from 'models/MetaModel';
import { sleep } from 'utils/async';

export class ExerciseSetPageStore implements IExerciseSetPageStore {
  readonly section = new FieldModel(TasksSetSectionEnum.theory);
  readonly taskStatus = new FieldModel<ITaskStatusModel | null>(null);
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
      this.tasksSetStatus.value?.tasksStatus.getEntityByKey(this.taskStatus.value?.task.id ?? -1) ??
      null
    );
  }

  get currentTaskIndexInSet() {
    return (
      this.tasksSetStatus.value?.tasksStatus.getEntityAndIndex(this.taskStatus.value?.task.id ?? -1)
        ?.index ?? null
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

    // Todo: Make model
    this.tasksSetStatus.changeValue({
      id: 1,
      parentTopicId: 1,
      getPreviousTask(id): ITaskStatus | null {
        return this.tasksStatus.getEntityByKey(id - 1) ?? null;
      },
      getNextTask(id): ITaskStatus | null {
        return this.tasksStatus.getEntityByKey(id + 1) ?? null;
      },
      tasksStatus: new ListModel<ITaskStatus, number>(
        [
          {
            data: {
              id: 1,
              skillTag: SkillEnum.flex,
              topicId: 1,
              name: 'name 1',
            },
            completed: true,
            order: 1,
          },
          {
            data: {
              id: 2,
              skillTag: SkillEnum.flex,
              topicId: 1,
              name: 'name 2',
            },
            completed: false,
            order: 2,
          },
          {
            data: {
              id: 3,
              skillTag: SkillEnum.flex,
              topicId: 1,
              name: 'name 3',
            },
            completed: false,
            order: 3,
          },
        ],
        (item) => item.data.id
      ),
      destroy() {},
    });

    // Todo: Make model
    this.taskStatus.changeValue({
      task: this.tasksSetStatus.value!.tasksStatus.items[1].data,
      destroy() {},
    });

    this.meta.setLoadedSuccessMeta();
  }

  async reload(params: { taskId: number }): Promise<void> {
    const tasksSetStatus = this.tasksSetStatus.value;

    if (!this.meta.isLoaded || !tasksSetStatus) {
      return;
    }

    this.meta.setLoadedStartMeta();

    await sleep(1000);

    this.tasksSetStatus.changeValue({
      id: 1,
      parentTopicId: 1,
      getPreviousTask(id): ITaskStatus | null {
        return this.tasksStatus.getEntityByKey(id - 1) ?? null;
      },
      getNextTask(id): ITaskStatus | null {
        return this.tasksStatus.getEntityByKey(id + 1) ?? null;
      },
      tasksStatus: new ListModel<ITaskStatus, number>(
        [
          {
            data: {
              id: 1,
              skillTag: SkillEnum.flex,
              topicId: 1,
              name: 'name 1',
            },
            completed: true,
            order: 1,
          },
          {
            data: {
              id: 2,
              skillTag: SkillEnum.flex,
              topicId: 1,
              name: 'name 2',
            },
            completed: false,
            order: 2,
          },
          {
            data: {
              id: 3,
              skillTag: SkillEnum.flex,
              topicId: 1,
              name: 'name 3',
            },
            completed: false,
            order: 3,
          },
        ],
        (item) => item.data.id
      ),
      destroy() {},
    });

    this.taskStatus.changeValue({
      task: this.tasksSetStatus.value!.tasksStatus.getEntityByKey(params.taskId)!.data,
      destroy() {},
    });

    this.meta.setLoadedSuccessMeta();
  }

  destroy() {
    this.tasksSetStatus.value?.destroy();
    this.taskStatus.value?.destroy();
  }
}
