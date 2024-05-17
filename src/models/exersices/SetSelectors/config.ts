export const SET_SELECTORS_ELEMENTS_ATTRIBUTES = {
  shield: {
    id: 'shield',
    className: 'shield',
    title: 'Shield',
    tag: 'div',
  },
  boots: {
    id: 'boots',
    className: 'boots',
    title: 'Boots',
    tag: 'img',
  },
  helmet: {
    id: 'helmet',
    className: 'helmet',
    title: 'Helmet',
    tag: 'img',
  },
  sword: {
    id: 'sword',
    className: 'sword',
    title: 'Super Sword',
    tag: 'svg',
  },
  spell: {
    className: 'spell',
    tag: 'p',
  },
  powerSpell: {
    id: 'power-spell',
    className: 'spell',
    classNameSpecific: 'power-spell',
    title: 'Power Spell',
    tag: 'p',
  },
  cuirass: {
    id: 'cuirass',
    className: 'cuirass',
    title: 'Cuirass',
    tag: 'img',
  },
  amulet: {
    id: 'amulet',
    className: 'amulet',
    title: 'Amulet',
    tag: 'p',
  },
};

export const SET_SELECTORS_TAGS = ['div', 'img', 'svg', 'p'];

export const SET_SELECTORS_SERVICE_CLASSNAMES = {
  // Element can be stylized with color rule
  colorStylized: 'color-stylized',

  // Element can be stylized with background-color rule
  backgroundColorStylized: 'background-color-stylized',

  // Element can be stylized with border-color rule
  borderColorStylized: 'border-color-stylized',

  // Element can be stylized with transform (scale) rule
  scaleStylized: 'scale-stylized',

  // Element can be stylized with filter (drop-shadow) rule
  glowStylized: 'glow-stylized',
};
