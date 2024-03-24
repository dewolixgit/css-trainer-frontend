import { computed, makeObservable } from 'mobx';

import { ILocalStore } from 'config/localStore';
import { t } from 'config/translation';
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

  private readonly _getName: () => string;

  constructor(params: SkillProgressModelParams) {
    this.percent = params.percent;
    this.skill = params.skill;
    this.color = params.color;
    this._getName = params.getName;

    makeObservable(this, {
      empty: computed,
    });
  }

  get empty(): boolean {
    return this.percent === 0;
  }

  get name(): string {
    return this._getName();
  }

  destroy = () => {};

  static fromApi(params: ApiSkillType): SkillProgressModel {
    return new SkillProgressModel({
      percent: params.percent,
      skill: params.skill,
      color: SKILL_COLORS[params.skill],
      getName: () => t().entities.skill[params.skill] ?? '',
    });
  }
}
