class MinHeap {
	private heap: number[] = [];

	private getParentIndex(index: number): number | null {
		return index <= 0 ? null : Math.floor((index - 1) / 2);
	}

	private getLeftChildIndex(index: number): number {
		return 2 * index + 1;
	}

	private getRightChildIndex(index: number): number {
		return 2 * index + 2;
	}

	private swap(index1: number, index2: number): void {
		[this.heap[index1], this.heap[index2]] = [
			this.heap[index2],
			this.heap[index1],
		];
	}

	insert(value: number): void {
		this.heap.push(value);
		this.heapifyUp();
	}

	private heapifyUp(): void {
		let index = this.heap.length - 1;
		let parentIndex = this.getParentIndex(index);

		while (parentIndex !== null && this.heap[parentIndex] > this.heap[index]) {
			this.swap(parentIndex, index);
			index = parentIndex;
			parentIndex = this.getParentIndex(index);
		}
	}

	extractMin(): number | undefined {
		if (this.heap.length === 0) return undefined;
		if (this.heap.length === 1) return this.heap.pop();

		const min = this.heap[0];
		this.heap[0] = this.heap.pop()!;
		this.heapifyDown();
		return min;
	}

	private heapifyDown(): void {
		let index = 0;
		const length = this.heap.length;

		while (true) {
			const leftChildIndex = this.getLeftChildIndex(index);
			const rightChildIndex = this.getRightChildIndex(index);
			let smallest = index;

			if (
				leftChildIndex < length &&
				this.heap[leftChildIndex] < this.heap[smallest]
			) {
				smallest = leftChildIndex;
			}

			if (
				rightChildIndex < length &&
				this.heap[rightChildIndex] < this.heap[smallest]
			) {
				smallest = rightChildIndex;
			}

			if (smallest === index) break;

			this.swap(index, smallest);
			index = smallest;
		}
	}

	peek(): number | undefined {
		return this.heap[0];
	}
}

const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(8);

console.log(minHeap.peek());
console.log(minHeap.extractMin());
console.log(minHeap.peek());
