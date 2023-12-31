const parser = require('@typescript-eslint/parser');

module.exports = {
  root: true,
  plugins: ['@typescript-eslint'],
  rules: {
    semi: 'off',
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/no-var-requires': 1,
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'react/button-has-type': 'off',
    'react/require-default-props': 'off',
    'react/jsx-no-useless-fragment': [
      2,
      {
        allowExpressions: true,
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'import/no-extraneous-dependencies': [
      'off',
      {
        peerDependencies: true,
      },
    ],
    'import/no-cycle': 0,
    '@typescript-eslint/naming-convention': 0,
    'react/react-in-jsx-scope': 'off',
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'react/no-array-index-key': 1,
    'no-restricted-syntax': 0,
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'prefer-destructuring': [
      'error',
      {
        object: true,
        array: false,
      },
    ],
    'no-unsafe-optional-chaining': 0,
    'react/destructuring-assignment': 0,
  },
  extends: ['airbnb', 'airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
    programs: [parser.createProgram('tsconfig.json')],
  },
};
