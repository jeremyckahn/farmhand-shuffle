import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import importPlugin from 'eslint-plugin-import'
import functionalPlugin from 'eslint-plugin-functional'

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  pluginReact.configs.flat.recommended,
  pluginReactHooks.configs['recommended-latest'],
  importPlugin.flatConfigs.typescript,
  functionalPlugin.configs.off,
  {
    plugins: {
      import: importPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-curly-brace-presence': ['error', { props: 'never' }],
      'react/jsx-no-constructed-context-values': ['error'],
      'object-shorthand': 'error',
      'no-useless-rename': 'error',
      // See: https://typescript-eslint.io/rules/no-unused-vars/#benefits-over-typescript
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-floating-promises': [
        'error',
        { ignoreIIFE: true },
      ],
      // NOTE: This is commented out due to its impact on linting times. Enable
      // it as necessary to check for dependency cycles.
      // 'import/no-cycle': ['error'],
      'import/order': [
        'error',
        {
          'newlines-between': 'always-and-inside-groups',
        },
      ],
      'functional/immutable-data': ['error'],
    },
    ignores: ['dist'],
  },
]
