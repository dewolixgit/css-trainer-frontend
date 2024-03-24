import { ACHIEVEMENT_TEXTS_RU } from './entities/achievement';
import { SKILL_TEXTS_RU } from './entities/skill';
import { ACHIEVEMENTS_PAGE_TEXTS_RU } from './pages/achievements';

const T = {
  pages: {
    achievements: ACHIEVEMENTS_PAGE_TEXTS_RU,
  },
  entities: {
    skill: SKILL_TEXTS_RU,
    achievement: ACHIEVEMENT_TEXTS_RU,
  },
};

export type Translations = typeof T;

// Todo: В будущем можно подумать над интернационализацией
export const t = () => T;
