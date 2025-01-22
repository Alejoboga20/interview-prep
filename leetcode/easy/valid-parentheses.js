const specialChars = ['(', '[', '{'];

const isValidParentheses = (stringToCheck = '') => {
	const stack = [];

	for (let index; index < stringToCheck.length; index++) {
		const currentChar = stringToCheck[index];

		if (specialChars.includes(currentChar)) {
			stack.push(currentChar);
		} else if (currentChar === ')') {
			if (stack.pop() !== '(') return false;
		} else if (currentChar === ']') {
			if (stack.pop() !== '[') return false;
		} else if (currentChar === '}') {
			if (stack.pop() !== '{') return false;
		}
	}

	const isStackEmpty = stack.length === 0;

	return isStackEmpty;
};
