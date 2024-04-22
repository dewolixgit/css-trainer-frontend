import { TaskSavePayload } from 'config/store/exerciseSetPageStore/taskProgressModel';
import { IExerciseSetPageStore } from 'config/store/exerciseSetPageStore/types';
import { AbstractExerciseSetPageStore } from 'stores/locals/ExerciseSetPageStore/AbstractSetPageStore';
import { TaskProgressModel } from 'stores/locals/ExerciseSetPageStore/TaskProgressModel';
import { TaskTheoryModel } from 'stores/locals/ExerciseSetPageStore/TaskTheoryModel';
import { TasksSetStatusModel } from 'stores/locals/ExerciseSetPageStore/TasksSetStatusModel';
import { TASKS_MOCK } from 'stores/locals/ExerciseSetPageStore/mock/contentFlowBlocks';
import { INFO_FLOW_BLOCKS_MOCK } from 'stores/locals/ExerciseSetPageStore/mock/infoFlowBlocks';
import { TASKS_SET_STATUS_MOCK } from 'stores/locals/ExerciseSetPageStore/mock/tasksSetStatus';
import { sleep } from 'utils/async';

export class ExerciseSetPageStore
  extends AbstractExerciseSetPageStore
  implements IExerciseSetPageStore
{
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
        // Todo: Consider to subscribe or something else to react to task completion
        onTaskCompleted: this._onTaskComplete,
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
        onTaskCompleted: this._onTaskComplete,
      })
    );

    this.meta.setLoadedSuccessMeta();
  }

  protected async _onTaskComplete({
    completed,
    tasksStatus,
    achievements,
  }: TaskSavePayload): Promise<void> {
    const taskProgress = this.taskProgress.value;
    const tasksSetStatus = this.tasksSetStatus.value;

    if (
      this.currentTaskInSet?.completed ||
      !taskProgress ||
      !taskProgress.completed ||
      !tasksSetStatus ||
      !completed
    ) {
      return;
    }

    // this.tasksSetStatus.changeValue(TasksSetStatusModel.fromApi(TASKS_SET_STATUS_MOCK));
    this.tasksSetStatus.changeValue(
      new TasksSetStatusModel({
        id: tasksSetStatus.id,
        parentTopicId: tasksSetStatus.parentTopicId,
        tasksStatus,
      })
    );

    if (achievements.length) {
      this.achievementsController.showAchievements(achievements);
    }
  }
}
