import { ILocalStore } from 'config/localStore';
import {
  AchievementId,
  AchievementModelParams,
  ACHIEVEMENTS_DATA,
  ApiAchievementType,
  IAchievement,
} from 'entities/achievement';
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
    const id = params.id as AchievementId;

    return new AchievementModel({
      id,
      completed: params.completed,
      icon: ACHIEVEMENTS_DATA[id]?.icon ?? (() => null),
      description: ACHIEVEMENTS_DATA[id]?.description ?? (() => ''),
      name: ACHIEVEMENTS_DATA[id]?.name ?? (() => ''),
    });
  }
}
