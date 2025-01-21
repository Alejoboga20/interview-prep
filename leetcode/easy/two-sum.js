/* 
Two sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/
const numsArray = [2, 7, 11, 15];
const target = 9;

const twoSum = (nums = [], target) => {
	/* Solution O(n2) */
	for (let i = 0; i < nums.length; i++) {
		const firstElement = nums[i];

		for (let j = i + 1; j < nums.length; j++) {
			const secondElement = nums[j];
			const sum = firstElement + secondElement;

			if (sum === target) {
				return {
					firstElementIndex: i,
					secondElementIndex: j,
					firstElement,
					secondElement,
				};
			}
		}
	}
};

console.log(twoSum(numsArray, target));
