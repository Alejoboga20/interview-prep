// 9. *Loop Detection*:

// Given a circular linked list, implement an algorithm that returns the node
// at the beginning of the loop.

// ```
// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node's next pointer
// points to an earlier node, so as to make a loop in the linked list.
// ```

// ```
// EXAMPLE
// Input: A->8->C->D->E-> C[thesameCasearlier] Output: C
// Hints: #50, #69, #83, #90
// ```

import { SinglyLinkedList, ListNode } from './10_LinkedList';

export default function detectLoop<T>(
	list: SinglyLinkedList<T>
): ListNode<T> | undefined {
	const set = new Set<ListNode<T>>();
	let loopNode: ListNode<T> | undefined = undefined;

	list.visit((listNode) => {
		if (set.has(listNode)) {
			loopNode = listNode;
			return;
		}
		set.add(listNode);
	});

	return loopNode;
}
