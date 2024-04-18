import {
  ITaskCheckerPlugin,
  ITaskStylistPlugin,
} from 'config/store/exerciseSetPageStore/taskStylist';
import { IInputFlowPartCode } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode';
import { IPartCodeMixedRow } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow';
import { IPartCodeMixedRowCodeElement } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement/partCodeMixedRowCodeElement';
import { BaseTaskCheckerPlugin } from 'models/taskCheckerPlugin';
import { BaseTaskStylistPlugin } from 'models/taskStylistPlugin';

export class Task3StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    const input = this._inputs[0] as IInputFlowPartCode;

    const row1 = input.rows[0] as IPartCodeMixedRow;
    const field1 = row1.elements[0] as IPartCodeMixedRowCodeElement;
    const row2 = input.rows[5] as IPartCodeMixedRow;
    const field2 = row2.elements[0] as IPartCodeMixedRowCodeElement;

    return `
      ${field1.value.value} {
        top: 700px;
        left: 20px;
      }

      ${field2.value.value} {
        top: 620px;
        left: 220px;
      }
    `;
  }
}

export class Task3CheckerPlugin extends BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  check(): boolean {
    const input = this._inputs[0] as IInputFlowPartCode;

    const row1 = input.rows[0] as IPartCodeMixedRow;
    const field1 = row1.elements[0] as IPartCodeMixedRowCodeElement;
    const row2 = input.rows[5] as IPartCodeMixedRow;
    const field2 = row2.elements[0] as IPartCodeMixedRowCodeElement;

    // eslint-disable-next-line wrap-regex
    return (
      field1.value.value.trim() === '.crowd' && field2.value.value.trim() === '.main-character'
    );
  }
}
