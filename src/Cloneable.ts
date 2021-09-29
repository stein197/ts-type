/**
 * This interface should be implemented by classes which instances are supposed to be cloned.
 * @typeParam T - Which type to clone.
 */
export interface Cloneable<T> {

	/**
	 * Clones current object.
	 * @return Cloned object.
	 */
	clone(): T;
}
