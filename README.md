# TypeScript utility types
This package contains most frequently used types that most projects need.

## Installation
```
npm install @stein197/ts-util
```

## Usage
Let's say that there is a class named `Point`. Any point could be cloned, so the usage of `Cloneable<T>` interface could be as follows:
```ts
import {Cloneable} from "@stein197/ts-util"

class Point implements Cloneable<Point> {

	// Constructor and other stuff...

	public clone = (): Point => new Point(this.x, this.y);
}
```

## Interfaces
- `Cloneable<T>`
- `Comparable<T>`
- `Equalable<T>`

## Types
- `Nullable<T>`
