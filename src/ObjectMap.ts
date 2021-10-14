/**
 * Shorthand for mapped types `{[key: string]: <here is type of values>}`.
 * @typeParam T - Type of objects that the current object store.
 */
export type ObjectMap<T> = {[K: string]: T};
