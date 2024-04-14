import { action, makeObservable } from 'mobx';

import {
  AchievementToastApi,
  IAchievementsController,
  IAchievementToastModel,
} from 'config/store/exerciseSetPageStore/achievementsController';
import { FieldModel } from 'models/FieldModel';
import { AchievementToastModel } from 'stores/locals/ExerciseSetPageStore/AchievementsController/AchievementToastModel';

export class AchievementsController implements IAchievementsController {
  readonly achievements = new FieldModel<IAchievementToastModel[]>([]);

  constructor() {
    makeObservable(this, {
      showAchievements: action.bound,
    });
  }

  showAchievements(achievements: AchievementToastApi[]): void {
    this.achievements.changeValue(achievements.map(AchievementToastModel.fromApi));
    this.achievements.value.forEach((item) => item.open.changeValue(true));
  }

  destroy() {}
}
