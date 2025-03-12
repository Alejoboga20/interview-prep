// *Sum Lists*: You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the Vs digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.
// ```
// EXAMPLE
// Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.
// ```

// 6.  Suppose the digits are stored in forward order. Repeat the above problem.

// ```
// EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).Thatis,617 + 295
// Output:9 -> 1 -> 2,Thatis,912.
// ```

import { SinglyLinkedList, ListNode } from './10_LinkedList';

export default function sumListsForwardOrder(
	firstList: SinglyLinkedList<number>,
	secondList: SinglyLinkedList<number>
): SinglyLinkedList<number> {
	const sumList = new SinglyLinkedList<number>();
	const firstArr: number[] = [];
	const secondArr: number[] = [];

	firstList.visit((listNode) => {
		firstArr.push(listNode.value);
	});
	secondList.visit((listNode) => {
		secondArr.push(listNode.value);
	});

	const firstNumber = Number(firstArr.join(''));
	const secondNumber = Number(secondArr.join(''));
	const sumNumber = firstNumber + secondNumber;

	sumNumber
		.toString()
		.split('')
		.forEach((digit) => sumList.push(Number(digit)));

	return sumList;
}

const firstList = new SinglyLinkedList<number>();
firstList.push(6);
firstList.push(1);
firstList.push(7);
firstList.print();

const secondList = new SinglyLinkedList<number>();
secondList.push(2);
secondList.push(9);
secondList.push(5);
secondList.print();

const sumList = sumListsForwardOrder(firstList, secondList);
sumList.print();
