import { debounce } from 'throttle-debounce';

import {
  ITaskProgressModel,
  TaskProgressApi,
  TaskProgressModelParams,
} from 'config/store/exerciseSetPageStore/taskProgressModel';
import { AbstractTaskProgressModel } from 'stores/locals/ExerciseSetPageStore/TaskProgressModel/AbstractTaskProgressModel';

export class TaskProgressModel extends AbstractTaskProgressModel implements ITaskProgressModel {
  constructor(props: TaskProgressModelParams) {
    super(props);
  }

  private _saveInput = debounce(500, async () => {
    this.saveInputMeta.setLoadedStartMeta();

    const initialChangeTimestamp = this._lastInputChangeTimestamp.value;

    const checkResult = this.stylist.check();

    const saveResult = await this._apiAdapter.saveUserInput({ completed: checkResult });

    const recheck = async () => {
      // If the input has changed since the last save, we need to save it again
      if (this._lastInputChangeTimestamp.value !== initialChangeTimestamp) {
        await this._saveInput();

        return;
      }

      if (saveResult.isError) {
        this.saveInputMeta.setLoadedErrorMeta();

        return;
      }

      this._completed.changeValue(checkResult);

      if (!this._wasCompletedEarlier && checkResult && !this._wasCompletedInCurrentSession.value) {
        this._wasCompletedInCurrentSession.changeValue(true);
      }

      if (checkResult) {
        this._onTaskCompleteCallback({
          completed: checkResult,
          achievements: saveResult.data.achievements,
          tasksStatus: saveResult.data.tasksStatus,
        });
      }

      this.saveInputMeta.setLoadedSuccessMeta();
    };

    recheck();
  });

  protected _onInputChange(): void {
    this._lastInputChangeTimestamp.changeValue(Date.now());
    this.stylist.stylize();

    this._saveInput();
  }

  static fromApi(params: {
    api: TaskProgressApi;
    completedEarlier: boolean;
    onTaskCompleted: TaskProgressModelParams['onTaskCompleted'];
  }): TaskProgressModel {
    return new TaskProgressModel(AbstractTaskProgressModel.fromApiToParams(params));
  }
}
