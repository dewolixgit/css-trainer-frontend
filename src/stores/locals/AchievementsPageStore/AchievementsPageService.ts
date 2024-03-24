import {
  AchievementId,
  MOCK_ACHIEVEMENTS_API_DATA,
  ApiAchievementType,
} from 'entities/achievement';
import { ApiSkillType, MOCK_API_SKILL_DATA, SkillEnum } from 'entities/skill';
import mockMainCharacterImage from 'img/mock/main-character.png';
import { BaseResponse } from 'types/props';
import { sleep } from 'utils/async';

export class AchievementsPageService {
  static getAchievementsData = async (): Promise<
    BaseResponse<{
      skills: Record<SkillEnum, ApiSkillType>;
      achievements: Record<AchievementId, ApiAchievementType>;
      characterImage: string;
    }>
  > => {
    await sleep(2000);

    return {
      isError: false,
      data: {
        achievements: MOCK_ACHIEVEMENTS_API_DATA,
        skills: MOCK_API_SKILL_DATA,
        characterImage: mockMainCharacterImage,
      },
    };
  };
}
