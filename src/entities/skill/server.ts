export enum SkillEnum {
  // Стилизация текста
  text = 'text',

  // Стилизация фона
  background = 'background',

  // Позиционирование
  position = 'position',

  // Flexbox
  flex = 'flex',

  // Grid
  grid = 'grid',

  // Другое
  other = 'other',
}

export type ApiSkillType = {
  skill: SkillEnum;
  percent: number;
};
