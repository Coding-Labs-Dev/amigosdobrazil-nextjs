module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['import', 'react', 'prettier'],
  rules: {
    'prettier/prettier': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx', '.ts'] }],
    'import/prefer-default-export': 'off',
    'no-console': ['error', { allow: ['tron'] }],
    '@typescript-eslint/camelcase': 'off',
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    "import/no-extraneous-dependencies": 0,
    'jsx-a11/click-events-have-key-events': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        directory: './tsconfig.json',
      },
    },
  },
};
