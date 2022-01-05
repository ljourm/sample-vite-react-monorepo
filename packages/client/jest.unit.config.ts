module.exports = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src/"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleNameMapper: {
    "^~/images": "<rootDir>/src/mocks/fileMock.js",
    "^(.*).s?css$": "<rootDir>/src/mocks/fileMock.js",
    "^~/(.*)$": "<rootDir>/src/$1",
  },
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
};
