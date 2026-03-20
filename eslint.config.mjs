import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier/flat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  eslintConfigPrettier,
  {
    rules: {
      // TypeScript
      "@typescript-eslint/no-explicit-any": ["warn", { ignoreRestArgs: true }],
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/consistent-type-assertions": "warn",
      "@typescript-eslint/adjacent-overload-signatures": "warn",
      "@typescript-eslint/no-extra-non-null-assertion": "warn",
      "@typescript-eslint/prefer-as-const": "warn",

      // React
      "react/self-closing-comp": "warn",
      "react/no-array-index-key": "off",
      "react/jsx-boolean-value": "error",
      "react/jsx-no-useless-fragment": "warn",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-pascal-case": "warn",

      // General
      "no-console": "warn",
      "prefer-const": "warn",
      eqeqeq: "warn",
    },
  },
];

export default eslintConfig;
