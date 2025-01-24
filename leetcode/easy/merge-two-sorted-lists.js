class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	append(val) {
		const newNode = new ListNode(val);
		if (!this.head) {
			this.head = newNode;
			return;
		}
		let current = this.head;
		while (current.next) {
			current = current.next;
		}
		current.next = newNode;
	}

	remove(val) {
		if (!this.head) return;

		if (this.head.val === val) {
			this.head = this.head.next;
			return;
		}

		let current = this.head;
		while (current.next && current.next.val !== val) {
			current = current.next;
		}

		if (current.next) {
			current.next = current.next.next;
		}
	}

	find(val) {
		let current = this.head;
		while (current) {
			if (current.val === val) return current;
			current = current.next;
		}
		return null;
	}

	printList() {
		let current = this.head;
		const values = [];
		while (current) {
			values.push(current.val);
			current = current.next;
		}
		console.log(values.join(' -> '));
	}
}

const firstList = new LinkedList();
const secondList = new LinkedList();

firstList.append(1);
firstList.append(2);
firstList.append(3);

secondList.append(2);
secondList.append(3);
secondList.append(5);

const mergeTwoLists = (
	firstList = new LinkedList(),
	secondList = new LinkedList()
) => {
	const firstPointer = firstList.head;
	const secondPointer = secondList.head;

	if (!firstPointer) return secondList;
	if (!secondPointer) return firstList;

	const mergedList = new LinkedList();

	return mergedList;
};

const mergedList = mergeTwoLists(firstList, secondList);
mergedList.printList();
