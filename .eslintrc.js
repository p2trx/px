module.exports = {
  env: {
    es6: true,
    commonjs: true,
    node: true
  },
  extends: ['standard', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  }
};
