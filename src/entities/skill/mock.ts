import { ApiSkillType, SkillEnum } from './server';

export const MOCK_API_SKILL_DATA: Record<SkillEnum, ApiSkillType> = {
  [SkillEnum.text]: {
    skill: SkillEnum.text,
    percent: 100,
  },
  [SkillEnum.background]: {
    skill: SkillEnum.background,
    percent: 0,
  },
  [SkillEnum.position]: {
    skill: SkillEnum.position,
    percent: 15,
  },
  [SkillEnum.flex]: {
    skill: SkillEnum.flex,
    percent: 1,
  },
  [SkillEnum.grid]: {
    skill: SkillEnum.grid,
    percent: 60,
  },
  [SkillEnum.other]: {
    skill: SkillEnum.other,
    percent: 80,
  },
};
