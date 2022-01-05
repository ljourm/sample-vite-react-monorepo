import { resolve } from "path";

process.env.JEST_PLAYWRIGHT_CONFIG = resolve(__dirname, "jest-playwright.config.js");

module.exports = {
  preset: "jest-playwright-preset",
  roots: ["<rootDir>/e2e"],
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        sourceMaps: true,
      },
    ],
  },
};
