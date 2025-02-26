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

		if (currentCounter > 1) {
			compressedString += `${currentElement}${currentCounter}`;
			currentCounter = 1;
		} else {
			compressedString += `${currentElement}`;
		}
	}

	console.log({ compressedString });

	return compressedString.length >= strLength ? str : compressedString;
};

console.log(stringCompression('aabcccccaaa'));
