import { TaskIds } from '../types';

export class SetCascadeInheritance {
  static CLASSNAMES = {
    root: 'root',
    partOne: {
      bag: 'bag',
      scroll: 'scroll',
    },
    partSecond: {
      jar: 'jar',
      bag: 'bag',
      bin: 'bin',
      bucket: 'bucket',
      red: 'red',
      purple: 'purple',
      ground: 'ground',
      edible: 'edible',
      toxic: 'toxic',
      mushroom: 'mushroom',
      berry: 'berry',
      herbs: 'herbs',
      mushroomElement: {
        root: 'mushroom',
        ground: 'ground',
        edible: 'edible',
      },
      toxicMushroomElement: {
        root: 'mushroom',
        ground: 'ground',
        toxic: 'toxic',
        red: 'red',
      },
      redBerriesElement: {
        root: 'berry',
        red: 'red',
        ground: 'ground',
        edible: 'edible',
      },
      purpleBerriesElement: {
        root: 'berry',
        purple: 'purple',
        ground: 'ground',
        edible: 'edible',
      },
      redToxicBerriesElement: {
        root: 'berry',
        red: 'red',
        ground: 'ground',
        toxic: 'toxic',
      },
      herbsElement: {
        root: 'herbs',
        ground: 'ground',
        edible: 'edible',
      },
      cloverElement: {
        ground: 'ground',
        herbs: 'herbs',
      },
    },
  };

  static ID = {
    partSecond: {
      clover: 'clover',
    },
  };

  static ELEMENTS = {
    partSecond: {
      imgTag: 'img',
    },
  };

  static COLORS = {
    partOne: {
      bagColor: '#c8e2e8',
    },
  };

  static isFirstTask(taskId: number): boolean {
    return taskId === TaskIds.task25;
  }

  static isTaskPassed(params: { currentTaskId: number; taskToCompare: number }) {
    const order = {
      [TaskIds.task25]: 1,
      [TaskIds.task26]: 2,
      [TaskIds.task27]: 3,
      [TaskIds.task28]: 4,
      [TaskIds.task29]: 5,
      [TaskIds.task30]: 6,
      [TaskIds.task31]: 7,
      [TaskIds.task32]: 8,
      [TaskIds.task33]: 9,
      [TaskIds.task34]: 10,
      [TaskIds.task35]: 11,
    };

    const currentTaskOrder = order[params.currentTaskId as keyof typeof order];
    const taskToCompareOrder = order[params.taskToCompare as keyof typeof order];

    return (
      Boolean(currentTaskOrder) &&
      Boolean(taskToCompareOrder) &&
      currentTaskOrder > taskToCompareOrder
    );
  }

  static SERVICE_PROPERTY = {
    key: 'opacity',
    value: '0.9999',
    keyValueCss: 'opacity: 0.9999',
    oppositeValue: '1',
    keyOppositeValueCss: 'opacity: 1',
  };

  static checkServiceProperty(node: Element | null | undefined): boolean {
    if (!node) {
      return false;
    }

    return (
      getComputedStyle(node).getPropertyValue(this.SERVICE_PROPERTY.key) ===
      this.SERVICE_PROPERTY.value
    );
  }
}
