module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
          jsx: true
      }
  },
  plugins: ['simple-import-sort', 'react', '@typescript-eslint', 'prettier', 'autofix'],
  settings: {
      react: {
          version: 'detect'
      }
  },
  env: {
      browser: true,
      amd: true,
      node: true,
      es6: true,
  },
  extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
    //   'prettier/@typescript-eslint',
      'prettier',
      'plugin:prettier/recommended'   // Make sure this is always the last element in the array.
  ],
  rules: {
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      "autofix/no-debugger": "error",
      'no-console':[ 
          'error',
          {
              allow:['error']
          }
      ],
      '@typescript-eslint/no-unused-vars': 'error',
      "autofix/no-unused-vars": "error",
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'simple-import-sort/imports': 'error',
      'jsx-a11y/anchor-is-valid': [
          'error',
          {
              components: ['Link'],
              specialLink: ['hrefLeft', 'hrefRight'],
              aspects: ['invalidHref', 'preferButton']
          }
      ]
  },
  overrides: [
      {
          files: ["**/*.styles.ts"],
          rules: {
          '@typescript-eslint/explicit-module-boundary-types': 'off',
          }
      }
  ],
}