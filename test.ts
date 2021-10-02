import * as should from "should";
import * as mocha from "mocha";
import Observer, { ObserverGroup } from ".";

mocha.describe("Observer<T>", () => {
	let observer: Observer<(number: number) => void>;
	let obj: {number: number};
	let listener: (n: number) => void;

	mocha.beforeEach(() => {
		observer = new Observer;
		obj = {
			number: 0
		};
		listener = n => obj.number += n;
	});

	mocha.it("Firing registered listener", () => {
		observer.addListener(listener);
		observer.notify(12);
		should(obj.number).be.equal(12);
	});

	mocha.it("Adding already added listener won't lead to firing it more than once", () => {
		observer.addListener(listener);
		observer.addListener(listener);
		observer.notify(12);
		should(obj.number).be.equal(12);
	});

	mocha.it("Listeners won't be fired after removing", () => {
		observer.addListener(listener);
		observer.removeListener(listener);
		observer.notify(12);
		should(obj.number).be.equal(0);
	});

	mocha.it("Removing a listener actually removes it from the inner array", () => {
		observer.addListener(listener);
		should((observer as any).listeners.length).be.equal(1);
		observer.removeListener(listener);
		should((observer as any).listeners).be.empty();
	});

	mocha.it("Removing not existing listener does nothing", () => {
		observer.removeListener(listener);
	});

	mocha.it("Firing empty observer does nothing", () => {
		observer.notify(12);
	});
});

mocha.describe("ObserverGroup<T>", () => {
	let observerGroup: ObserverGroup<{
		AfterJoin(id: number): void;
		AfterUnjoin(id: number, reason: string): void;
	}>;
	let obj: {id: number, name: string};
	let listenerAfterJoin: (id: number) => void;
	let listenerAfterUnjoin: (id: number, reason: string) => void;

	mocha.beforeEach(() => {
		observerGroup = new ObserverGroup;
		obj = {
			id: 0,
			name: ""
		};
		listenerAfterJoin = id => obj.id += id;
		listenerAfterUnjoin = (id, reason) => {
			obj.id += id;
			obj.name += reason;
		}
	});

	mocha.it("Firing registered listener", () => {
		observerGroup.addEventListener("AfterJoin", listenerAfterJoin);
		observerGroup.notify("AfterJoin", 12);
		should(obj.id).be.equal(12);
	});

	mocha.it("Adding already added listener won't lead to firing it more than once", () => {
		observerGroup.addEventListener("AfterJoin", listenerAfterJoin);
		observerGroup.addEventListener("AfterJoin", listenerAfterJoin);
		observerGroup.notify("AfterJoin", 12);
		should(obj.id).be.equal(12);
	});

	mocha.it("Listeners won't be fired after removing", () => {
		observerGroup.addEventListener("AfterJoin", listenerAfterJoin);
		observerGroup.removeEventListener("AfterJoin", listenerAfterJoin);
		observerGroup.notify("AfterJoin", 12);
		should(obj.id).be.equal(0);
	});

	mocha.it("Removing a listener actually removes it from the inner array", () => {
		observerGroup.addEventListener("AfterJoin", listenerAfterJoin);
		should((observerGroup as any).observers.AfterJoin.listeners.length).be.equal(1);
		observerGroup.removeEventListener("AfterJoin", listenerAfterJoin);
		should((observerGroup as any).observers.AfterJoin.listeners).be.empty();
	});

	mocha.it("Removing not existing listener does nothing", () => {
		observerGroup.removeEventListener("AfterJoin", listenerAfterJoin);
	});

	mocha.it("Firing empty observer does nothing", () => {
		observerGroup.notify("AfterJoin", 12);
	});

	mocha.it("Firing event of one type won't fire listeners of another", () => {
		observerGroup.addEventListener("AfterJoin", listenerAfterJoin);
		observerGroup.addEventListener("AfterUnjoin", listenerAfterUnjoin);
		observerGroup.notify("AfterJoin", 12);
		should(obj).be.deepEqual({id: 12, name: ""});
		observerGroup.notify("AfterUnjoin", 12, "John");
		should(obj).be.deepEqual({id: 24, name: "John"});
	});

	mocha.it("Removing event of one type won't remove listeners of another", () => {
		observerGroup.addEventListener("AfterJoin", listenerAfterJoin);
		observerGroup.addEventListener("AfterUnjoin", listenerAfterUnjoin);
		observerGroup.removeEventListener("AfterUnjoin", listenerAfterUnjoin);
		should((observerGroup as any).observers.AfterUnjoin.listeners).be.empty();
		should((observerGroup as any).observers.AfterJoin.listeners).not.be.empty();
	});
});
