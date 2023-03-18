/**
 * Same as {@link Required}, but deep one.
 */
export type DeepRequired<T> = {
	[K in keyof T]-?: DeepRequired<T[K]>;
}
