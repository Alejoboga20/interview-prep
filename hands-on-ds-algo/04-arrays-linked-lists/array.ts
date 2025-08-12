export class FixedSizeArray<T> {
	private size: number;
	private data: T[];

	constructor(size: number, defaultValue: T) {
		if (size <= 0) throw new Error('Size must be a positive integer');

		this.size = size;

		this.data = Array.from({ length: size }, () => defaultValue);
	}

	private validateIndex(index: number): void {
		if (index >= this.size) {
			throw new Error(
				`Can not access index of ${index} in an array of size ${this.size}`
			);
		}
	}

	get(index: number): T {
		this.validateIndex(index);

		const element = this.data[index];

		return element;
	}

	set(index: number, value: T): void {
		this.validateIndex(index);

		this.data[index] = value;
	}
}

const array = new FixedSizeArray(5, { value: 'hello' });
