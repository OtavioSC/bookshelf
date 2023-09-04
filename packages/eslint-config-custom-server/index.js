module.exports = {
  extends: ["eslint:recommended", "turbo"],
  env: {
    node: true,
    es6: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true
    },
    ecmaVersion: "12",
    sourceType: "module",
  },
  overrides: [
    {
      files: ["**/__tests__/**/*"],
      env: {
        jest: true,
      },
    },
  ],
};
