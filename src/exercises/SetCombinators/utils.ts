import { TaskIds } from '../types';

export class SetCombinatorsUtils {
  static SERVICE_PROPERTY = {
    key: 'opacity',
    value: '0.9999',
    keyValueCss: 'opacity: 0.9999',
  };

  static CLASSNAMES = {
    root: 'root',
    partOne: {
      boots: 'boots',
      potion: 'potion',
      scroll: 'scroll',
      book: 'book',
      helmet: 'helmet',
    },
    partTwo: {
      size: {
        small: 'small',
        medium: 'medium',
        large: 'large',
      },
      color: {
        red: 'red',
        blue: 'blue',
        green: 'green',
      },
      shape: {
        round: 'round',
        square: 'square',
        triangle: 'triangle',
      },
    },
    partThree: {
      scroll: 'scroll',
      color: {
        red: 'red',
        blue: 'blue',
        green: 'green',
      },
    },
    partFour: {
      box: 'box',
      coin: 'coin',
      color: {
        red: 'red',
        blue: 'blue',
        green: 'green',
        regular: 'regular',
      },
    },
    partFive: {
      box: 'box',
      coin: 'coin',
      bag: 'bag',
    },
    partSix: {
      box: 'box',
      potion: 'potion',
      toxic: 'toxic',
    },
    partSeven: {
      box: 'box',
      book: 'book',
    },
  };

  static TASKS_ORDER = {
    [TaskIds.task18]: 1,
    [TaskIds.task19]: 2,
    [TaskIds.task20]: 3,
    [TaskIds.task21]: 4,
    [TaskIds.task22]: 5,
    [TaskIds.task23]: 6,
    [TaskIds.task24]: 7,
  };

  static getOrderOfTaskById(taskId: TaskIds): number {
    return this.TASKS_ORDER[taskId as keyof typeof this.TASKS_ORDER];
  }

  static checkTarget = {
    dataTargetKey: 'data-target',
    dataTargetTrueValue: 'true',
    dataTargetFalseValue: 'false',

    getDataTargetQuerySelector(target: boolean) {
      return `[${this.dataTargetKey}="${
        target ? this.dataTargetTrueValue : this.dataTargetFalseValue
      }"]`;
    },

    getDataTargetAttributes(target: boolean) {
      return {
        [SetCombinatorsUtils.checkTarget.dataTargetKey]: target
          ? SetCombinatorsUtils.checkTarget.dataTargetTrueValue
          : SetCombinatorsUtils.checkTarget.dataTargetFalseValue,
      };
    },
  };

  static checkServiceProperty(node: Element | null | undefined): boolean {
    if (!node) {
      return false;
    }

    return getComputedStyle(node).getPropertyValue('opacity') === '0.9999';
  }
}
