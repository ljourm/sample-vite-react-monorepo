module.exports = {
  plugins: ["stylelint-scss", "stylelint-prettier"],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-recess-order",
    "stylelint-prettier/recommended",
  ],
  rules: {
    "prettier/prettier": true,
  },
};
