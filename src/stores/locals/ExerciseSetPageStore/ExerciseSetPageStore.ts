import { TaskSavePayloadOnComplete } from 'config/store/exerciseSetPageStore/taskProgressModel';
import { IExerciseSetPageStore } from 'config/store/exerciseSetPageStore/types';
import { IRootStore } from 'config/store/rootStore';
import { AbstractExerciseSetPageStore } from 'stores/locals/ExerciseSetPageStore/AbstractSetPageStore';
import {
  ExerciseSetPageApiAdapter,
  GetTasksSetStatusAndTaskDataApiProcessedPayload,
} from 'stores/locals/ExerciseSetPageStore/ExerciseSetPageApiAdapter';
import { TaskProgressModel } from 'stores/locals/ExerciseSetPageStore/TaskProgressModel';
import { TaskTheoryModel } from 'stores/locals/ExerciseSetPageStore/TaskTheoryModel';
import { TasksSetStatusModel } from 'stores/locals/ExerciseSetPageStore/TasksSetStatusModel';

export class ExerciseSetPageStore
  extends AbstractExerciseSetPageStore
  implements IExerciseSetPageStore
{
  constructor(private readonly _rootStore: IRootStore) {
    super();
  }

  private _populatePageWithApiData(apiData: GetTasksSetStatusAndTaskDataApiProcessedPayload): void {
    this.tasksSetStatus.changeValue(TasksSetStatusModel.fromApi(apiData.tasksSetStatus));

    this.taskTheory.changeValue(TaskTheoryModel.fromApi(apiData.theory));

    this.taskProgress.changeValue(
      TaskProgressModel.fromApi(this._rootStore, {
        api: {
          content: apiData.practice.content,
          task: apiData.practice.task.data,
        },
        completedEarlier: apiData.practice.task.completed,
        // Todo: Consider to subscribe or something else to react to task completion
        onTaskCompleted: this._onTaskComplete,
      })
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

    const response = await ExerciseSetPageApiAdapter.getTasksSetStatusAndTaskData(
      this._rootStore.apiStore,
      {
        tasksSetId: params.tasksSetId,
      }
    );

    if (response.isError) {
      this.meta.setLoadedErrorMeta();

      return;
    }

    this._populatePageWithApiData(response.data);

    this.meta.setLoadedSuccessMeta();
  }

  async reload(params: { taskId: number }): Promise<void> {
    const tasksSetStatus = this.tasksSetStatus.value;

    if (!this.meta.isLoaded || !tasksSetStatus) {
      return;
    }

    this.meta.setLoadedStartMeta();

    this.section.reset();

    const response = await ExerciseSetPageApiAdapter.getTasksSetStatusAndTaskData(
      this._rootStore.apiStore,
      {
        tasksSetId: tasksSetStatus.id,
        taskId: params.taskId,
      }
    );

    if (response.isError) {
      this.meta.setLoadedErrorMeta();

      return;
    }

    this._populatePageWithApiData(response.data);

    this.meta.setLoadedSuccessMeta();
  }

  protected async _onTaskComplete({
    completed,
    tasksStatus,
    achievements,
  }: TaskSavePayloadOnComplete): Promise<void> {
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

    if (tasksStatus) {
      this.tasksSetStatus.changeValue(
        new TasksSetStatusModel({
          id: tasksSetStatus.id,
          parentTopicId: tasksSetStatus.parentTopicId,
          tasksStatus,
        })
      );
    }

    if (achievements?.length) {
      this.achievementsController.showAchievements(achievements);
    }
  }
}
