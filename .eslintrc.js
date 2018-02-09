module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        mocha: true
    },
    globals: {
        React: true,
        expect: true,
        __DEV__: true,
        sinon: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: 'module'
    },
    plugins: [
        'react'
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    rules: {
        'arrow-spacing': 'error',
        'comma-dangle': 'off',
        'comma-spacing': 'error',
        'comma-style': 'error',
        'eqeqeq': 'error',
        'eol-last': 'error',
        'indent': ['error', 4, {SwitchCase: 1}],
        'key-spacing': 'error',
        'linebreak-style': ['error', 'unix'],
        'no-console': 'off',
        'no-param-reassign': 'error',
        'no-tabs': 'error',
        'no-trailing-spaces': 'error',
        'no-whitespace-before-property': 'error',
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'no-unused-vars': ['error', { 'ignoreRestSiblings': true }],
        'react/display-name': 'off',
        'react/prop-types': 'off'
    }
};
