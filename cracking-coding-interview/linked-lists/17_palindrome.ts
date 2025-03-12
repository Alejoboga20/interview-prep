// 7. *Palindrome*:

// Implement a function to check if a linked list is a palindrome.

import { SinglyLinkedList, ListNode } from './10_LinkedList';

export default function isPalindrome<T>(list: SinglyLinkedList<T>): boolean {
	let word = '';

	list.visit((listNode) => {
		word += listNode.value;
	});

	for (let index = 0; index < word.length / 2; index++) {
		if (word[index] !== word[word.length - 1 - index]) {
			return false;
		}
	}

	return true;
}
