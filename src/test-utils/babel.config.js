// NOTE: This is in a test-specific directory to prevent it from being used by
// Parcel (which slows down build times).
//
// @see: https://github.com/jestjs/jest/issues/3845#issuecomment-582511237
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
}
