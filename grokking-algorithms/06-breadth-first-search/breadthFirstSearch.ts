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

export const breadthFirstSearch = (initialNode: string) => {
	const initialConnections = graph[initialNode];
	const queue = [...initialConnections];
	const visitedNodes = new Set();
	let steps = 0;

	while (queue.length > 0) {
		steps++;
		const currentNode = queue.shift()!;

		if (!visitedNodes.has(currentNode)) {
			if (currentNode === 'jonny') {
				console.log('Found Jonny! - Steps:', steps);
				return;
			} else {
				visitedNodes.add(currentNode);
				const connections = graph[currentNode];
				queue.push(...connections);
			}
		}
	}
};

breadthFirstSearch('you');
