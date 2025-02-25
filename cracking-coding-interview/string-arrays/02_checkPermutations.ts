// 2. *Check Permutation*:

// Given two strings, write a method to decide if one is a permutation of the other.

export default function checkPermutations(s1: string, s2: string): boolean {
	let isPermutation = true;

	const lengthFirstStr = s1.length;
	const lengthSecondStr = s2.length;

	if (lengthFirstStr !== lengthSecondStr) {
		isPermutation = false;

		return isPermutation;
	}

	const mapChar = new Map<string, number>();

	for (let i = 0; i < lengthFirstStr; i++) {
		/* create a map to count the amount of ocurrences in the string */
		const currentChar = s1[i];
		const mapElement = mapChar.get(currentChar);

		if (mapElement) {
			mapChar.set(currentChar, mapElement + 1);
		} else {
			mapChar.set(currentChar, 1);
		}
	}

	for (let j = 0; j < lengthSecondStr; j++) {
		/* use second string to remove elements from map */
		const currentChar = s2[j];
		const mapElement = mapChar.get(currentChar);

		if (!mapElement) {
			isPermutation = false;
			break;
		} else {
			mapChar.set(currentChar, mapElement - 1);
		}
	}

	mapChar.forEach((entry) => {
		if (entry !== 0) {
			isPermutation = false;
			return;
		}
	});

	return isPermutation;
}

console.log(checkPermutations('Hello World!', 'World! Hello'));
console.log(checkPermutations('Hello World!', 'World! Hell'));
console.log(checkPermutations('Hell', 'lleh'));
