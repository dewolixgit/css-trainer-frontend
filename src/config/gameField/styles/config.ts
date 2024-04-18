export const GAME_FIELD_HEAD_RESET_STYLE_ID = 'game-field-head-reset-style';

export const GAME_FIELD_HEAD_RESET_STYLES = `
  *,
  *::before,
  *::after {
    margin: 0;
    outline: none;
    border: none;
    text-decoration: none;

    -webkit-overflow-scrolling: touch;
    -webkit-font-smoothing: antialiased;
    text-size-adjust: none;
    -webkit-tap-highlight-color: transparent;
  }

  html,
  body {
    font-family: "Roboto", sans-serif;
  }
`;
