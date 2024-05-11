import { ILocalStore } from 'config/localStore';
import { IRootStore } from 'config/store/rootStore';
import { IAchievementModel } from 'entities/achievement';
import { ISkillProgressModel, SKILLS_ORDER } from 'entities/skill';
import { FieldModel, MetaModel } from 'models';
import { BaseResponse } from 'types/props';

import { AchievementsPageApiAdapter } from './AchievementsPageApiAdapter';

export class AchievementsPageStore implements ILocalStore {
  readonly skills: FieldModel<ISkillProgressModel[] | null> = new FieldModel(null);
  readonly achievements: FieldModel<IAchievementModel[] | null> = new FieldModel(null);
  readonly characterImage: FieldModel<string | null> = new FieldModel(null);

  readonly meta = new MetaModel();

  constructor(private readonly _rootStore: IRootStore) {}

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

    const response = await AchievementsPageApiAdapter.getAchievementsData(this._rootStore.apiStore);

    if (response.isError || !response.data) {
      this.meta.setLoadedErrorMeta();

      return {
        isError: true,
      };
    }

    this.skills.changeValue(SKILLS_ORDER.map((skill) => response.data.skills[skill]));
    this.achievements.changeValue(response.data.achievements);
    this.characterImage.changeValue(response.data.characterImage);

    this.meta.setLoadedSuccessMeta();

    return {
      isError: false,
    };
  };

  destroy = () => {};
}
