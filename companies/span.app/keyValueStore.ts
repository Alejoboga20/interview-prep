/* 
Implement a key-value store with time stamps. Implement the following methods:
get(key: string, timestamp: Date) -> any
set(key: string, timestamp: Date, value: any) -> void
getLatest(key: string) -> any

All the methods should have O(1) time complexity
*/

class TimeKeyValueStore {
	private store: Map<
		string,
		{
			latest: { timestamp: number; value: any };
			timestamps: Map<number, any>;
		}
	> = new Map();

	public setKey(key: string, timestamp: Date, value: any): void {
		const ts = timestamp.getTime();

		if (!this.store.get(key)) {
			this.store.set(key, {
				latest: { timestamp: ts, value },
				timestamps: new Map([[ts, value]]),
			});
			return;
		}

		const entry = this.store.get(key)!;
		entry.timestamps.set(ts, value);

		if (ts > entry.latest.timestamp) {
			entry.latest = { timestamp: ts, value };
		}
	}

	public get(key: string, timestamp: Date): any {
		const ts = timestamp.getTime();
		const entry = this.store.get(key);

		if (!entry) return null;

		const value = entry.timestamps.get(ts);

		if (!value) return null;

		return value;
	}

	public getLatest(key: string): any {
		const entry = this.store.get(key);

		if (!entry) return null;

		return entry.latest.value;
	}
}

const store = new TimeKeyValueStore();
store.setKey('key1', new Date(1), 'value1');
store.setKey('key1', new Date(2), 'value2');
store.setKey('key1', new Date(3), 'value3');
console.log(store.get('key1', new Date(1)));
console.log(store.get('key1', new Date(2)));
console.log(store.get('key1', new Date(3)));
console.log(store.getLatest('key1'));
