import PaletteSvg from 'img/svgComponents/palette.c.svg';
import { SvgrComponent } from 'types/props';

export interface IAchievement {
  readonly id: number;
  readonly icon: SvgrComponent;
  readonly name: string;
  readonly description: string;
}

export interface IAchievementModel extends IAchievement {
  readonly completed: boolean;
}

export type AchievementClientType = {
  id: number;
  icon: SvgrComponent;
};

export const ACHIEVEMENTS_CLIENT_DATA = {
  [1]: {
    id: 1,
    icon: PaletteSvg,
  },
  [2]: {
    id: 2,
    icon: PaletteSvg,
  },
  [3]: {
    id: 3,
    icon: PaletteSvg,
  },
  [4]: {
    id: 4,
    icon: PaletteSvg,
  },
  [5]: {
    id: 5,
    icon: PaletteSvg,
  },
  [6]: {
    id: 6,
    icon: PaletteSvg,
  },
  [7]: {
    id: 7,
    icon: PaletteSvg,
  },
  [8]: {
    id: 8,
    icon: PaletteSvg,
  },
  [9]: {
    id: 9,
    icon: PaletteSvg,
  },
  [10]: {
    id: 10,
    icon: PaletteSvg,
  },
  [11]: {
    id: 11,
    icon: PaletteSvg,
  },
  [12]: {
    id: 12,
    icon: PaletteSvg,
  },
  [13]: {
    id: 13,
    icon: PaletteSvg,
  },
  [14]: {
    id: 14,
    icon: PaletteSvg,
  },
  [15]: {
    id: 15,
    icon: PaletteSvg,
  },
  [16]: {
    id: 16,
    icon: PaletteSvg,
  },
  [17]: {
    id: 17,
    icon: PaletteSvg,
  },
  [18]: {
    id: 18,
    icon: PaletteSvg,
  },
} as const;

export type AchievementId = keyof typeof ACHIEVEMENTS_CLIENT_DATA;

export type AchievementModelParams = {
  id: number;
  icon: SvgrComponent;
  name: string;
  description: string;
  completed: boolean;
};

// eslint-disable-next-line array-bracket-newline
export const ACHIEVEMENTS_ORDER: AchievementId[] = [
  15, 1, 10, 14, 18, 7, 6, 11, 17, 12, 2, 5, 3, 9, 4, 13, 8, 16,
  // eslint-disable-next-line array-bracket-newline
];
