import { AchievementDataType, ACHIEVEMENTS_DATA } from 'entities/achievement/client';
import { ApiAchievementType } from 'entities/achievement/server';

export const transformAchievementDataFromApi = (api: ApiAchievementType): AchievementDataType => ({
  id: api.id,
  icon: ACHIEVEMENTS_DATA[api.id]?.icon ?? (() => null),
  description: ACHIEVEMENTS_DATA[api.id]?.description ?? (() => ''),
  name: ACHIEVEMENTS_DATA[api.id]?.name ?? (() => ''),
});
