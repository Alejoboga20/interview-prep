// 5. *Sum Lists*: You have two numbers represented by a linked list,
// where each node contains a single digit. The digits are stored in reverse order,
// such that the Vs digit is at the head of the list.
// Write a function that adds the two numbers and returns the sum as a linked list.

// ```
// EXAMPLE
// Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.
// ```

import { SinglyLinkedList, ListNode } from './10_LinkedList';

export default function sumLists(
	firstList: SinglyLinkedList<number>,
	secondList: SinglyLinkedList<number>
): SinglyLinkedList<number> {
	const sumList = new SinglyLinkedList<number>();

	let firstPointer: ListNode<number> | undefined = firstList.head;
	let secondPointer: ListNode<number> | undefined = secondList.head;

	let carrier = 0;

	while (firstPointer || secondPointer) {
		const firstValue = firstPointer ? firstPointer.value : 0;
		const secondValue = secondPointer ? secondPointer.value : 0;

		let sumValue = firstValue + secondValue + carrier;
		carrier = 0;

		if (sumValue >= 10) {
			carrier = 1;
			sumValue = sumValue - 10;
		}
		sumList.push(sumValue);

		firstPointer = firstPointer?.next;
		secondPointer = secondPointer?.next;
	}

	if (carrier !== 0) {
		sumList.push(carrier);
	}

	return sumList;
}
const firstList = new SinglyLinkedList<number>();
firstList.push(7);
firstList.push(1);
firstList.push(6);
firstList.print();

const secondList = new SinglyLinkedList<number>();
secondList.push(5);
secondList.push(9);
secondList.push(8);
secondList.print();

const sumList = sumLists(firstList, secondList);
sumList.print();

export const sumListWithAccumulator = (
	firstList: SinglyLinkedList<number>,
	secondList: SinglyLinkedList<number>
): SinglyLinkedList<number> => {
	const sumList = new SinglyLinkedList<number>();
	const firstArr: number[] = [];
	firstList.visit((listNode) => {
		firstArr.unshift(listNode.value);
	});
	const firstNumber = Number(firstArr.join(''));

	const seccondArray: number[] = [];
	secondList.visit((listNode) => {
		seccondArray.unshift(listNode.value);
	});
	const secondNumber = Number(seccondArray.join(''));

	const sumNumber = (firstNumber + secondNumber)
		.toString()
		.split('')
		.map((digit) => Number(digit))
		.reverse()
		.forEach((digit) => sumList.push(digit));

	return sumList;
};

const sumListWithAcc = sumListWithAccumulator(firstList, secondList);
sumListWithAcc.print();
