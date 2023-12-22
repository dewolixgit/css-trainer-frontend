import { SkillEnum } from './server';

export interface ISkillProgressModel {
  skill: SkillEnum;
  color: string;
  percent: number;
  empty: boolean;
}

export type SkillProgressModelParams = {
  skill: SkillEnum;
  color: string;
  percent: number;
};

export const SKILL_COLORS: Record<SkillEnum, string> = {
  [SkillEnum.text]: '#41A893',
  [SkillEnum.background]: '#419FEB',
  [SkillEnum.position]: '#D6D849',
  [SkillEnum.flex]: '#D34D48',
  [SkillEnum.grid]: '#AE35B7',
  [SkillEnum.other]: '#D4A448',
};

export const SKILLS_ORDER: SkillEnum[] = [
  SkillEnum.text,
  SkillEnum.background,
  SkillEnum.position,
  SkillEnum.flex,
  SkillEnum.grid,
  SkillEnum.other,
];
