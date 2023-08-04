/* eslint-env node */

module.exports = {
  env: { browser: true, es6: true, node: true },
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-ally/recommended',
    'plugin:import/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react'],
  rules: {
    'react-refresh/only-export-components': 'error',
    'no-undef': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
  },
};
