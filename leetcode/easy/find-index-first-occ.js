/* 
Find the index of the first ocurrence in a string
Given two strings needle and haystack, 
return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
*/

const findFirstOccurrenceInString = (haystack = '', needle = '') => {
	let indexOfFirstOcurrence = -1;
	const needleLength = needle.length;
	const haystackLength = haystack.length;

	for (index = 0; index < haystackLength; index++) {
		const haystackSlice = haystack.slice(index, needleLength + index);

		if (haystackSlice === needle) {
			indexOfFirstOcurrence = index;
			break;
		}
	}

	return indexOfFirstOcurrence;
};

console.log(findFirstOccurrenceInString('dadbutsadsad', 'sad'));
console.log(findFirstOccurrenceInString('leetcode', 'sad'));
console.log(findFirstOccurrenceInString('leetcode', 'code'));
