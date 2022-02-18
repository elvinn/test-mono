module.exports = {
  parser: '@typescript-eslint/parser',
  extends: '@tencent/eslint-config-oversea-pay/ts',
  parserOptions: {
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['node_modules', '.eslintrc.js'],
};
