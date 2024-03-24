import { ROUTES } from 'config/router';
import CodeSvg from 'img/svgComponents/code.c.svg';
import StarSvg from 'img/svgComponents/star.c.svg';
import { SvgrComponent } from 'types/props';

export enum TabBarItemEnum {
  achievements = 'achievements',
  topics = 'topics',
}

export type TabBarItemType = {
  id: TabBarItemEnum;
  Icon: SvgrComponent;
  route: string;
  routeStartsWith: string;
};

export const getTabBarItems = (): Record<TabBarItemEnum, TabBarItemType> => ({
  [TabBarItemEnum.achievements]: {
    id: TabBarItemEnum.achievements,
    Icon: StarSvg,
    route: ROUTES.achievements.create(),
    routeStartsWith: ROUTES.achievements.create(),
  },
  [TabBarItemEnum.topics]: {
    id: TabBarItemEnum.topics,
    Icon: CodeSvg,
    route: ROUTES.topics.create(),
    routeStartsWith: ROUTES.topics.create(),
  },
});

export const TAB_BAR_ITEMS_ORDER: TabBarItemEnum[] = [
  TabBarItemEnum.achievements,
  TabBarItemEnum.topics,
];
