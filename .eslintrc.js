module.exports = {
    env: {
        browser: true,
        es6: true,
        webextensions: true
    },
    extends: [
        'eslint:recommended'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2017
    },
    rules: {
        'block-spacing': ['error'],
        'brace-style': ['error'],
        'camelcase': ['error'],
        'comma-spacing': ['error'],
        'curly': ['error'],
        'eqeqeq': ['error'],
        'func-call-spacing': ['error'],
        'indent': ['error', 2],
        'key-spacing': ['error'],
        'keyword-spacing': ['error'],
        'new-parens': ['error'],
        'no-eval': ['error'],
        'no-extra-parens': ['error'],
        'no-multi-spaces': ['error'],
        'no-multiple-empty-lines': ['error'],
        'no-trailing-spaces': ['error'],
        'no-useless-rename': ['error'],
        'no-useless-rename': ['error'],
        'no-var': ['error'],
        'no-whitespace-before-property': ['error'],
        'object-property-newline': ['error', {allowAllPropertiesOnSameLine: true}],
        'object-shorthand': ['error'],
        'one-var': ['error', 'never'],
        'operator-linebreak': ['error'],
        'padded-blocks': ['error', 'never'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],
        'space-infix-ops': ['error'],
    }
}
