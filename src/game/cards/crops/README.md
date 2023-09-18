# Crops

Crop card implementations MUST be imported via `./index.ts`, and they SHOULD be exported via [default exports](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#using_the_default_export). The former rule prevents circular dependencies. The latter prevents automated editing tools from importing the implementations directly rather than via `./index.ts`.
