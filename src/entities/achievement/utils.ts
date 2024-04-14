import { ACHIEVEMENTS_CLIENT_DATA, IAchievement } from './client';
import { ApiAchievementType } from './server';

export const transformAchievementFromApi = (api: ApiAchievementType): IAchievement => ({
  id: api.id,
  name: api.name,
  description: api.description,
  icon: ACHIEVEMENTS_CLIENT_DATA[api.id]?.icon ?? null,
});
