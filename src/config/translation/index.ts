import { ACHIEVEMENT_TOAST_TEXTS_RU } from 'config/translation/components/achievementToast';
import { BASE_TOAST_TEXTS_RU } from 'config/translation/components/baseToast';
import { TOPIC_CARD_TEXTS_RU } from 'config/translation/components/topicCard';
import { EXERCISE_SET_PAGE_TEXTS_RU } from 'config/translation/pages/exerciseSet';

import { SKILL_TEXTS_RU } from './entities/skill';
import { ACHIEVEMENTS_PAGE_TEXTS_RU } from './pages/achievements';

const T = {
  components: {
    baseToast: BASE_TOAST_TEXTS_RU,
    achievementToast: ACHIEVEMENT_TOAST_TEXTS_RU,
    topicCard: TOPIC_CARD_TEXTS_RU,
  },
  pages: {
    achievements: ACHIEVEMENTS_PAGE_TEXTS_RU,
    exerciseSet: EXERCISE_SET_PAGE_TEXTS_RU,
  },
  entities: {
    skill: SKILL_TEXTS_RU,
  },
};

export type Translations = typeof T;

// Todo: Think about i18n
export const t = () => T;
