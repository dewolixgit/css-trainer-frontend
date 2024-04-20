import { ILocalStore } from 'config/localStore';
import { ApiAchievementType, IAchievement } from 'entities/achievement';
import { IField } from 'entities/fieldModel';

export interface IAchievementToastModel {
  readonly data: IAchievement;
  readonly open: IField<boolean>;
}

export type AchievementToastModelParams = {
  data: IAchievement;
};

export type AchievementToastApi = ApiAchievementType;

export interface IAchievementsController extends ILocalStore {
  readonly achievements: IField<IAchievementToastModel[]>;

  showAchievements(achievements: IAchievement[]): void;
}
