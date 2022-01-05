module.exports = {
  projects: ["<rootDir>/packages/client/jest.unit.config.ts", "<rootDir>/packages/client/jest.e2e.config.ts"],
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
