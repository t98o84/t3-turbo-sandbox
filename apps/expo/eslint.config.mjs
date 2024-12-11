import baseConfig from "@t3-turbo-sandbox/eslint-config/base";
import reactConfig from "@t3-turbo-sandbox/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".expo/**", "expo-plugins/**"],
  },
  ...baseConfig,
  ...reactConfig,
];
