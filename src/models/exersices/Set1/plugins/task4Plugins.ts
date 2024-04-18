import {
  ITaskCheckerPlugin,
  ITaskStylistPlugin,
} from 'config/store/exerciseSetPageStore/taskStylist';
import { IInputFlowPartCode } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode';
import { IPartCodeMixedRow } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow';
import { IPartCodeMixedRowCodeElement } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement/partCodeMixedRowCodeElement';
import { BaseTaskCheckerPlugin } from 'models/taskCheckerPlugin';
import { BaseTaskStylistPlugin } from 'models/taskStylistPlugin';
import { removeMultipleSpaces } from 'utils/string/removeMultipleSpaces';

export class Task4StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    const input = this._inputs[0] as IInputFlowPartCode;
    const row = input.rows[0] as IPartCodeMixedRow;
    const field = row.elements[0] as IPartCodeMixedRowCodeElement;

    const prepared = removeMultipleSpaces(field.value.value);

    if (prepared === '.lamp:hover') {
      return `
        @media (hover: hover) {
          .lamp:hover {
            opacity: 1;
          }
        }

        .lamp:active {
          opacity: 1;
        }
      `;
    }

    return `
      ${prepared} {
        opacity: 1;
      }
    `;
  }
}

export class Task4CheckerPlugin extends BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  check(): boolean {
    const input = this._inputs[0] as IInputFlowPartCode;
    const row = input.rows[0] as IPartCodeMixedRow;
    const field = row.elements[0] as IPartCodeMixedRowCodeElement;

    // eslint-disable-next-line wrap-regex
    return removeMultipleSpaces(field.value.value) === '.lamp:hover';
  }
}
