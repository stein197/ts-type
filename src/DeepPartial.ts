/**
 * Same as {@link Partial}, but deep one.
 */
export type DeepPartial<T> = {
	[K in keyof T]?: DeepPartial<T[K]>;
}
