/* 
Time Complexity:
Best Case: O(n log n)
Worst Case: O(n log n)
Average Case: O(n log n)
*/

export const mergesort = (arr: number[]): number[] => {
	if (arr.length <= 1) return arr; // base case

	const middle = Math.floor(arr.length / 2);
	const left = mergesort(arr.slice(0, middle));
	const right = mergesort(arr.slice(middle));

	return merge(left, right);
};

const merge = (left: number[], right: number[]): number[] => {
	let sortedArray: number[] = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			sortedArray.push(left[leftIndex]);
			leftIndex++;
		} else {
			sortedArray.push(right[rightIndex]);
			rightIndex++;
		}
	}

	while (leftIndex < left.length) {
		sortedArray.push(left[leftIndex]);
		leftIndex++;
	}
	while (rightIndex < right.length) {
		sortedArray.push(right[rightIndex]);
		rightIndex++;
	}

	return sortedArray
		.concat(left.slice(leftIndex))
		.concat(right.slice(rightIndex));
};
