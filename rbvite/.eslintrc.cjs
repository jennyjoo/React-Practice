module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['plugin:react/recommended', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:react/jsx-runtime', 'plugin:jsx-a11y/recommended', 'plugin:storybook/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'jsx-a11y'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    quotes: ['error', 'single', { allowTemplateLiterals: true }],

    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  settings: {
    react: { version: 'detect' }, // for react version warnning
  },
};
