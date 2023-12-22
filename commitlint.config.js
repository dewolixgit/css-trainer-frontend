module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [1, 'always', 256],
    'header-max-length': [2, 'always', 256],
    'subject-case': [0],
  },
};
