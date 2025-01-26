const removeElement = (nums = [], val = 0) => {
	let pointer = 0;

	for (let index = 0; index < nums.length; index++) {
		const current = nums[index];

		if (current !== val) {
			nums[pointer] = current;
			pointer++;
		}
	}

	return pointer;
};
