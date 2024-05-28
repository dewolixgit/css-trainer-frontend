import { sanitize } from 'dompurify';

import { InputItemsExtractor } from 'config/store/exerciseSetPageStore/taskProgressModel';
import {
  ITaskCheckerPlugin,
  ITaskStylistPlugin,
} from 'config/store/exerciseSetPageStore/taskStylist';
import { IInputFlowPartCode } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode';
import { IPartCodeMixedRow } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow';
import { IPartCodeMixedRowCodeElement } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement/partCodeMixedRowCodeElement';
import { InputItemTypeEnum } from 'entities/contentFlowBlock/inputItem';
import { BaseTaskCheckerPlugin } from 'models/taskCheckerPlugin';
import { BaseTaskStylistPlugin } from 'models/taskStylistPlugin';

import { SetCombinatorsUtils } from '../utils';

export const task22InputItemsExtractor: InputItemsExtractor = (inputs) => {
  const input = inputs[0] as IInputFlowPartCode;
  const row = input.rows[0] as IPartCodeMixedRow;
  const field = row.elements[0] as IPartCodeMixedRowCodeElement;

  return [
    {
      id: field.id,
      type: InputItemTypeEnum.partCodeMixedRowCodeElement,
      value: field.value.value,
    },
  ];
};

export class Task22StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    const value = task22InputItemsExtractor(this._inputs)[0].value;

    const sanitized = sanitize(value ?? '');

    if (!sanitized) {
      return '';
    }

    return `
      .${SetCombinatorsUtils.CLASSNAMES.root} ${sanitized} {
        transform: scale(0);

        ${SetCombinatorsUtils.SERVICE_PROPERTY.keyValueCss};
      }
    `;
  }
}

export class Task22CheckerPlugin extends BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  check(): boolean {
    const taskDocument = this._iframe.value?.contentWindow?.document;

    if (!taskDocument) {
      return false;
    }

    const coinOutOfBox = Array.from(
      taskDocument.getElementsByClassName(SetCombinatorsUtils.CLASSNAMES.root)[0]?.childNodes
    ).find((childNode) =>
      (childNode as Element).classList.contains(SetCombinatorsUtils.CLASSNAMES.partFive.coin)
    );

    const coinInBox = Array.from(
      taskDocument.getElementsByClassName(SetCombinatorsUtils.CLASSNAMES.partFive.box)[0]
        ?.childNodes
    ).find((childNode) =>
      (childNode as Element).classList.contains(SetCombinatorsUtils.CLASSNAMES.partFive.coin)
    );

    const coinInBag = Array.from(
      taskDocument.getElementsByClassName(SetCombinatorsUtils.CLASSNAMES.partFive.bag)[0]
        ?.childNodes
    ).find((childNode) =>
      (childNode as Element).classList.contains(SetCombinatorsUtils.CLASSNAMES.partFive.coin)
    );

    if (!coinOutOfBox || !coinInBox || !coinInBag) {
      return false;
    }

    const coinOutOfBoxCheck = SetCombinatorsUtils.checkServiceProperty(coinOutOfBox as Element);
    const coinInBoxCheck = SetCombinatorsUtils.checkServiceProperty(coinInBox as Element);
    const coinInBagCheck = SetCombinatorsUtils.checkServiceProperty(coinInBag as Element);

    return !coinOutOfBoxCheck && !coinInBagCheck && coinInBoxCheck;
  }
}
