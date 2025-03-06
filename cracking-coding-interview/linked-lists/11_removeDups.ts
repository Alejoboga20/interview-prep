// 1. *Remove Dups*:

// Write code to remove duplicates from an unsorted linked list. FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?
//
// 1 -> 2 -> 2-> 2 -> 4

import { SinglyLinkedList, ListNode } from './10_LinkedList';

const linkedList = new SinglyLinkedList<number>();
linkedList.push(1);
linkedList.push(2);
linkedList.push(2);
linkedList.push(2);
linkedList.push(4);

export default function removeDups<T>(
	list: SinglyLinkedList<T>
): SinglyLinkedList<T> {
	let pointer = list.head;

	if (!pointer) return list;

	const set: Set<T> = new Set();

	while (pointer) {
		const next = pointer.next;

		if (!next) {
			break;
		}

		if (set.has(next.value)) {
			pointer.next = next.next;
			continue;
		}

		set.add(next.value);
		pointer = pointer.next;
	}

	return list;
}

linkedList.print();
const listWithoutDups = removeDups(linkedList);
listWithoutDups.print();
