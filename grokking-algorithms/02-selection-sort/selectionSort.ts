const findMinIndex = (arr: number[]): number => {
	if (arr.length === 0) {
		throw new Error('empty array');
	}

	let minIndex = 0;

	for (let index = 0; index < arr.length; index++) {
		const currentElement = arr[index];
		const minElement = arr[minIndex];

		if (currentElement < minElement) {
			minIndex = index;
		}
	}

	return minIndex;
};

export const selectionSort = (arr: number[]): number[] => {
	const sortedArray: number[] = [];
	const arrayCopy = [...arr];

	if (arr.length === 0) {
		throw new Error('empty array');
	}

	while (arrayCopy.length > 0) {
		const minIndex = findMinIndex(arrayCopy);
		const minValue = arrayCopy.splice(minIndex, 1)[0];
		sortedArray.push(minValue);
	}

	return sortedArray;
};

const numberArray = [5, -1, 3, 6, 2, 10, 1, 0];
console.log(selectionSort(numberArray));
