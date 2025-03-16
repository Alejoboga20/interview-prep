/*  
Write a recursive function to count the number of items in a list

Example:
arr = [1, 2 ,6, 2, 9, 12] -> count = 6
 */
export const countItems = (numberArr: number[]): number => {
	if (numberArr.length === 0) {
		// base case
		return 0;
	}

	// recursive case
	return 1 + countItems(numberArr.slice(1));
};

const arr = [1, 2, 6, 2, 9];
console.log(countItems(arr));
