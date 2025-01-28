/* 
SQRT(x)
Given a non-negative integer x, 
return the square root of x rounded down to the nearest integer. 
The returned integer should be non-negative as well.
You must not use any built-in exponent function or operator.
For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

Example 1:
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.

Example 2:
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
*/
/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
	let sqrt = 0;

	if (x === 0) {
		sqrt = 0;
		return sqrt;
	}

	const integers = Array.from({ length: x }, (_, index) => index + 1);

	for (let index = 0; index < integers.length; index++) {
		const currentNumber = integers[index];
		const nextNumber = integers[index + 1] || 0;

		const square = currentNumber * currentNumber;
		const nextSquare = nextNumber * nextNumber;

		if (square === x) {
			sqrt = currentNumber;
		} else if (x > square && x < nextSquare) {
			sqrt = currentNumber;
		}

		if (sqrt !== 0) {
			return sqrt;
		}
	}

	return sqrt;
};

console.log(mySqrt(26));
console.log(mySqrt(25));
console.log(mySqrt(16));
console.log(mySqrt(8));
console.log(mySqrt(4));
console.log(mySqrt(1));
console.log(mySqrt(0));

const mySqrtWithBinarySearch = (x = 0) => {
	let left = 0;
	let right = x;
	let pivot = 0;

	while (left <= right) {
		pivot = Math.floor((left + right) / 2);
		const square = pivot * pivot;
		if (square === x) {
			return pivot;
		}
		if (square < x) {
			const nextSquare = (pivot + 1) * (pivot + 1);
			if (nextSquare > x) {
				return pivot;
			}

			left = pivot + 1;
		} else {
			right = pivot - 1;
		}
	}
};

console.log(mySqrtWithBinarySearch(26));
console.log(mySqrtWithBinarySearch(25));
console.log(mySqrtWithBinarySearch(16));
console.log(mySqrtWithBinarySearch(8));
console.log(mySqrtWithBinarySearch(4));
console.log(mySqrtWithBinarySearch(1));
console.log(mySqrtWithBinarySearch(0));
