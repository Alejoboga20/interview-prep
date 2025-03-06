// 2.  *Return Kth to Last*:

// Implement an algorithm to find the kth to last element of a singly linked list.
// 1 -> 2 -> 3 -> 4 / k=2
// index = length - k

import { SinglyLinkedList, ListNode } from './10_LinkedList';

export type Node<T> = {
	value: T;
	next?: Node<T>;
};

export default function kthToLast<T>(
	list: SinglyLinkedList<T>,
	k: number
): ListNode<T> | undefined {
	const listLength = list.length;
	const kthPosition = listLength - k;
	let nodeToReturn: ListNode<T> | undefined;

	if (!listLength) return undefined;

	list.visit((node, index) => {
		if (index === kthPosition) {
			nodeToReturn = node;
		}
	});

	return nodeToReturn;
}
const linkedList = new SinglyLinkedList();
linkedList.push(1);
linkedList.push(5);
linkedList.push(1);
linkedList.push(4);
linkedList.print();
console.log(kthToLast(linkedList, 1));
