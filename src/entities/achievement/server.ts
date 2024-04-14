import { AchievementId } from './client';

export type ApiAchievementType = {
  id: AchievementId;
  name: string;
  description: string;
};

export type ApiAchievementStatusType = {
  data: ApiAchievementType;
  completed: boolean;
};
