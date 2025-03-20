const graph: { [key: string]: string[] } = {
	you: ['alice', 'bob', 'claire'],
	bob: ['anuj', 'peggy'],
	alice: ['peggy'],
	claire: ['thom', 'jonny'],
	anuj: [],
	peggy: [],
	thom: [],
	jonny: [],
};

const queue: string[] = [];

export const breadthFirstSearch = (initialNode: string) => {
	const connections = graph[initialNode];
	const initialQueue = queue.concat(connections);
	const visitedNodes = new Set();

	while (initialQueue.length > 0) {
		const currentNode = initialQueue.shift()!;

		if (!visitedNodes.has(currentNode)) {
			if (currentNode === 'jonny') {
				console.log('Found Jonny!');
				return;
			} else {
				visitedNodes.add(currentNode);
				const connections = graph[currentNode];
				initialQueue.concat(connections);
			}
		}
	}
};

breadthFirstSearch('you');
