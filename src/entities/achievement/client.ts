import { t } from 'config/translation';
import PaletteSvg from 'img/svgComponents/palette.c.svg';
import { SvgrComponent } from 'types/props';

export interface IAchievement {
  id: number;
  completed: boolean;
  icon: SvgrComponent;
  name: string;
  description: string;
}

export type AchievementDataType = {
  id: number;
  icon: SvgrComponent;
  name: () => string;
  description: () => string;
};

export const ACHIEVEMENTS_DATA = {
  [1]: {
    id: 1,
    icon: PaletteSvg,
    name: () => t().entities.achievement.achievementItems[1].name,
    description: () => t().entities.achievement.achievementItems[1].description,
  },
  [2]: {
    id: 2,
    icon: PaletteSvg,
    name: () => t().entities.achievement.achievementItems[2].name,
    description: () => t().entities.achievement.achievementItems[2].description,
  },
  [3]: {
    id: 3,
    icon: PaletteSvg,
    name: () => t().entities.achievement.achievementItems[3].name,
    description: () => t().entities.achievement.achievementItems[3].description,
  },
  [4]: {
    id: 4,
    icon: PaletteSvg,
    name: () => t().entities.achievement.achievementItems[4].name,
    description: () => t().entities.achievement.achievementItems[4].description,
  },
  [5]: {
    id: 5,
    icon: PaletteSvg,
    name: () => t().entities.achievement.achievementItems[5].name,
    description: () => t().entities.achievement.achievementItems[5].description,
  },
  [6]: {
    id: 6,
    icon: PaletteSvg,
    name: () => t().entities.achievement.achievementItems[6].name,
    description: () => t().entities.achievement.achievementItems[6].description,
  },
  [7]: {
    id: 7,
    icon: PaletteSvg,
    name: () => t().entities.achievement.achievementItems[7].name,
    description: () => t().entities.achievement.achievementItems[7].description,
  },
  [8]: {
    id: 8,
    icon: PaletteSvg,
    name: () => t().entities.achievement.achievementItems[8].name,
    description: () => t().entities.achievement.achievementItems[8].description,
  },
  [9]: {
    id: 9,
    icon: PaletteSvg,
    name: () => t().entities.achievement.achievementItems[9].name,
    description: () => t().entities.achievement.achievementItems[9].description,
  },
  [10]: {
    id: 10,
    icon: PaletteSvg,
    name: () => t().entities.achievement.achievementItems[10].name,
    description: () => t().entities.achievement.achievementItems[10].description,
  },
  [11]: {
    id: 11,
    icon: PaletteSvg,
    name: () => t().entities.achievement.achievementItems[11].name,
    description: () => t().entities.achievement.achievementItems[11].description,
  },
  [12]: {
    id: 12,
    icon: PaletteSvg,
    name: () => t().entities.achievement.achievementItems[12].name,
    description: () => t().entities.achievement.achievementItems[12].description,
  },
  [13]: {
    id: 13,
    icon: PaletteSvg,
    name: () => t().entities.achievement.achievementItems[13].name,
    description: () => t().entities.achievement.achievementItems[13].description,
  },
  [14]: {
    id: 14,
    icon: PaletteSvg,
    name: () => t().entities.achievement.achievementItems[14].name,
    description: () => t().entities.achievement.achievementItems[14].description,
  },
  [15]: {
    id: 15,
    icon: PaletteSvg,
    name: () => t().entities.achievement.achievementItems[15].name,
    description: () => t().entities.achievement.achievementItems[15].description,
  },
  [16]: {
    id: 16,
    icon: PaletteSvg,
    name: () => t().entities.achievement.achievementItems[16].name,
    description: () => t().entities.achievement.achievementItems[16].description,
  },
  [17]: {
    id: 17,
    icon: PaletteSvg,
    name: () => t().entities.achievement.achievementItems[17].name,
    description: () => t().entities.achievement.achievementItems[17].description,
  },
  [18]: {
    id: 18,
    icon: PaletteSvg,
    name: () => t().entities.achievement.achievementItems[18].name,
    description: () => t().entities.achievement.achievementItems[18].description,
  },
} as const;

export type AchievementId = keyof typeof ACHIEVEMENTS_DATA;

export type AchievementModelParams = AchievementDataType & {
  completed: boolean;
};

// eslint-disable-next-line array-bracket-newline
export const ACHIEVEMENTS_ORDER: AchievementId[] = [
  15, 1, 10, 14, 18, 7, 6, 11, 17, 12, 2, 5, 3, 9, 4, 13, 8, 16,
  // eslint-disable-next-line array-bracket-newline
];
