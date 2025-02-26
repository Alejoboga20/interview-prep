// 8. *Zero Matrix*:

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

/* 
Example

Input
[1, 0, 3]
[4, 5, 6]
[0, 8, 9]
[7, 8, 9]

Output
[0, 0, 0]
[0, 0, 6]
[0, 0, 0]
[0, 0, 9]
*/

type Matrix = number[][];

export const zeroMatrix = (matrix: Matrix) => {
	const coordinates: Array<{ x: number; y: number }> = [];

	const rowsLength = matrix.length;
	const colsLength = matrix[0].length;

	console.log('before');
	console.table(matrix);

	for (let row = 0; row < rowsLength; row++) {
		for (let col = 0; col < colsLength; col++) {
			const currentElement = matrix[row][col];

			if (currentElement === 0) {
				coordinates.push({ x: row, y: col });
			}
		}
	}

	coordinates.forEach((coord) => {
		const { x, y } = coord;

		matrix[x] = Array(colsLength).fill(0);

		for (let row = 0; row < rowsLength; row++) {
			matrix[row][y] = 0;
		}
	});

	console.log('after');
	console.table(matrix);
};

zeroMatrix([
	[1, 0, 3],
	[4, 5, 6],
	[7, 8, 9],
	[7, 8, 9],
]);

zeroMatrix([
	[1, 0, 3],
	[4, 5, 6],
	[0, 8, 9],
	[7, 8, 9],
]);
