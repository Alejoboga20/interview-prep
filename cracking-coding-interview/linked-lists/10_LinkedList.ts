// 10. *Implement a Linked List*;

// Create the data structure with the corresponding initial functions:

export class ListNode<T> {
	value: T;
	next?: ListNode<T> | undefined;

	constructor(value: T, next?: ListNode<T> | undefined) {
		this.value = value;
		this.next = next;
	}

	public printNode() {
		console.log({ value: this.value, next: this.next });
	}
}

export class SinglyLinkedList<T> implements Iterable<T> {
	head: ListNode<T> | undefined;
	tail: ListNode<T> | undefined;
	length: number;

	constructor(head?: ListNode<T> | undefined) {
		this.head = head;
		this.length = 0;
	}

	[Symbol.iterator](): Iterator<T> {
		let current = this.head;

		return {
			next(): IteratorResult<T> {
				if (current) {
					const value = current.value;
					current = current.next;

					return { value, done: false };
				}
				return { value: undefined as any, done: true };
			},
		};
	}

	public getLength(): number {
		return this.length;
	}

	public print(): void {
		let current = this.head;
		let accumulator: T[] = [];

		while (current) {
			accumulator.push(current.value);
			current = current.next;
		}

		console.log(accumulator);
	}

	public push(value: T): void {
		this.length += 1;
		let current = this.head;
		const newNode = new ListNode(value);

		this.tail = newNode;

		if (!current) {
			this.head = newNode;
			return;
		}

		while (current) {
			if (!current.next) {
				current.next = newNode;
				return;
			}
			current = current.next;
		}
	}

	public find(value: T): ListNode<T> | undefined {
		let current = this.head;

		while (current) {
			if (current.value === value) {
				return current;
			}
			current = current.next;
		}

		return;
	}

	public removeValue(value: T): void {
		let current = this.head;
		let prev = undefined;

		if (!current) {
			console.log('Cannot remove from empty list');
			return;
		}

		if (current.value === value) {
			/* Deleting head */
			this.length -= -1;
			this.head = current.next;
			return;
		}

		prev = current;
		current = current.next;

		while (current) {
			if (current.value === value) {
				this.length -= -1;
				prev.next = current.next;

				if (!current.next) {
					this.tail = prev;
				}

				return;
			}
			prev = current;
			current = current.next;
		}
	}

	public visit(fn: (listNode: ListNode<T>, index: number) => void): void {
		let current = this.head;
		let index = 0;

		while (current) {
			fn(current, index);
			current = current.next;
			index++;
		}
	}

	public filter(
		predicate: (listNode: ListNode<T>) => boolean
	): SinglyLinkedList<T> {
		/* Time Complexity O(n) */
		const newList = new SinglyLinkedList<T>();
		let current = this.head;

		while (current) {
			const isPassingCondition = predicate(current);

			if (isPassingCondition) {
				newList.push(current.value);
			}
			current = current.next;
		}

		return newList;
	}

	public map<U>(transform: (value: T) => U): SinglyLinkedList<U> {
		/* Time Complexity O(n) */
		const newList = new SinglyLinkedList<U>();
		let current = this.head;

		while (current) {
			const newElement = transform(current.value);
			newList.push(newElement);

			current = current.next;
		}

		return newList;
	}

	public merge(list: SinglyLinkedList<T>): SinglyLinkedList<T> {
		if (!this.tail) return list;

		this.tail.next = list.head;
		this.tail = list.tail;

		return this;
	}
}

// const list = new SinglyLinkedList<number>();
// /* Create list */
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// list.push(5);
// list.push(6);
// list.print();

// /* Removing value */
// list.removeValue(3);
// list.print();

/* Iterator */
// for (const value of list) {
// 	console.log(value);
// }

// list.visit((value) => console.log(`List Node Value: ${value}`));
// /* Fitler odds */
// const filteredList = list.filter((value) => value % 2 === 0);
// filteredList.print();
// /* Doubling list */
// const doubledList = list.map((value) => value * 2);
// doubledList.print();
