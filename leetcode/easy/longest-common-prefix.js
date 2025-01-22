const firstTest = ['flower', 'flow', 'flight'];
const secondTest = ['dog', 'cat', 'flight'];
const thirdTest = ['doggy', 'dogg', 'doggy'];
const fourthTest = ['doggy', 'd', 'doggy'];

const longestCommonPrefix = (stringsArray = []) => {
	let commonPrefix = '';

	if (stringsArray.length === 0) return commonPrefix;

	/* 1. find the shortest string in the array */
	const shortestString = Math.min(...stringsArray.map((s) => s.length));

	/* 2. iterate and check if the character is present on all elements of the array */
	for (let index = 0; index < shortestString; index++) {
		const currentChar = stringsArray[0][index];

		const isCommonChar = stringsArray.every((s) => s[index] === currentChar);

		if (isCommonChar) {
			commonPrefix += currentChar;
		} else {
			break;
		}
	}

	return commonPrefix;
};

console.log(longestCommonPrefix(firstTest));
console.log(longestCommonPrefix(secondTest));
console.log(longestCommonPrefix(thirdTest));
console.log(longestCommonPrefix(fourthTest));
