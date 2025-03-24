// 2. *Stack Min*: How would you design a stack which,
// in addition to push and pop,
// has a function min which returns the minimum element?
// Push, pop, and min should all operate in O(1) time.
//

export default class StackMin<T> {
	private array: T[] = [];
	private minArray: T[] = [];

	constructor() {
		this.array = [];
		this.minArray = [];
	}

	push(value: T): void {
		this.array.push(value);

		if (this.minArray.length === 0) {
			this.minArray.push(value);
			return;
		}
		const currentMinElement = this.minArray[this.minArray.length - 1];

		if (
			typeof currentMinElement === 'number' &&
			typeof value === 'number' &&
			value <= currentMinElement
		) {
			this.minArray.push(value);
		}
	}

	pop(): T | undefined {
		const popped = this.array.pop();
		const currentMinElement = this.minArray[this.minArray.length - 1];

		if (popped === currentMinElement) {
			this.minArray.pop();
		}
		return popped;
	}

	min(): T | undefined {
		return this.minArray[this.minArray.length - 1];
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
stackMin.pop();
stackMin.pop();
stackMin.pop();
console.log(stackMin.min());
