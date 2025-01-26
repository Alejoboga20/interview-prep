/* 
Search Insert Position
Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
*/
const findInsertPostion = (nums = [], target) => {
	let insertPosition = 0;

	for (index = 0; index < nums.length; index++) {
		const prevNumber = nums[index - 1];
		const nextNumber = nums[index + 1];
		const current = nums[index];

		if (
			prevNumber &&
			prevNumber < target &&
			nextNumber &&
			nextNumber > target
		) {
			console.log(`found middle target: ${target}, index: ${index}`);
			insertPosition = index;

			return insertPosition;
		}

		if (!prevNumber && nextNumber > target && current > target) {
			console.log(`found start target: ${target}, index: ${index}`);
			insertPosition = index;

			return insertPosition;
		}

		if (!nextNumber && prevNumber < target) {
			console.log(`found end target: ${target}, index: ${index}`);
			insertPosition = index + 1;

			return insertPosition;
		}
	}
};

const searchWithBinarySearch = (nums = [], target) => {
	let left = 0;
	let right = nums.length - 1;
	let pivot;

	while (left <= right) {
		pivot = Math.floor((left + right) / 2);
		const element = nums[pivot];

		if (element === target) return pivot;

		if (element < target) left = pivot + 1;
		else return (right = pivot - 1);
	}

	return nums[pivot] < target ? pivot + 1 : pivot;
};

console.log(findInsertPostion([1, 3, 5, 6], 0));
console.log(findInsertPostion([1, 3, 5, 6], 5));
console.log(findInsertPostion([1, 3, 5, 6], 2));
console.log(findInsertPostion([1, 3, 5, 6], 7));

console.log(searchWithBinarySearch([1, 3, 5, 6], 0));
console.log(searchWithBinarySearch([1, 3, 5, 6], 5));
console.log(searchWithBinarySearch([1, 3, 5, 6], 2));
console.log(searchWithBinarySearch([1, 3, 5, 6], 7));
