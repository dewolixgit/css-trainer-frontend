import {
  FourStarsAchievementSvg,
  LampAchievementSvg,
  RocketAchievementSvg,
  StarAchievementSvg,
  ThreeStarsAchievementSvg,
  TwoRocketsAchievementSvg,
  TwoStarsAchievementSvg,
} from 'entities/achievement/icons';
import PaletteSvg from 'img/svgComponents/palette.c.svg';
import { SvgrComponent } from 'types/props';

export interface IAchievement {
  readonly id: number;
  readonly icon: SvgrComponent | null;
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
    icon: LampAchievementSvg,
  },
  [2]: {
    id: 2,
    icon: StarAchievementSvg,
  },
  [3]: {
    id: 3,
    icon: TwoStarsAchievementSvg,
  },
  [4]: {
    id: 4,
    icon: ThreeStarsAchievementSvg,
  },
  [5]: {
    id: 5,
    icon: FourStarsAchievementSvg,
  },
  [6]: {
    id: 6,
    icon: RocketAchievementSvg,
  },
  [7]: {
    id: 7,
    icon: TwoRocketsAchievementSvg,
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
  icon: SvgrComponent | null;
  name: string;
  description: string;
  completed: boolean;
};
