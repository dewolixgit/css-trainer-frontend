import {
  AchievementToastApi,
  AchievementToastModelParams,
  IAchievementToastModel,
} from 'config/store/exerciseSetPageStore/achievementsController';
import { AchievementDataType } from 'entities/achievement';
import { transformAchievementDataFromApi } from 'entities/achievement/utils';
import { IField } from 'entities/fieldModel';
import { FieldModel } from 'models/FieldModel';

export class AchievementToastModel implements IAchievementToastModel {
  readonly data: AchievementDataType;
  readonly open: IField<boolean>;

  constructor(params: AchievementToastModelParams) {
    this.data = params.data;
    this.open = new FieldModel(false);
  }

  static fromApi(api: AchievementToastApi): AchievementToastModel {
    return new AchievementToastModel({
      data: transformAchievementDataFromApi({
        id: api.id,
        completed: true,
      }),
    });
  }
}
