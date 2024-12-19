import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintPluginAstro from 'eslint-plugin-astro';

const baseConfig = {
  ...pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
}

/** @type {import('eslint').Linter.Config[]} */
export default [{
  files: ["**/*.{js,mjs,cjs,ts}"],
  languageOptions: { globals: { ...globals.browser, ...globals.node } },
  baseConfig,
  rules: {
    // override/add rules settings here, such as:
    // "astro/no-set-html-directive": "error"
  }
},
{
  files: ["**/*.astro"],
  languageOptions: { globals: { ...globals.browser, ...globals.node } },
  baseConfig,
  ...eslintPluginAstro.configs.recommended,
  rules: {
    // override/add rules settings here, such as:
    // "astro/no-set-html-directive": "error"
  }
},
{
  files: ["**/*.{jsx,tsx}"],
  baseConfig,
  ...pluginReact.configs.flat.recommended,
  rules: {
    // override/add rules settings here, such as:
  },
}

];


