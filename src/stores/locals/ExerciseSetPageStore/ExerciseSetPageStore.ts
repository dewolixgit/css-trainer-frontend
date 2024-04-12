import { computed, makeObservable } from 'mobx';

import {
  IExerciseSetPageStore,
  ITasksSetStatusModel,
  ITaskProgressModel,
} from 'config/store/exerciseSetPageStore/types';
import { SkillEnum } from 'entities/skill';
import { TasksSetSectionEnum } from 'entities/tasksSet';
import { FieldModel } from 'models/FieldModel';
import { MetaModel } from 'models/MetaModel';
import { TaskProgressModel } from 'stores/locals/ExerciseSetPageStore/TaskProgressModel';
import { TasksSetStatusModel } from 'stores/locals/ExerciseSetPageStore/TasksSetStatusModel';
import { sleep } from 'utils/async';

export class ExerciseSetPageStore implements IExerciseSetPageStore {
  readonly section = new FieldModel(TasksSetSectionEnum.theory);
  readonly taskProgress = new FieldModel<ITaskProgressModel | null>(null);
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

    this.tasksSetStatus.changeValue(
      new TasksSetStatusModel({
        id: 1,
        parentTopicId: 1,
        tasksStatus: [
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
      })
    );

    this.taskProgress.changeValue(
      new TaskProgressModel({
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

    await sleep(1000);

    this.tasksSetStatus.changeValue(
      new TasksSetStatusModel({
        id: 1,
        parentTopicId: 1,
        tasksStatus: [
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
      })
    );

    this.taskProgress.changeValue(
      new TaskProgressModel({
        task: this.tasksSetStatus.value!.tasksStatus.getEntityByKey(params.taskId)!.data,
      })
    );

    this.meta.setLoadedSuccessMeta();
  }

  destroy() {
    this.tasksSetStatus.value?.destroy();
    this.taskProgress.value?.destroy();
  }
}
