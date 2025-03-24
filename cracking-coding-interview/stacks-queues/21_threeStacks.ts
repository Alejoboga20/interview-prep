// 1. *Three in One*: Describe how you could use a single array to implement three stacks.
/* 
stackNum: indicates the stack
value: indicate the value to be pushed in the array
*/

export default class ThreeStacks<T> {
	private array: Array<T | undefined>;

	stackLength: number;

	constructor(arrayLength: number) {
		this.array = Array(arrayLength);
		this.stackLength = Math.floor(arrayLength / 3);
	}

	push(stackNum: number, value: T): void {
		for (let i = 0; i < this.stackLength; i++) {
			const index = i + this.stackLength * stackNum;
			if (!this.array[index]) {
				this.array[index] = value;

				return;
			}
		}
	}

	pop(stackNum: number): T | undefined {
		for (let i = this.stackLength - 1; i >= 0; i--) {
			const index = i + this.stackLength * stackNum;
			if (this.array[index]) {
				const result = this.array[index];
				this.array[index] = undefined;

				return result;
			}
		}
	}

	peek(stackNum: number): T | undefined {
		for (let i = this.stackLength - 1; i >= 0; i--) {
			const index = i + this.stackLength * stackNum;
			if (this.array[index]) {
				const result = this.array[index];
				return result;
			}
		}
	}
}
