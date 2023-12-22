import { computed, makeObservable } from 'mobx';

import { ILocalStore } from 'entities/localStore';
import {
  ApiSkillType,
  ISkillProgressModel,
  SKILL_COLORS,
  SkillEnum,
  SkillProgressModelParams,
} from 'entities/skill';

export class SkillProgressModel implements ILocalStore, ISkillProgressModel {
  readonly percent: number;
  readonly skill: SkillEnum;
  readonly color: string;

  constructor(params: SkillProgressModelParams) {
    this.percent = params.percent;
    this.skill = params.skill;
    this.color = params.color;

    makeObservable(this, {
      empty: computed,
    });
  }

  get empty(): boolean {
    return this.percent === 0;
  }

  destroy = () => {};

  static fromApi(params: ApiSkillType): SkillProgressModel {
    return new SkillProgressModel({
      percent: params.percent,
      skill: params.skill,
      color: SKILL_COLORS[params.skill],
    });
  }
}
