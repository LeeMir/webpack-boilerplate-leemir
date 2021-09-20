module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          ie: 11,
          chrome: 58
        },
        useBuiltIns: "usage",
        corejs: { version: 3, proposals: true },
      },
    ],
  ],
  plugins: [],
};