export const threeSum = (nums: number[], target: number): number[][] => {
	nums.sort((a, b) => a - b);

	const result: number[][] = [];

	for (let i = 0; i < nums.length - 2; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates

		let left = i + 1;
		let right = nums.length - 1;

		while (left < right) {
			const sum = nums[i] + nums[left] + nums[right];

			if (sum === target) {
				result.push([nums[i], nums[left], nums[right]]);
				while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
				while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates
				left++;
				right--;
			} else if (sum < target) {
				left++; // Increase the sum
			} else {
				right--; // Decrease the sum
			}
		}
	}

	return result;
};

// Example usage:
const nums = [1, 2, -1, 0, -2, 3, 4];
const target = 3;
console.log(threeSum(nums, target));
