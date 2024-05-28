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

export const task21InputItemsExtractor: InputItemsExtractor = (inputs) => {
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

export class Task21StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    const value = task21InputItemsExtractor(this._inputs)[0].value;

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

const findCoinFromChildNodes = (node: Element | undefined): Element | undefined => {
  return Array.from(node?.childNodes ?? []).find((childNode) =>
    (childNode as Element).classList.contains(SetCombinatorsUtils.CLASSNAMES.partFour.coin)
  ) as Element | undefined;
};

export class Task21CheckerPlugin extends BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  check(): boolean {
    const taskDocument = this._iframe.value?.contentWindow?.document;

    if (!taskDocument) {
      return false;
    }

    const boxes = Array.from(
      taskDocument.getElementsByClassName(SetCombinatorsUtils.CLASSNAMES.partFour.box)
    );

    const blueBoxes = boxes.filter((node) =>
      node.classList.contains(SetCombinatorsUtils.CLASSNAMES.partFour.color.blue)
    );

    const blueBoxWithAnotherBox = blueBoxes.find((node) =>
      Array.from(node.childNodes).find((childNode) =>
        (childNode as Element).classList.contains(SetCombinatorsUtils.CLASSNAMES.partFour.box)
      )
    );

    const blueBoxInnerBox = blueBoxWithAnotherBox?.getElementsByClassName(
      SetCombinatorsUtils.CLASSNAMES.partFour.box
    )[0];

    const blueBoxWithoutAnotherBox = blueBoxes.find(
      (node) =>
        !Array.from(node.childNodes).find((childNode) =>
          (childNode as Element).classList.contains(SetCombinatorsUtils.CLASSNAMES.partFour.box)
        )
    );

    const anotherBox = boxes.find((node) =>
      node.classList.contains(SetCombinatorsUtils.CLASSNAMES.partFour.color.red)
    );

    const coinFromBlueBoxWithAnotherBox = findCoinFromChildNodes(blueBoxWithAnotherBox);

    const coinFromBlueBoxInnerBox = findCoinFromChildNodes(blueBoxInnerBox);

    const coinFromBlueBoxWithoutAnotherBox = findCoinFromChildNodes(blueBoxWithoutAnotherBox);

    const coinFromAnotherBox = findCoinFromChildNodes(anotherBox);

    if (
      !coinFromAnotherBox ||
      !coinFromBlueBoxWithAnotherBox ||
      !coinFromBlueBoxInnerBox ||
      !coinFromBlueBoxWithoutAnotherBox ||
      !blueBoxInnerBox
    ) {
      return false;
    }

    const coinFromAnotherBoxCheckServiceProperty =
      SetCombinatorsUtils.checkServiceProperty(coinFromAnotherBox);

    const coinFromBlueBoxWithAnotherBoxCheckServiceProperty =
      SetCombinatorsUtils.checkServiceProperty(coinFromBlueBoxWithAnotherBox);

    const coinFromBlueBoxInnerBoxCheckServiceProperty =
      SetCombinatorsUtils.checkServiceProperty(coinFromBlueBoxInnerBox);

    const coinFromBlueBoxWithoutAnotherBoxCheckServiceProperty =
      SetCombinatorsUtils.checkServiceProperty(coinFromBlueBoxWithoutAnotherBox);

    const blueBoxInnerBoxCheckServiceProperty =
      SetCombinatorsUtils.checkServiceProperty(blueBoxInnerBox);

    return (
      !coinFromAnotherBoxCheckServiceProperty &&
      !blueBoxInnerBoxCheckServiceProperty &&
      coinFromBlueBoxWithAnotherBoxCheckServiceProperty &&
      coinFromBlueBoxInnerBoxCheckServiceProperty &&
      coinFromBlueBoxWithoutAnotherBoxCheckServiceProperty
    );
  }
}
