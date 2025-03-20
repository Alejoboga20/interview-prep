export class Queue<T> {
	private size?: number;
	private data: T[];

	constructor(size?: number) {
		this.size = size;
		this.data = [];
	}

	public dequeue(): T {
		if (this.data.length === 0) {
			throw new Error('Queue is empty');
		}

		const firstElement = this.data.shift()!;
		return firstElement;
	}

	public enqueue(element: T): void {
		if (!this.hasSlots()) {
			throw new Error('Queue is Full');
		}

		this.data.push(element);
	}

	public printQueue(): void {
		let accumulator: string = '';

		for (const element of this.data) {
			accumulator += `[ ${element} ]`;
		}
		console.log(
			`
      Queue: ${accumulator} - Max Size: ${this.size ? this.size : 'dynamic'}
      Occupied Slots: ${this.data.length}
      `
		);
	}

	private hasSlots(): boolean {
		if (!this.size) {
			return true;
		}

		const hasSlots = this.size > this.data.length;
		return hasSlots;
	}
}

const queue = new Queue(10);
queue.enqueue(1);
queue.enqueue(19);
queue.enqueue(4);
queue.enqueue(2);
queue.enqueue(2);
queue.enqueue(7);
queue.printQueue();
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.printQueue();
