import {
  GAME_FIELD_HEAD_RESET_STYLE_ID,
  GAME_FIELD_HEAD_RESET_STYLES,
} from 'config/gameField/styles/config';

export const appendStyleIntoHead = ({
  iframe,
  rule,
  tagId,
}: {
  iframe: HTMLIFrameElement;
  tagId?: string;
  rule: string;
}): HTMLStyleElement => {
  const styleTag = document.createElement('style');

  if (tagId) {
    styleTag.setAttribute('id', tagId);
  }

  iframe.contentWindow?.document.head.append(styleTag);
  styleTag.append(rule);

  return styleTag;
};

export const appendResetStylesIntoHead = (iframe: HTMLIFrameElement): void => {
  appendStyleIntoHead({
    iframe,
    rule: GAME_FIELD_HEAD_RESET_STYLES,
    tagId: GAME_FIELD_HEAD_RESET_STYLE_ID,
  });
};
