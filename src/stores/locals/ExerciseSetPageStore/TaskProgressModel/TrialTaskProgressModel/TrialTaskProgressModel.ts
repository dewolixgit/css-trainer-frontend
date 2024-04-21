import {
  ITaskProgressModel,
  TaskProgressModelParamsFromApi,
} from 'config/store/exerciseSetPageStore/taskProgressModel';
import { AbstractTaskProgressModel } from 'stores/locals/ExerciseSetPageStore/TaskProgressModel/AbstractTaskProgressModel';

export class TrialTaskProgressModel
  extends AbstractTaskProgressModel
  implements ITaskProgressModel
{
  protected _onInputChange(): void {
    this.stylist.stylize();

    const checkResult = this.stylist.check();

    this._completed.changeValue(checkResult);

    if (!this._wasCompletedEarlier && checkResult && !this._wasCompletedInCurrentSession.value) {
      this._wasCompletedInCurrentSession.changeValue(true);
    }

    if (checkResult) {
      this._onTaskCompleteCallback({
        completed: checkResult,
        achievements: [],
        tasksStatus: [],
      });
    }
  }

  static fromApi(params: TaskProgressModelParamsFromApi): TrialTaskProgressModel {
    return new TrialTaskProgressModel(AbstractTaskProgressModel.fromApiToParams(params));
  }
}
