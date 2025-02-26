// 7. *Rotate Matrix*:

// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

type Matrix = number[][];

/* 
Example

Input
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]

Output
[7, 4, 1]
[8, 5, 2]
[9, 6, 3]

0,0 -> 0,2
0,1 -> 1,2
0,2 -> 2,2

1,0 -> 0,1
1,1 -> 1,1
1,2 -> 2,1

2,0 -> 0,0
2,1 -> 1,0
2,2 -> 2,0
*/

const rotateMatrix = (matrix: Matrix) => {
	const newMatrix: Matrix = Array(matrix.length)
		.fill(0)
		.map(() => []);

	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix.length; col++) {
			const newRow = col;
			const newCol = matrix.length - 1 - row;

			newMatrix[newRow][newCol] = matrix[row][col];
		}
	}

	console.table({ matrix });
	console.table({ newMatrix });
};

rotateMatrix([
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]);

const rotateMatrixInPlace = (matrix: Matrix) => {
	for (let row = 0; row < matrix.length; row++) {
		for (let col = row + 1; col < matrix.length; col++) {
			const temp = matrix[row][col];
			matrix[row][col] = matrix[col][row];
			matrix[col][row] = temp;
		}
	}

	matrix.forEach((row) => row.reverse());
	console.table({ matrix });
};

rotateMatrixInPlace([
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]);
