module.exports = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/"],
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        sourceMaps: true,
        jsc: {
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleNameMapper: {
    "^~/images": "<rootDir>/packages/client/src/mocks/fileMock.js", // TODO: client以外に対応できていない。要検討。
    "^(.*).s?css$": "<rootDir>/packages/client/src/mocks/fileMock.js",
    "^~/(.*)$": "<rootDir>/packages/client/src/$1",
  },
  collectCoverage: true,
  coverageReporters: ["html", "text-summary"],
  collectCoverageFrom: [
    "packages/client/**/*",
    "!**/node_modules/**",
    "!**/__snapshots__/**",
    "!**/.storybook/**",
    "!**/*.stories.*",
    "!packages/client/src/pages/about/app.tsx", // TODO: Viteの環境変数を読み込めないため除外。要検討。
  ],
};
