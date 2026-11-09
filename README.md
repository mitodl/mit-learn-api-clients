## Templates

`templates/typescript-axios/` overrides openapi-generator templates for the TypeScript client. `modelEnum.mustache` adds an `export const <Enum>Descriptions = {...} as const` map for every enum. It is a copy of mit-learn's `scripts/openapi-configs/templates/modelEnum.mustache`, so the published client exports the same names as the one checked in under mit-learn's `frontends/api/src/generated/`.

## Development

Code checks run with [prek](https://prek.j178.dev/), which reads `.pre-commit-config.yaml`. The `prek` check runs the same hooks on pull requests, and [autofix.ci](https://autofix.ci/) pushes any fixable changes.

From the repository root:

```bash
corepack enable
(cd src/typescript/mit-learn-api-axios && yarn install --immutable)
src/typescript/mit-learn-api-axios/node_modules/.bin/prek install -f
src/typescript/mit-learn-api-axios/node_modules/.bin/prek run --all-files
```

`prek install -f` replaces an existing pre-commit git hook.
