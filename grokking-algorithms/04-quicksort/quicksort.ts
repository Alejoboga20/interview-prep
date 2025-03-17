export const quicksort = (arr: number[] = []): number[] => {
	if (arr.length < 2) {
		// base case
		return arr;
	}

	const pivot = arr[0];
	const less = arr.slice(1).filter((element) => element <= pivot);
	const greater = arr.slice(1).filter((element) => element > pivot);

	// recursive case
	return quicksort(less).concat([pivot]).concat(quicksort(greater));
};

export const quicksortWithCustomPivot = (arr: number[]): number[] => {
	const arrLength = arr.length;

	if (arrLength < 2) {
		return arr;
	}

	const pivotIndex = Math.floor(arrLength / 2);
	const pivot = arr[pivotIndex];

	const less = arr.filter(
		(element, index) => index !== pivotIndex && element <= pivot
	);
	const greater = arr.filter(
		(element, index) => index !== pivotIndex && element > pivot
	);

	return quicksort(less).concat([pivot]).concat(quicksort(greater));
};

console.log(quicksort([10, 5, 2, 3]));
console.log(quicksortWithCustomPivot([10, 5, 2, 3]));
console.log(quicksort([10, 5, 2, 32, 13, 1, 15, 345, 23]));
console.log(quicksortWithCustomPivot([10, 5, 2, 32, 13, 1, 15, 345, 23]));
