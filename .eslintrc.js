// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      parser: 'babel-eslint'
    },
    env: {
      browser: true,
      es6: true
    },
    extends: [
      // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
      // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
      'plugin:vue/essential', 
      // https://github.com/standard/standard/blob/master/docs/RULES-en.md
      'standard'
    ],
    // required to lint *.vue files
    plugins: [
      'vue'
    ],
    // add your custom rules here
    rules: {
      // allow async-await
      'generator-star-spacing': 'off',
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'indent': ['error', 4],
      'semi': ['error', 'always'],
      'no-console': 'off',
      'arrow-parens': 0,
      "comma-dangle": ["error", "always"],
      "space-before-function-paren": 0
    }
  }
  