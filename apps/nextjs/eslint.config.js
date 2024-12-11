import baseConfig, { restrictEnvAccess } from "@t3-turbo-sandbox/eslint-config/base";
import nextjsConfig from "@t3-turbo-sandbox/eslint-config/nextjs";
import reactConfig from "@t3-turbo-sandbox/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
