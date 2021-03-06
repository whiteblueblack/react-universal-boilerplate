module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "comma-dangle": ["error", "never"],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.test.js", "**/*.dev.**.js", "**/*.dev.js"]}],
    "jsx-quotes": ["error", "prefer-single"],
    "no-param-reassign": ["off"],
    "no-underscore-dangle": ["off"],
    "react/jsx-boolean-value": ["error", "always"],
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }]
  }
};
