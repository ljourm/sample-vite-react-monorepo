module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/"],
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  collectCoverage: true,
  coverageReporters: ["html", "text-summary"],
  collectCoverageFrom: [
    "packages/client/**/*",
    "!**/node_modules/**",
    "!**/.storybook/**",
    "!**/*.stories.*",
    "!packages/client/src/pages/about/app.tsx", // TODO: Viteの環境変数を読み込めないため除外。要検討。
  ],
};
