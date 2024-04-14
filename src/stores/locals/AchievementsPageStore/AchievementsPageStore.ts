import { ILocalStore } from 'config/localStore';
import { MOCK_ACHIEVEMENTS_API_DATA_LIST } from 'entities/achievement';
import { SKILLS_ORDER } from 'entities/skill';
import { FieldModel, MetaModel } from 'models';
import { AchievementModel, SkillProgressModel } from 'models/achievements';
import { BaseResponse } from 'types/props';

import { AchievementsPageApiAdapter } from './AchievementsPageApiAdapter';

export class AchievementsPageStore implements ILocalStore {
  readonly skills: FieldModel<SkillProgressModel[] | null> = new FieldModel(null);
  readonly achievements: FieldModel<AchievementModel[] | null> = new FieldModel(null);
  readonly characterImage: FieldModel<string | null> = new FieldModel(null);

  readonly meta = new MetaModel();

  init = async (): Promise<void> => {
    await this._handleGetData();
  };

  private _handleGetData = async (): Promise<BaseResponse> => {
    if (this.meta.isLoading) {
      return {
        isError: true,
      };
    }

    this.meta.setLoadedStartMeta();

    const response = await AchievementsPageApiAdapter.getAchievementsData();

    if (response.isError || !response.data) {
      this.meta.setLoadedErrorMeta();

      return {
        isError: true,
      };
    }

    this.skills.changeValue(
      SKILLS_ORDER.map((skill) => SkillProgressModel.fromApi(response.data.skills[skill]))
    );

    this.achievements.changeValue(MOCK_ACHIEVEMENTS_API_DATA_LIST.map(AchievementModel.fromApi));

    this.characterImage.changeValue(response.data.characterImage);

    this.meta.setLoadedSuccessMeta();

    return {
      isError: false,
    };
  };

  destroy = () => {};
}
