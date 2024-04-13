import { ILocalStore } from 'config/localStore';
import { AchievementModelParams, ApiAchievementType, IAchievement } from 'entities/achievement';
import { transformAchievementDataFromApi } from 'entities/achievement/utils';
import { SvgrComponent } from 'types/props';

export class AchievementModel implements ILocalStore, IAchievement {
  readonly id: number;
  readonly completed: boolean;
  readonly icon: SvgrComponent;

  private readonly _getName: () => string;
  private readonly _getDescription: () => string;

  constructor(params: AchievementModelParams) {
    this.id = params.id;
    this.completed = params.completed;
    this.icon = params.icon;
    this._getName = params.name;
    this._getDescription = params.description;
  }

  get name(): string {
    return this._getName();
  }

  get description(): string {
    return this._getDescription();
  }

  destroy = () => {};

  static fromApi(params: ApiAchievementType): AchievementModel {
    return new AchievementModel({
      ...transformAchievementDataFromApi(params),
      completed: params.completed,
    });
  }
}
