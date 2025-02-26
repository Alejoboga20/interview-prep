// 6. *String Compression*:

// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2blc5a3,
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

const stringCompression = (str: string): string => {
	let compressedString = '';
	let i = 0;

	const strLength = str.length;

	while (i < strLength) {
		let currentCounter = 1;
		const currentElement = str[i];

		for (let j = i + 1; j < strLength; j++) {
			const nextElement = str[j];

			if (nextElement === currentElement) {
				currentCounter++;
			} else {
				break;
			}
		}

		i += currentCounter;

		compressedString += `${currentElement}${currentCounter}`;
		currentCounter = 1;
	}

	return compressedString.length >= strLength ? str : compressedString;
};

const stringCompressionOn = (str: string): string => {
	let compressed = '';
	let currentChar = str[0];
	let counter = 0;

	for (let index = 0; index < str.length; index++) {
		const currentElement = str[index];

		if (currentElement === currentChar) {
			counter++;
		} else {
			compressed += currentChar + counter;
			currentChar = currentElement;
			counter = 1;
		}
	}
	compressed += currentChar + counter;

	return compressed.length < str.length ? compressed : str;
};

console.log(stringCompression('aabcccccaaa'));
console.log(stringCompressionOn('aabcccccaaa'));
console.log(stringCompressionOn('abcccccaaa'));
