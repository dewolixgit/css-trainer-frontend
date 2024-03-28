const documentStyles = getComputedStyle(document.body);

export enum CssVars {
  shadowHightlight1 = '--shadow-highlight-1',
  shadowHightlightInactive1 = '--shadow-highlight-inactive-1',
}

export const getCssVarValue = (cssVarName: CssVars): string =>
  documentStyles.getPropertyValue(cssVarName);
