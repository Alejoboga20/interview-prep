class TreeNode<T> {
	public value: T;
	public children: TreeNode<T>[];

	constructor(value: T) {
		this.value = value;
		this.children = [];
	}

	public addChild(child: TreeNode<T>) {
		this.children.push(child);
	}
}

const rootNode = new TreeNode(7);
