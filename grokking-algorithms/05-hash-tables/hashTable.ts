export class HashTable<K, V> {
	private buckets: Array<Array<[K, V]>>;
	private capacity: number;

	constructor(capacity: number = 10) {
		this.buckets = new Array(capacity).fill(null).map(() => []);
		this.capacity = capacity;
	}

	private hash(key: K): number {
		const stringKey = String(key);
		let hash = 0;
		for (let i = 0; i < stringKey.length; i++) {
			hash = (hash + stringKey.charCodeAt(i) * 31) % this.capacity;
		}
		return hash;
	}

	set(key: K, value: V): void {
		const index = this.hash(key);
		const bucket = this.buckets[index];

		for (let i = 0; i < bucket.length; i++) {
			if (bucket[i][0] === key) {
				bucket[i][1] = value;
				return;
			}
		}

		bucket.push([key, value]);
	}

	get(key: K): V | undefined {
		const index = this.hash(key);
		const bucket = this.buckets[index];

		for (let [storedKey, value] of bucket) {
			if (storedKey === key) return value;
		}

		return undefined;
	}

	delete(key: K): boolean {
		const index = this.hash(key);
		const bucket = this.buckets[index];

		for (let i = 0; i < bucket.length; i++) {
			if (bucket[i][0] === key) {
				bucket.splice(i, 1);
				return true;
			}
		}

		return false;
	}

	keys(): K[] {
		const keysArray: K[] = [];

		for (let bucket of this.buckets) {
			for (let [key] of bucket) {
				keysArray.push(key);
			}
		}

		return keysArray;
	}
}
