module.exports = {
    root: true,
    env: {
      node: true,
      browser: true,
      es2021: true,
    },
    parser: "vue-eslint-parser",
    parserOptions: {
      parser: "@typescript-eslint/parser",
      ecmaVersion: 2021,
      sourceType: "module",
    },
    extends: [
      "eslint:recommended",
      "plugin:vue/vue3-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended", // 确保它是最后一个
    ],
    rules: {
      "prettier/prettier": ["error", { endOfLine: "auto" }],
      "vue/multi-word-component-names": "off", // 禁用多单词组件名规则
      "@typescript-eslint/no-unused-vars": ["error"], // 推荐开启未使用变量的检查
      "@typescript-eslint/explicit-module-boundary-types": "off", // 可根据项目需求调整
    },
  };
  