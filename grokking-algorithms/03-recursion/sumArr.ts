/* 
Create a function that receives an array of numbers an returns the sum of them.
Use recursion

Example:
arr = [1, 2 ,3] -> sum = 6
*/
export const sumArr = (numberArr: number[]): number => {
	if (numberArr.length === 0) {
		return 0; // Base case: empty array returns 0
	}

	return numberArr[0] + sumArr(numberArr.slice(1)); // Recursive case: sum first element + rest of array
};

const numberArr = [2, 4, 6]; // Expected result: 12
console.log(sumArr(numberArr));
