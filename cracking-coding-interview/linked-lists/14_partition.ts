// 4. *Partition*:

// Write code to partition a linked list around a value x,
// such that all nodes less than x come before all nodes greater than or equal to x.
// If x is contained within the list, the values of x only need to be after the elements
// less than x (see below). The partition element x can appear anywhere in the
// "right partition"; it does not need to appear between the left and right partitions.

// ```
// EXAMPLE
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1[partition=5]
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
// ```

import { SinglyLinkedList } from './10_LinkedList';

export default function partition<T>(
	list: SinglyLinkedList<T>,
	x: T
): SinglyLinkedList<T> {
	const leftList = list.filter((listNode) => listNode.value < x);
	const rightList = list.filter((listNode) => listNode.value >= x);

	return leftList.merge(rightList);
}

const list = new SinglyLinkedList<number>();
list.push(3);
list.push(5);
list.push(8);
list.push(5);
list.push(10);
list.push(2);
list.push(1);

const partedList = partition(list, 3);
partedList.print();
