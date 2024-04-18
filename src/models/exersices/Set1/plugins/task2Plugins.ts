import {
  ITaskCheckerPlugin,
  ITaskStylistPlugin,
} from 'config/store/exerciseSetPageStore/taskStylist';
import { IInputFlowPartCode } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode';
import { IPartCodeOnlyRow } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeOnlyRow';
import { BaseTaskCheckerPlugin } from 'models/taskCheckerPlugin';
import { BaseTaskStylistPlugin } from 'models/taskStylistPlugin';
import { removeMultipleSpaces } from 'utils/string/removeMultipleSpaces';

export class Task2StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    const input = this._inputs[0] as IInputFlowPartCode;
    const row = input.rows[1] as IPartCodeOnlyRow;

    return `.background { ${row.value.value} }`;
  }
}

export class Task2CheckerPlugin extends BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  check(): boolean {
    const input = this._inputs[0] as IInputFlowPartCode;
    const row = input.rows[1] as IPartCodeOnlyRow;

    // eslint-disable-next-line wrap-regex
    return /^background-color:(\s)?(skyblue|lightblue);$/.test(
      removeMultipleSpaces(row.value.value)
    );
  }
}
