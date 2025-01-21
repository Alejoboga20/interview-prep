/* 
Palindrome Number
Given an integer x, return true if x is a 
palindrome
, and false otherwise.
*/

const firstTest = 'Racecar';
const secondTest = 'ABCDDCBA';
const thirdTest = 'radar';
const fourthTest = 121;

const isPalindrome = (num = 0) => {
	if (num < 0) return false;

	const stringNum = String(num);

	for (let i = 0; i < Math.floor(stringNum.length / 2); i++) {
		if (stringNum[i] !== stringNum[stringNum.length - 1 - i]) {
			return false;
		}
	}
	return true;
};

console.log(isPalindrome(firstTest));
console.log(isPalindrome(secondTest));
console.log(isPalindrome(thirdTest));
console.log(isPalindrome(fourthTest));
