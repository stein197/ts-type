/**
 * Same as {@link Readonly}, but deep one.
 */
export type DeepReadonly<T> = {
	readonly [K in keyof T]: DeepReadonly<T[K]>;
}
