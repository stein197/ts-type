# TypeScript utility types
This package contains most frequently used types that most projects need.

## Installation
```
npm install @stein197/ts-util
```

## Interfaces
- `Cloneable<T>`
- `Comparable<T>`
- `Equalable<T>`

## Types
- `Nullable<T>`
- `ObjectMap<T>`
- `Json`
- `JsonArray`
- `JsonObject`
- Large `MIME` module that contains all available MIME-types, described [here](https://www.iana.org/assignments/media-types/media-types.xhtml)
- Large `css` module that contains types related to CSS properties and their types.

## Enums
- `PromiseState`

## NPM scripts
- `make:index` generates at the root `index.ts`
- `make:mime` generates `MIME.ts` file
- `build` runs all scripts
