export const binarySearch = (orderedList: number[], target: number): number => {
	let leftIndex = 0;
	let rightIndex = orderedList.length - 1;
	let counter = 0;

	while (leftIndex <= rightIndex) {
		counter++;
		console.log(`Counter: ${counter}`);

		const middleIndex = Math.floor((rightIndex - leftIndex) / 2) + leftIndex;
		const middleElement = orderedList[middleIndex];

		if (middleElement === target) {
			return middleIndex;
		}
		if (middleElement > target) {
			rightIndex = middleIndex - 1;
		} else {
			leftIndex = middleIndex + 1;
		}
	}

	return -1;
};

const orderedList = [4, 6, 9, 13, 14, 18, 21, 24, 38];
console.log(binarySearch(orderedList, 13));
console.log(binarySearch(orderedList, 21));
