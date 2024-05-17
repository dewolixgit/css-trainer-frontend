import { IExerciseSetPageStore, TasksSetStatusApi } from 'config/store/exerciseSetPageStore';
import { TaskSavePayloadOnComplete } from 'config/store/exerciseSetPageStore/taskProgressModel';
import { GetTasksSetStatusAndTaskDataApiProcessedPayload } from 'entities/tasksSet';
import { FieldModel } from 'models/FieldModel';
import { TasksSetStatusModel } from 'stores/locals/ExerciseSetPageStore';
import { AbstractExerciseSetPageStore } from 'stores/locals/ExerciseSetPageStore/AbstractSetPageStore';
import { TrialTaskProgressModel } from 'stores/locals/ExerciseSetPageStore/TaskProgressModel/TrialTaskProgressModel';
import { TaskTheoryModel } from 'stores/locals/ExerciseSetPageStore/TaskTheoryModel';

import { TrialExerciseSetApiAdapter } from './TrialExerciseSetApiAdapter';

export class TrialExerciseSetPageStore
  extends AbstractExerciseSetPageStore
  implements IExerciseSetPageStore
{
  private _clientMockTasksSetStatus = new FieldModel<TasksSetStatusApi['tasksStatus']>([]);

  private _populateTheoryAndPractice(data: GetTasksSetStatusAndTaskDataApiProcessedPayload): void {
    this.taskTheory.changeValue(TaskTheoryModel.fromApi(data.theory));

    this.taskProgress.changeValue(
      TrialTaskProgressModel.fromApi({
        api: {
          content: data.practice.content,
          task: data.practice.task.data,
        },
        completedEarlier: data.practice.task.completed,
        // Todo: Consider to subscribe or something else to react to task completion
        onTaskCompleted: this._onTaskComplete,
      })
    );
  }

  async init(): Promise<void> {
    this.meta.setLoadedStartMeta();

    const response = await TrialExerciseSetApiAdapter.getTrialTasksSetProgressAndTaskContent(
      this._rootStore.apiStore
    );

    if (response.isError) {
      this.meta.setLoadedErrorMeta();

      return;
    }

    this._clientMockTasksSetStatus.changeValue(response.data.api.tasksSetStatus.tasksStatus);

    this.tasksSetStatus.changeValue(
      TasksSetStatusModel.fromApi({
        id: 0,
        parentTopicId: 0,
        tasksStatus: response.data.api.tasksSetStatus.tasksStatus,
      })
    );

    this._populateTheoryAndPractice(response.data.transformed);

    this.meta.setLoadedSuccessMeta();
  }

  async reload(params: { taskId: number }): Promise<void> {
    const tasksSetStatus = this.tasksSetStatus.value;

    if (!this.meta.isLoaded || !tasksSetStatus) {
      return;
    }

    this.meta.setLoadedStartMeta();

    this.section.reset();

    const response = await TrialExerciseSetApiAdapter.getTrialTasksSetProgressAndTaskContent(
      this._rootStore.apiStore,
      {
        taskId: params.taskId,
      }
    );

    if (response.isError) {
      this.meta.setLoadedErrorMeta();

      return;
    }

    this.tasksSetStatus.changeValue(
      TasksSetStatusModel.fromApi({
        id: 0,
        parentTopicId: 0,
        tasksStatus: this._clientMockTasksSetStatus.value,
      })
    );

    this._populateTheoryAndPractice(response.data.transformed);

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
