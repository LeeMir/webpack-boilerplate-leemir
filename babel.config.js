module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
        targets: {
          ie: 11,
          chrome: 58
        },
        useBuiltIns: "usage",
        corejs: { version: 3, proposals: true },
      },
    ],
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties", { "loose": true }] // class public field 사용 가능, loose: true => 코드 길이를 더 줄일 수 있음
  ],
};