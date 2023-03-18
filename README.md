# TypeScript utility types
This package contains most frequently used types that most projects need.

## Installation
```
npm install @stein197/type
```

## Interfaces
- `Cloneable<T>`
- `Comparable<T>`
- `Equalable<T>`

## Types
- `PlainMap<T>`
- `json.Json`
- `json.JsonArray`
- `json.JsonObject`
- Large `MIME` module that contains all available MIME-types, described [here](https://www.iana.org/assignments/media-types/media-types.xhtml)
- `DeepPartial<T>`
- `DeepReadonly<T>`
- `DeepRequired<T>`
- `Tuple` module

> NOTE: For more detailed documentation, please, refer to the TSDoc comments in the source code.

## NPM scripts
- `make:index` generates at the root `index.ts`
- `make:mime` generates `MIME.ts` file
- `build` runs all scripts
