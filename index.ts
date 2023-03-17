export * from "./src/Cloneable";
export * from "./src/Comparable";
export * from "./src/CSS";
export * from "./src/Equalable";
export * from "./src/HTMLAttributes";
export * from "./src/Json";
export * from "./src/MIME";
export * from "./src/Nullable";
export * from "./src/ObjectMap";
export * from "./src/Tuple";

export type DeepPartial<T> = {
	[K in keyof T]?: DeepPartial<T[K]>;
}

export type DeepRequired<T> = {
	[K in keyof T]-?: DeepRequired<T[K]>;
}

export type DeepReadonly<T> = {
	readonly [K in keyof T]: DeepReadonly<T[K]>;
}
