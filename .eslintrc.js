const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/react',
    'plugin:import/typescript',
  ],
  plugins: [
    'prettier',
    'jsx-a11y',
    'import',
    'react',
    'react-hooks',
    'redux-saga',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
        paths: ['src'],
      },
    },
  },
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    eqeqeq: ['warn', 'always'],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
    'react/no-unescaped-entities': 0,
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'react/react-in-jsx-scope': 'off',
    'arrow-body-style': ['warn', 'as-needed'],
    'linebreak-style': 'off',
    'prefer-template': 'error',
    'object-curly-newline': 'off',
    'max-len': 'off',
    'generator-star-spacing': ['off', { before: false, after: true }],
    'consistent-return': 'off',
    'operator-linebreak': 'off',
    'no-plusplus': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-labels': 'warn',
    'no-undef': 'warn',
    'no-debugger': 'warn',

    // prettier
    'prettier/prettier': ['warn', prettierOptions],

    // jsx-a11y
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/heading-has-content': 'off',
    'jsx-a11y/label-has-associated-control': [
      'warn',
      {
        // NOTE: If this error triggers, either disable it or add
        // your custom components, labels and attributes via these options
        // See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
        controlComponents: ['Input'],
      },
    ],
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': 'off',

    // imports
    'import/imports-first': 'off',
    'import/newline-after-import': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/no-unresolved': 'warn',
    'import/no-webpack-loader-syntax': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'import/no-duplicates': 'warn',

    // react
    'react/destructuring-assignment': 'off',
    'react-hooks/rules-of-hooks': 'warn',
    'react/jsx-closing-tag-location': 'off',
    'react/forbid-prop-types': 'off',
    'react/prop-types': 'off',
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/jsx-uses-vars': 'warn',
    'react/require-default-props': 'off',
    'react/require-extension': 'off',
    'react/self-closing-comp': 'off',
    'react/sort-comp': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-props-no-spreading': 'off',

    // redux-saga
    'redux-saga/no-yield-in-race': 'warn',
    'redux-saga/yield-effects': 'warn',
    'require-yield': 'off',

    // disable the rule for all files
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
