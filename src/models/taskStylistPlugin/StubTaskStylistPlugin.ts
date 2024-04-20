import { ITaskStylistPlugin } from 'config/store/exerciseSetPageStore/taskStylist';
import { BaseTaskStylistPlugin } from 'models/taskStylistPlugin/BaseTaskStylistPlugin';

export class StubTaskStylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    return '';
  }
}
