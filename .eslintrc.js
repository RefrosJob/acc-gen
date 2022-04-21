module.exports = {
        env: {
                browser: true,
                es2021: true,
        },
        extends: [
                'plugin:react/recommended',
                'airbnb',
                'plugin:import/typescript',
        ],
        parser: '@typescript-eslint/parser',
        parserOptions: {
                ecmaFeatures: {
                        jsx: true,
                },
                ecmaVersion: 12,
                sourceType: 'module',
        },
        plugins: [
                'react',
                '@typescript-eslint',
                'prettier',
        ],
        rules: {
                'linebreak-style': 0,
                'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
                'import/extensions': 0,
                indent: ['error', 8],
                'import/no-cycle': 0,
                'react/jsx-indent': [1, 8],
                'react/jsx-indent-props': [1, 8],
                'max-len': ['error', { code: 140 }],
                'no-use-before-define': 'off',
                '@typescript-eslint/no-use-before-define': ['error'],

        },
        settings: {
                'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
        },
};
