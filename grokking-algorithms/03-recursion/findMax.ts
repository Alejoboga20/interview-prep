/*  
Write a recursive function to find the maximum number in a list.

Example:
arr = [1, 2 ,6, 2, 9, 12] -> max = 12
 */
export const findMax = (numberArr: number[]): number => {
	if (numberArr.length === 1) {
		return numberArr[0];
	}

	const maxOfRest = findMax(numberArr.slice(1));

	return numberArr[0] > maxOfRest ? numberArr[0] : maxOfRest;
};

console.log(findMax([1, 2, 6, 2, 9, 12])); // Output: 12
