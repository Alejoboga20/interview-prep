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

console.log(quicksort([10, 5, 2, 3]));
console.log(quicksort([10, 5, 2, 32, 13, 1, 15, 345, 23]));
