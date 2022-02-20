module.exports = {
  env: {
    es6: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  // ESLintにTypeScriptを理解させる
  parserOptions: {
    version: 2018,
    sourceType: "module",
    // import 文でモジュールを使用します
    ecmaFeatures: {
      jsx: true
    }
  },
  // React のバージョンは自動検出に
  settings: {
    react: {
      version: "detect"
    }
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:@typescript-eslint/eslint-recommended", "prettier", "plugin:storybook/recommended"],
  rules: {
    // TypeScirpt なので prop-types は要らない
    "react/prop-types": "off",
    "prettier/prettier": "error"
  }
};