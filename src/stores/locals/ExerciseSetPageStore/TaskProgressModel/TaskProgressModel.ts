import { debounce } from 'throttle-debounce';

import {
  ITaskProgressModel,
  TaskProgressApi,
  TaskProgressModelParams,
} from 'config/store/exerciseSetPageStore/taskProgressModel';
import { IRootStore } from 'config/store/rootStore';
import { IAchievement } from 'entities/achievement';
import { FieldModel } from 'models/FieldModel';
import { AbstractTaskProgressModel } from 'stores/locals/ExerciseSetPageStore/TaskProgressModel/AbstractTaskProgressModel';

export class TaskProgressModel extends AbstractTaskProgressModel implements ITaskProgressModel {
  /**
   * As achievements can be received only after the first task completion
   * and user can write to inputs anything after the completion,
   * we need to cache the achievements received after the first task completion
   * and show them after double check completion
   */
  private _cachedAchievements = new FieldModel<IAchievement[] | null>(null);

  constructor(private readonly _rootStore: IRootStore, props: TaskProgressModelParams) {
    super(props);
  }

  private _saveInput = debounce(600, async () => {
    this.saveInputMeta.setLoadedStartMeta();

    const initialChangeTimestamp = this._lastInputChangeTimestamp.value;

    const checkResult = this.stylist.check();

    const saveResult = await this._apiAdapter.saveUserInput(this._rootStore.apiStore, {
      completed: checkResult,
      completedFirstly: !this._wasCompletedEarlier,
    });

    const recheck = async () => {
      if (saveResult.isError) {
        this.saveInputMeta.setLoadedErrorMeta();

        return;
      }

      // If the input has changed since the last save, we need to save it again
      if (this._lastInputChangeTimestamp.value !== initialChangeTimestamp) {
        // But if last check result was successful and the user received new achievements,
        // save it to show him on completely successful solving
        if (saveResult.data?.achievements?.length) {
          this._cachedAchievements.changeValue(saveResult.data.achievements);
        }

        await this._saveInput();

        return;
      }

      this._completed.changeValue(checkResult);

      if (!this._wasCompletedEarlier && checkResult && !this._wasCompletedInCurrentSession.value) {
        this._wasCompletedInCurrentSession.changeValue(true);
      }

      if (checkResult) {
        this._onTaskCompleteCallback({
          completed: checkResult,
          achievements: saveResult.data?.achievements?.length
            ? saveResult.data?.achievements
            : this._cachedAchievements.value ?? null,
          tasksStatus: saveResult.data?.tasksStatus ?? null,
        });
        this._cachedAchievements.reset();
      }

      this.saveInputMeta.setLoadedSuccessMeta();
    };

    recheck();
  });

  protected _onInputChange(): void {
    this._lastInputChangeTimestamp.changeValue(Date.now());
    this.stylist.stylize();

    if (this.saveInputMeta.isLoading) {
      return;
    }

    this._saveInput();
  }

  static fromApi(
    rootStore: IRootStore,
    params: {
      api: TaskProgressApi;
      completedEarlier: boolean;
      onTaskCompleted: TaskProgressModelParams['onTaskCompleted'];
    }
  ): TaskProgressModel {
    return new TaskProgressModel(rootStore, AbstractTaskProgressModel.fromApiToParams(params));
  }
}
