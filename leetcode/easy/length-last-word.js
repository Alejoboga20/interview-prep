/* 
Length of Last Word

Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

Constraints:
1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.
*/
const lengthOfLastWord = (sentence = '') => {
	const pieces = sentence.trim().split(' ');
	const amountOfPieces = pieces.length;
	const lastWordLength = pieces[amountOfPieces - 1].length;

	return lastWordLength;
};

console.log(lengthOfLastWord('luffy is still joyboy'));
console.log(lengthOfLastWord('   fly me   to   the moon  '));

const lengthOfLastWordWithoutMethods = (sentence = '') => {
	/* 
    We need to implement a loop starting at the end of the string
    We count the characters until we hit an space
  */
	let lastWordLength = 0;
	for (let index = sentence.length - 1; index >= 0; index--) {
		const currentChar = sentence[index];

		if (currentChar === ' ') {
			if (lastWordLength > 0) {
				break;
			}
			continue;
		} else {
			lastWordLength++;
		}
	}

	return lastWordLength;
};

console.log(lengthOfLastWordWithoutMethods('luffy is still joyboy'));
console.log(lengthOfLastWordWithoutMethods('   fly me   to   the moon  '));
