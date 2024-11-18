// @ts-check

import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslint from '@eslint/js';
// eslint-disable-next-line import/no-unresolved
import tsEslint from 'typescript-eslint';
import * as importPlugin from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

export default [
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  importPlugin.flatConfigs?.errors,
  importPlugin.flatConfigs?.warnings,
  importPlugin.flatConfigs?.typescript,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: globals.builtin,
    },
    plugins: {
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      'import/no-unresolved': 'off',
      'import/order': [
        'error',
        {
          'newlines-between': 'always-and-inside-groups',
        },
      ],
      '@typescript-eslint/consistent-type-imports': 'error',
      'unicorn/prevent-abbreviations': [
        'error',
        {
          allowList: {
            Props: true,
          },
        },
      ],
      'array-callback-return': [
        'error',
        {
          allowImplicit: true,
        },
      ],
      'unicorn/no-useless-undefined': ['error', { checkArguments: false }],
    },
  },
  {
    ignores: ['coverage/*', 'build/*'],
  },
];
