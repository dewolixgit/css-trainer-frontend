import { sanitize } from 'dompurify';

import { ILocalStore } from 'config/localStore';
import {
  AchievementModelParams,
  ACHIEVEMENTS_CLIENT_DATA,
  ApiAchievementStatusType,
  IAchievementModel,
} from 'entities/achievement';
import { SvgrComponent } from 'types/props';

export class AchievementModel implements ILocalStore, IAchievementModel {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly completed: boolean;
  readonly icon: SvgrComponent | null;

  constructor(params: AchievementModelParams) {
    this.id = params.id;
    this.name = params.name;
    this.description = params.description;
    this.completed = params.completed;
    this.icon = params.icon;
  }

  destroy = () => {};

  static fromApi(params: ApiAchievementStatusType): AchievementModel {
    return new AchievementModel({
      id: params.data.id,
      name: sanitize(params.data.name),
      description: sanitize(params.data.description),
      icon: ACHIEVEMENTS_CLIENT_DATA[params.data.id]?.icon ?? null,
      completed: params.completed,
    });
  }
}
