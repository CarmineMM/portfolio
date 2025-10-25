import js from '@eslint/js'
import astro from 'eslint-plugin-astro'
import globals from 'globals'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

const tsRecommendedRules = tsPlugin.configs.recommended.rules ?? {}

export default [
    {
        ignores: ['node_modules/**', 'dist/**', '.astro/**'],
    },
    js.configs.recommended,
    ...astro.configs.recommended,
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            sourceType: 'module',
            globals: globals.browser,
        },
        rules: {
            semi: ['error', 'never'],
            quotes: ['error', 'single', { avoidEscape: true }],
        },
    },
    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            '@typescript-eslint': tsPlugin,
        },
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            globals: globals.browser,
        },
        rules: {
            ...tsRecommendedRules,
            semi: ['error', 'never'],
            quotes: ['error', 'single', { avoidEscape: true }],
        },
    },
    {
        files: ['**/*.astro'],
        plugins: {
            astro,
            '@typescript-eslint': tsPlugin,
        },
        languageOptions: {
            parser: astro.parser,
            parserOptions: {
                parser: tsParser,
                extraFileExtensions: ['.astro'],
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            globals: {
                ...globals.browser,
                Astro: 'readonly',
            },
        },
        rules: {
            semi: ['error', 'never'],
            quotes: ['error', 'single', { avoidEscape: true }],
        },
    },
]
