// 2. *Stack Min*: How would you design a stack which,
// in addition to push and pop,
// has a function min which returns the minimum element?
// Push, pop, and min should all operate in O(1) time.
//

export default class StackMin<T> {
	private array: Array<T | undefined>;
	private minElement: T | undefined;

	constructor() {
		this.array = [];
	}

	push(value: T): void {
		if (
			typeof value === 'number' &&
			typeof this.minElement === 'number' &&
			value < this.minElement
		) {
			this.minElement = value;
		}
		if (this.array.length === 0) {
			this.minElement = value;
		}
		this.array.push(value);
	}

	pop(): T | undefined {
		return this.array.pop();
	}

	min(): T | undefined {
		return this.minElement;
	}
}

const stackMin = new StackMin<number>();
stackMin.push(9);
console.log(stackMin.min());
stackMin.push(2);
console.log(stackMin.min());
stackMin.push(3);
console.log(stackMin.min());
stackMin.push(0);
console.log(stackMin.min());
stackMin.push(7);
console.log(stackMin.min());
