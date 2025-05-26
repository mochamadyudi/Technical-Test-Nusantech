import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    parser: '@typescript-eslint/parser',  // Menggunakan parser TypeScript
    parserOptions: {
      ecmaVersion: 2020,  // Menggunakan fitur ECMAScript terbaru
      sourceType: 'module',  // Menentukan bahwa kita menggunakan modul ES6
    },
    extends:
      [
        js.configs.recommended,
        ...tseslint.configs.recommended,
        'plugin:@typescript-eslint/recommended'
      ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': "@typescript-eslint/react",
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-undef': 'off',  // Matikan aturan `no-undef` karena kita menggunakan deklarasi global
      '@typescript-eslint/no-explicit-any': 'warn',  // Menyaring penggunaan tipe `any` yang terlalu bebas
      '@typescript-eslint/no-namespace': 'off',  // Memungkinkan penggunaan namespace (bisa digunakan untuk deklarasi global)
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Mematikan kewajiban menulis tipe untuk boundary
      '@typescript-eslint/no-empty-interface': 'warn',  // Memberikan peringatan untuk interface kosong
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'], // Menentukan aturan penggunaan `interface` dibanding `type`
      'prefer-const': 'error',  // Memastikan penggunaan `const` untuk variabel yang tidak diubah
      'no-unused-vars': 'warn',  // Memberikan peringatan untuk variabel yang tidak digunakan
      'no-console': 'warn',  // Memberikan peringatan untuk penggunaan `console`
      'no-global-assign': 'error',  // Menghindari penugasan global yang tidak sah
      'import/extensions': [
        'error',
        'always',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
    },
    overrides: [
      {
        files: ['*.d.ts'],  // Khusus untuk file deklarasi global (.d.ts)
        rules: {
          '@typescript-eslint/no-explicit-any': 'off',  // Membolehkan penggunaan `any` dalam deklarasi global
          '@typescript-eslint/no-empty-interface': 'off',  // Memungkinkan penggunaan interface kosong dalam deklarasi global
        },
      },
    ],
  },
)
