import {
  ITaskStylistPlugin,
  TaskStylistPluginParams,
} from 'config/store/exerciseSetPageStore/taskStylist';
import { BaseTaskStylistPlugin } from 'models/taskStylistPlugin/BaseTaskStylistPlugin';

export class StubTaskStylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  constructor(params: TaskStylistPluginParams) {
    super(params);
  }

  stylize(): string {
    return '';
  }
}
