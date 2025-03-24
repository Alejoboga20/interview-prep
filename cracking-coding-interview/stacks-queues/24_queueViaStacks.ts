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
		if (MyQueue.isEmpty(this.entryStack)) {
			throw new Error('empty queue');
		}

		while (!MyQueue.isEmpty(this.entryStack)) {
			const topElement = this.entryStack.pop();
			this.auxStack.push(topElement!);
		}

		const bottomElement = this.auxStack.pop();

		while (!MyQueue.isEmpty(this.auxStack)) {
			const topElement = this.auxStack.pop();
			this.entryStack.push(topElement!);
		}

		return bottomElement;
	}

	/* peek(): T | undefined {} */

	static isEmpty(stack: any[]): boolean {
		const isEmpty = stack.length === 0;

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
