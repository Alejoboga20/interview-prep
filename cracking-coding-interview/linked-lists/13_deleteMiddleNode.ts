// 3. *Delete Middle Node*:

// Implement an algorithm to delete a node in the middle
// (i.e., any node but the first and last node, not necessarily the exact middle)
// of a singly linked list, given only access to that node.

// ```
// EXAMPLE
// Input: the node c from the linked list a - >b- >c - >d - >e- >f
// Result: nothing is returned, but the new linked list looks like a->b->d->e->f Hints: #72
// ```

import { SinglyLinkedList, ListNode } from './10_LinkedList';

export default function deleteMiddleNode<T>(
	list: SinglyLinkedList<T>,
	position: number
): void {
	const listLength = list.getLength();
	if (position < 0 || position >= listLength - 1 || position === 0) {
		throw new Error('invalid position argument');
	}

	if (!list.head) {
		throw new Error('empty list');
	}

	let counter = 0;
	let currentNode: ListNode<T> | undefined = list.head;

	while (currentNode) {
		if (counter + 1 === position) {
			currentNode.next = currentNode.next?.next;
			break;
		}
		counter++;
		currentNode = currentNode.next;
	}
}

const singlyLinkedList = new SinglyLinkedList<string>();
singlyLinkedList.push('a');
singlyLinkedList.push('b');
singlyLinkedList.push('c');
singlyLinkedList.push('d');
singlyLinkedList.push('e');
singlyLinkedList.push('f');
singlyLinkedList.print();

deleteMiddleNode(singlyLinkedList, 5);
singlyLinkedList.print();
