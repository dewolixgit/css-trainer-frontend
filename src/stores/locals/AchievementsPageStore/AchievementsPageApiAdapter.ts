import { ENDPOINTS } from 'config/api';
import { IApiStore } from 'config/store/apiStore';
import { ApiAchievementStatusType, IAchievementModel } from 'entities/achievement';
import { ApiSkillType, ISkillProgressModel, SkillEnum } from 'entities/skill';
import { AchievementModel, SkillProgressModel } from 'models/achievements';
import { BaseResponse } from 'types/props';

type GetAchievementsDataApiPayload = {
  achievements: ApiAchievementStatusType[];
  skills: Record<SkillEnum, ApiSkillType>;
  characterImage: string;
};

export class AchievementsPageApiAdapter {
  static async getAchievementsData(apiStore: IApiStore): Promise<
    BaseResponse<{
      skills: Record<SkillEnum, ISkillProgressModel>;
      achievements: IAchievementModel[];
      characterImage: string;
    }>
  > {
    const response = await apiStore.request<GetAchievementsDataApiPayload>({
      url: ENDPOINTS.achievements.getUrl(),
      method: ENDPOINTS.achievements.method,
    });

    if (response.isError) {
      return {
        isError: true,
      };
    }

    const skillsTransformed = Object.values(response.data.payload.skills).reduce<
      Record<SkillEnum, ISkillProgressModel>
    >(
      (acc, item) => ({
        ...acc,
        [item.skill]: SkillProgressModel.fromApi(item),
      }),
      {} as Record<SkillEnum, ISkillProgressModel>
    );

    return {
      isError: false,
      data: {
        achievements: response.data.payload.achievements.map(AchievementModel.fromApi),
        skills: skillsTransformed,
        characterImage: response.data.payload.characterImage,
      },
    };
  }
}
