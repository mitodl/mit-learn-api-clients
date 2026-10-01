import js from "@eslint/js"
import tseslint from "typescript-eslint"

export default [
  { ignores: ["**/node_modules/**", "**/dist/**", "**/build/**"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/v[01]/**/*.ts"],
    // Generated OpenAPI code violates no-explicit-any and emits unused eslint-disable
    // directives. Keep the generator's output unchanged instead of fixing it on every run.
    rules: { "@typescript-eslint/no-explicit-any": "off" },
    linterOptions: { reportUnusedDisableDirectives: "off" },
  },
]
