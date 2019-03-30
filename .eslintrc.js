module.exports = {
    root: true, 
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        parser: "babel-eslint"
    },
    env: {
        browser: true,
        es6: true
    },
    rules: {
        "indent": ["error", 4],
        "semi": ["error", "always"],
        "no-console": "off",
        "arrow-parens": 0
    }
}