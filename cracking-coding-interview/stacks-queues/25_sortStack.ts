// 5. *Sort Stack*:

// Write a program to sort a stack such that the smallest items are on the top.
// You can use an additional temporary stack, but you may not copy the elements
// into any other data structure (such as an array).
// The stack supports the following operations: push, pop, peek, and isEmpty.

export default class SortStack<T> {
	entryStack: T[] = [];

	constructor() {}

	push(value: T): void {
		if (this.isEmpty()) {
			this.entryStack.push(value);
			return;
		}

		let peek = this.peek();
		let temp: T[] = [];

		while (peek && value > peek) {
			const pop = this.entryStack.pop();

			if (pop) {
				temp.push(pop);
			}

			peek = this.peek();
		}
		this.entryStack.push(value);
		let pop: T | undefined;
		while ((pop = temp.pop())) {
			this.entryStack.push(pop);
		}
	}

	pop(): T | undefined {
		return this.entryStack.pop();
	}

	peek(): T | undefined {
		return this.entryStack[this.entryStack.length - 1];
	}

	isEmpty(): boolean {
		return this.entryStack.length === 0;
	}
}

const sortStack = new SortStack<number>();
sortStack.push(2);
sortStack.push(9);
sortStack.push(17);
sortStack.push(1);
console.log(sortStack.pop());
console.log(sortStack.pop());
console.log(sortStack.pop());
console.log(sortStack.pop());
