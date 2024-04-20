import { action, makeObservable } from 'mobx';

import {
  IAchievementsController,
  IAchievementToastModel,
} from 'config/store/exerciseSetPageStore/achievementsController';
import { IAchievement } from 'entities/achievement';
import { FieldModel } from 'models/FieldModel';
import { AchievementToastModel } from 'stores/locals/ExerciseSetPageStore/AchievementsController/AchievementToastModel';

export class AchievementsController implements IAchievementsController {
  readonly achievements = new FieldModel<IAchievementToastModel[]>([]);

  constructor() {
    makeObservable(this, {
      showAchievements: action.bound,
    });
  }

  showAchievements(achievements: IAchievement[]): void {
    this.achievements.changeValue(achievements.map(AchievementToastModel.fromObject));
    this.achievements.value.forEach((item) => item.open.changeValue(true));
  }

  destroy() {}
}
