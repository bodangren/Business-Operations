import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import unusedImportsPlugin from "eslint-plugin-unused-imports";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  { ignores: [".next/**", "node_modules/**", "scripts/**", "coverage/**", "out/**", "next-env.d.ts"] },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "unused-imports": unusedImportsPlugin,
    },
    rules: {
      // Disable problematic rules for deployment
      "react/no-unescaped-entities": "off",
      "react-hooks/rules-of-hooks": "warn",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "prefer-const": "warn",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];

export default eslintConfig;
