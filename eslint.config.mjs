import { globalIgnores } from 'eslint/config';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import ts from 'typescript-eslint';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import globals from 'globals';

export default [
  globalIgnores([
    'node_modules',
    'build',
    '**/.docusaurus',
    '**/.cache-loader',
    '**/.DS_Store',
    '**/.env.local',
    '**/.env.development.local',
    '**/.env.test.local',
    '**/.env.production.local',
    '**/npm-debug.log*',
    '**/yarn-debug.log*',
    '**/yarn-error.log*',
    '**/*.json'
  ]),

  {
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11Y,
      '@typescript-eslint': ts.plugin
    },

    languageOptions: {
      parser: ts.parser,

      globals: {
        ...globals.browser,
        ...globals.node,
        JSX: 'readonly'
      },

      ecmaVersion: 12,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },

    settings: {
      react: {
        version: 'detect'
      }
    },

    rules: {
      ...react.configs.flat.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11Y.flatConfigs.recommended.rules,
      ...ts.configs.recommended[0].rules,
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error'
    }
  }
];
