import { MOCK_ACHIEVEMENTS_API_DATA_LIST, ApiAchievementStatusType } from 'entities/achievement';
import { ApiSkillType, MOCK_API_SKILL_DATA, SkillEnum } from 'entities/skill';
import mockMainCharacterImage from 'img/mock/main-character.png';
import { BaseResponse } from 'types/props';
import { sleep } from 'utils/async';

export class AchievementsPageApiAdapter {
  static async getAchievementsData(): Promise<
    BaseResponse<{
      skills: Record<SkillEnum, ApiSkillType>;
      achievements: ApiAchievementStatusType[];
      characterImage: string;
    }>
  > {
    await sleep(2000);

    return {
      isError: false,
      data: {
        achievements: MOCK_ACHIEVEMENTS_API_DATA_LIST,
        skills: MOCK_API_SKILL_DATA,
        characterImage: mockMainCharacterImage,
      },
    };
  }
}
