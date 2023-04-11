module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['xo', '"plugin:prettier/recommended"'],
  overrides: [
    {
      extends: ['xo-typescript'],
      files: ['*.ts', '*.tsx'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "indent": "off"
  },
};
