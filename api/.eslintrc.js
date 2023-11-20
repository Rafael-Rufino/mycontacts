module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended", "eslint:recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-console": "off",
    "class-methods-use-this": "off",
    camelcase: "off",
    "no-promise-executor-return": "off",
    "import/no-extraneous-dependencies": "off",
    "consistent-return": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
  },
};
