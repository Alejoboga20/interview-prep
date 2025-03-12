// 8.  *Intersection*;

// Given two (singly) linked lists, determine if the two lists intersect.
// Return the first intersecting node. Note that the intersection is defined
// based on reference, not value.

import { SinglyLinkedList, ListNode } from './10_LinkedList';

export default function intersection<T>(
	list1: SinglyLinkedList<T>,
	list2: SinglyLinkedList<T>
): ListNode<T> | undefined {
	let intersectionNode: ListNode<T> | undefined = undefined;
	const set = new Set<ListNode<T>>();

	list1.visit((listNode) => {
		set.add(listNode);
	});

	list2.visit((listNode) => {
		if (set.has(listNode) && !intersectionNode) {
			intersectionNode = listNode;
		}
	});

	return intersectionNode;
}
