// 1. *Is Unique*:

// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

const isUnique = (str: string): boolean => {
	let hasUniqueChars = true;
	const charSet: Set<string> = new Set();
	const strLength = str.length;

	for (let i = 0; i < strLength; i++) {
		const currentElement = str[i];

		if (charSet.has(currentElement)) {
			hasUniqueChars = false;
			break;
		} else {
			charSet.add(currentElement);
		}
	}

	return hasUniqueChars;
};

const isUniqueWithoutDataStructures = (str: string): boolean => {
	let hasUniqueChars = true;
	const strLength = str.length;

	for (let i = 0; i < strLength; i++) {
		const firstElement = str[i];

		for (let j = i + 1; j < strLength; j++) {
			const secondElement = str[j];

			if (secondElement === firstElement) {
				hasUniqueChars = false;
				break;
			}
		}
	}

	return hasUniqueChars;
};

console.log(isUnique('asdf'));
console.log(isUnique('Hello World'));

console.log(isUniqueWithoutDataStructures('asdf'));
console.log(isUniqueWithoutDataStructures('Hello World'));
