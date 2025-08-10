import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
    {
        languageOptions: { globals: globals.commonjs },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended, // Or other recommended configurations like strict or strict-type-checked
    {
        files: ['**/*.ts', '**/*.tsx'],
        rules: {
            // Add or override specific TypeScript rules here
            '@typescript-eslint/no-unused-vars': 'error',
            // Example: require explicit return types for functions
            camelcase: ['error', { properties: 'always' }],
        },
    },
    eslintConfigPrettier,
]
