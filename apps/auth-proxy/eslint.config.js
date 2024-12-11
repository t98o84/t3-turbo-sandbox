import baseConfig from "@t3-turbo-sandbox/eslint-config/base";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".nitro/**", ".output/**"],
  },
  ...baseConfig,
];
