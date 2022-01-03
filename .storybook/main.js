const { resolve } = require("path");

module.exports = {
  stories: [
    "../packages/**/*.stories.mdx",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": resolve(__dirname, "../packages/client/src"),
    };

    return config;
  },
};
