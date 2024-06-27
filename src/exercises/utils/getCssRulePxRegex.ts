/**
 * @example
 * getCssRulePxRegex('margin-top') // /margin-top:(\s+)?\d+px;/m
 */
export const getCssRulePxRegex = (rule: string): RegExp =>
  new RegExp(String.raw`^${rule}:(\s+)?\d+px;$`, 'gm');
