module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
    ],
    parserOptions: {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true,
          "tsx":true
      }
  },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
  };
  