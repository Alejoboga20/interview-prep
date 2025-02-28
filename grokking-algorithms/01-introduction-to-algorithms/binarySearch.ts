export const binarySearch = (item: number, sortedArray: number[]) => {
	let low = 0;
	let high = sortedArray.length - 1;
	let steps = 0;

	while (low <= high) {
		steps++;
		console.log({ steps });

		const middle = Math.trunc((high + low) / 2);
		const guess = sortedArray[middle];

		if (guess === item) {
			return { itemPosition: middle, item };
		}
		if (guess > item) {
			high = middle - 1;
		} else {
			low = middle + 1;
		}
	}

	return { itemPosition: -1, item };
};

const sortedArray = [1, 3, 5, 6, 7, 9, 11, 14, 14, 16, 20, 22, 29];
console.log(binarySearch(20, sortedArray));
