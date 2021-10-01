export default class Observer<T extends (...data: any[]) => void = () => void> {

	private readonly callbacks: T[] = [];

	public addListener(callback: T): void {
		if (!this.has(callback))
			this.callbacks.push(callback);
	}

	public removeListener(callback: T): void {
		const index: number = this.callbacks.indexOf(callback);
		if (index >= 0)
			this.callbacks.splice(index, 1);
	}

	public trigger(...data: Parameters<T>): void {
		this.callbacks.slice().forEach(callback => callback(...data));
	}

	private has(callback: T): boolean {
		return this.callbacks.indexOf(callback) >= 0;
	}
}

