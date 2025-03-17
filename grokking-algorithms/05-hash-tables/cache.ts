const CACHE = new Map<string, unknown>();

const getResourceFromRemoteStore = () => {
	return new Promise((resolve) => {
		resolve(Math.random());
	});
};

export const getResource = async (key: string): Promise<any> => {
	const resource = CACHE.get(key);

	if (resource) {
		return resource;
	} else {
		const remoteResource = await getResourceFromRemoteStore();
		CACHE.set(key, remoteResource);

		return remoteResource;
	}
};

getResource('hola')
	.then(() => getResource('hola'))
	.then(() => getResource('hola'));
