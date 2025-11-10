import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';
import globals from 'globals';

export default [
  { ignores: ['dist', 'build', 'coverage'] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['tests/**/*.{ts,tsx}', '**/*.{spec,test}.ts?(x)'],
    ...playwright.configs['flat/recommended'],
    languageOptions: {
      globals: { ...globals.node, ...globals.browser }
    }
  }
];
