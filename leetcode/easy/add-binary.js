/* 
Add Binary
Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/
const addBinary = (a = '', b = '') => {
	let left = a.length - 1;
	let right = b.length - 1;
	let carry = 0;
	let result = [];

	while (left >= 0 || right >= 0) {
		const ln = a[left] || '0';
		const rn = b[right] || '0';

		if (ln === '1' && rn === '1') {
			result.unshift(carry);
			carry = 1;
		} else if (ln === '0' && rn === '0') {
			result.unshift(carry);
			carry = 0;
		} else if (carry) {
			result.unshift(0);
			carry = 1;
		} else {
			result.unshift(1);
			carry = 0;
		}

		left--;
		right--;
	}

	if (carry) {
		result.unshift(1);
	}

	return result.join();
};
