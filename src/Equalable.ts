/**
 * This interface should be implemented by classes which instances are supposed to be compared.
 * @typeParam T - Which type to compare with.
 */
export interface Equalable<T> {

	/**
	 * Compares the current object and another one.
	 * @param obj Object to compare with.
	 * @return `true` if objects are equal.
	 */
	equals(obj: T): boolean;
}
