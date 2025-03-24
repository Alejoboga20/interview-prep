// 4. *Queue via Stacks*:

// Implement a MyQueue class which implements a queue using two stacks.

export default class MyQueue<T> {
	entryStack: T[];
	auxStack: T[];

	constructor() {
		this.entryStack = [];
		this.auxStack = [];
	}

	enqueue(value: T): void {
		this.entryStack.push(value);
	}

	dequeue(): T | undefined {
		if (this.isEmpty()) {
			throw new Error('empty queue');
		}

		if (this.auxStack.length === 0) {
			while (this.entryStack.length > 0) {
				this.auxStack.push(this.entryStack.pop()!);
			}
		}

		return this.auxStack.pop();
	}

	/* peek(): T | undefined {} */

	isEmpty(): boolean {
		const isEmpty = this.entryStack.length === 0 && this.auxStack.length === 0;

		return isEmpty;
	}
}

const queue = new MyQueue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
