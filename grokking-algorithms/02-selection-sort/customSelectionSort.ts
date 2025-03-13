const findMinIndex = (arr: number[]): number => {
	let minIndex = 0;

	for (let index = 0; index < arr.length; index++) {
		const element = arr[index];
		const minElement = arr[minIndex];

		if (element < minElement) {
			minIndex = index;
		}
	}

	return minIndex;
};

export const customSelectionSort = <T>(
	unsortedArray: T[],
	sortingFn: (arr: T[]) => number
): T[] => {
	const orderedArray: T[] = [];
	const copyArray = [...unsortedArray];

	while (copyArray.length > 0) {
		const sortedIndex = sortingFn(copyArray);
		const sortedElement = copyArray.splice(sortedIndex, 1)[0];
		orderedArray.push(sortedElement);
	}

	return orderedArray;
};

const numberArray = [5, -1, 3, 6, 2, 10, 1, 0];
console.log(customSelectionSort(numberArray, findMinIndex));
