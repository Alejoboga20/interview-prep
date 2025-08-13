export class Node<T> {
	value: T;
	next: Node<T> | null;

	constructor(value: T, next: Node<T> | null = null) {
		this.value = value;
		this.next = next;
	}
}

export class SinglyLinkedList<T> {
	private head: Node<T> | null;
	private tail: Node<T> | null;
	private length: number = 0;

	constructor() {
		this.head = null;
		this.tail = null;
	}

	// O(1)
	getLength(): number {
		const length = this.length;

		return length;
	}

	// O(n)
	traverse(): void {
		let current = this.head;
		let counter = 0;

		while (current) {
			console.log(`Value: ${current.value} - Position: ${counter}`);

			current = current?.next;
			counter++;
		}
	}

	// O(1)
	push(value: T): void {
		const newNode = new Node(value);

		if (!this.tail) {
			this.head = newNode;
			this.tail = newNode;
			this.length++;
			return;
		}

		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
	}

	// O(n)
	pop() {
		if (!this.head) return null;

		if (this.head === this.tail) {
			const value = this.head.value;
			this.head = null;
			this.tail = null;

			this.length--;
			return value;
		}

		let prev = this.head;
		let current = this.head.next!;

		while (current.next) {
			prev = current;
			current = current.next;
		}

		prev.next = null;
		this.tail = prev;
		this.length--;

		const value = current.value;

		return value;
	}
}
