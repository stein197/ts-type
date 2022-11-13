export declare module tuple {

	/**
	 * The same as native {@link Partial} type but for tuples.
	 * @typeParam T - Tuple to make its elements all optional.
	 * @example
	 * ```ts
	 * type ABCOptional = Optional<[a: boolean, b: number, c: string]>; // [boolean?, number?, string?]
	 * ```
	 */
	export type Optional<T extends any[]> = T extends [infer First, ...infer Rest] ? [First?, ...Optional<Rest>] : T;

	/**
	 * Trims first `L` elements from the tuple.
	 * @typeParam T - Tuple to trim.
	 * @typeParam L - How many elements to trim from the start.
	 * @example
	 * ```ts
	 * type ABCTrimmedStart = TrimStart<[a: boolean, b: number, c: string], 1>; // [b: number, c: string]
	 * ```
	 */
	export type TrimStart<T extends any[], L extends number> = TrimStartInternal<[], T, L>;

	/**
	 * Trims last `L` elements from the tuple.
	 * @typeParam T - Tuple to trim.
	 * @typeParam L - How many elements to trim from the end.
	 * @example
	 * ```ts
	 * type ABCTrimmedEnd = TrimEnd<[a: boolean, b: number, c: string], 2>; // [a: boolean]
	 * ```
	 */
	export type TrimEnd<T extends any[], L extends number> = TrimEndInternal<T, [], L>;

	type TrimStartInternal<Sliced extends any[], Tuple extends any[], Length extends number> = Sliced["length"] extends Length ? (
		Tuple
	) : (
		Tuple extends [infer First, ...infer Rest] ? (
			TrimStartInternal<[...Sliced, First], Rest, Length>
		) : (
			never
		)
	);

	type TrimEndInternal<Tuple extends any[], Sliced extends any[], Length extends number> = Sliced["length"] extends Length ? (
		Tuple
	) : (
		Tuple extends [...infer First, infer Last] ? (
			TrimEndInternal<First, [Last, ...Sliced], Length>
		) : (
			never
		)
	);
}
