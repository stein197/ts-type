import Observer from "Observer";

export class ObserverGroup<T extends {[K: string]: (...data: any[]) => void}> {

	private readonly observers: {[K in keyof T]?: Observer<T[K]>} = {};

	public addListener<K extends keyof T>(key: K, callback: T[K]): void {
		if (!this.observers[key])
			this.observers[key] = new Observer();
		this.observers[key].addListener(callback);
	}

	public removeListener<K extends keyof T>(key: K, callback: T[K]): void {
		this.observers[key]?.removeListener(callback);
	}

	public trigger<K extends keyof T>(key: K, ...data: Parameters<T[K]>): void {
		this.observers[key]?.trigger(...data);
	}
}
