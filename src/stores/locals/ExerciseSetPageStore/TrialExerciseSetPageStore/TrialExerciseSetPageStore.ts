import { IExerciseSetPageStore, TasksSetStatusApi } from 'config/store/exerciseSetPageStore';
import { TaskSavePayloadOnComplete } from 'config/store/exerciseSetPageStore/taskProgressModel';
import { FieldModel } from 'models/FieldModel';
import { TasksSetStatusModel } from 'stores/locals/ExerciseSetPageStore';
import { AbstractExerciseSetPageStore } from 'stores/locals/ExerciseSetPageStore/AbstractSetPageStore';
import { TrialTaskProgressModel } from 'stores/locals/ExerciseSetPageStore/TaskProgressModel/TrialTaskProgressModel';
import { TaskTheoryModel } from 'stores/locals/ExerciseSetPageStore/TaskTheoryModel';
import { TASKS_MOCK } from 'stores/locals/ExerciseSetPageStore/mock/contentFlowBlocks';
import { INFO_FLOW_BLOCKS_MOCK } from 'stores/locals/ExerciseSetPageStore/mock/infoFlowBlocks';
import { TASKS_SET_STATUS_MOCK } from 'stores/locals/ExerciseSetPageStore/mock/tasksSetStatus';
import { sleep } from 'utils/async';

export class TrialExerciseSetPageStore
  extends AbstractExerciseSetPageStore
  implements IExerciseSetPageStore
{
  private _clientMockTasksSetStatus = new FieldModel<TasksSetStatusApi['tasksStatus']>([]);

  async init(): Promise<void> {
    this.meta.setLoadedStartMeta();

    await sleep(1000);

    this._clientMockTasksSetStatus.changeValue(TASKS_SET_STATUS_MOCK.tasksStatus);

    this.tasksSetStatus.changeValue(TasksSetStatusModel.fromApi(TASKS_SET_STATUS_MOCK));

    this.taskTheory.changeValue(
      TaskTheoryModel.fromApi({
        content: INFO_FLOW_BLOCKS_MOCK,
      })
    );

    this.taskProgress.changeValue(
      TrialTaskProgressModel.fromApi({
        api: {
          // @ts-ignore
          content: TASKS_MOCK[this.tasksSetStatus.value!.tasksStatus.items[0].data.id],
          task: this.tasksSetStatus.value!.tasksStatus.items[0].data,
        },
        completedEarlier: true,
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

    await sleep(1000);

    this.section.reset();

    this.taskTheory.changeValue(
      TaskTheoryModel.fromApi({
        content: INFO_FLOW_BLOCKS_MOCK,
      })
    );

    this.tasksSetStatus.changeValue(
      TasksSetStatusModel.fromApi({
        id: 0,
        parentTopicId: 0,
        tasksStatus: this._clientMockTasksSetStatus.value,
      })
    );

    this.taskProgress.changeValue(
      TrialTaskProgressModel.fromApi({
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

  protected async _onTaskComplete({ completed }: TaskSavePayloadOnComplete): Promise<void> {
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

    const completedTaskStatus = this._clientMockTasksSetStatus.value.find(
      (task) => task.data.id === taskProgress.task.id
    );

    if (!completedTaskStatus) {
      return;
    }

    completedTaskStatus.completed = true;

    this.tasksSetStatus.changeValue(
      new TasksSetStatusModel({
        id: 0,
        parentTopicId: 0,
        tasksStatus: this._clientMockTasksSetStatus.value,
      })
    );
  }
}
