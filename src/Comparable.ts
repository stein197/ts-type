/**
 * This interface should be implemented by classes which instances are supposed to be compared. For instance if
 * these is an object collection of the same class and there is a need to sort the array. Implementing this
 * interface can help with this.
 * @typeParam T - Which type to compare with.
 */
export interface Comparable<T> {

	/**
	 * Compares current object with another.
	 * @param obj Object to compare with.
	 * @return `-1` if current object is less than another, `1` in other case, `0` if objects are equal.
	 */
	compareTo(obj: T): number;
}