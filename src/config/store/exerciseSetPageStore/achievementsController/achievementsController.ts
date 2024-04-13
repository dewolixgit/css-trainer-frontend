import { ILocalStore } from 'config/localStore';
import { AchievementDataType, AchievementId } from 'entities/achievement';
import { IField } from 'entities/fieldModel';

export interface IAchievementToastModel {
  readonly data: AchievementDataType;
  readonly open: IField<boolean>;
}

export type AchievementToastModelParams = {
  data: AchievementDataType;
};

export type AchievementToastApi = {
  id: AchievementId;
};

export interface IAchievementsController extends ILocalStore {
  readonly achievements: IField<IAchievementToastModel[]>;

  showAchievements(achievements: AchievementToastApi[]): void;
}
