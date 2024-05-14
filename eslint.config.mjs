import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["src/**/*.{js,jsx}"],
    ignores: [
      "**/*.config.js",
      "**/*.common.js",
      "**/node_modules/",
      ".git/",
      "**/dist/",
    ],
    rules: {
      semi: "error",
    },
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
];
