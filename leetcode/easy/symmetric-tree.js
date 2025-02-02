/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root) => {
	const a = serializeMirror(root.left, []);
	const b = serializeMirror(root.right, []);

	return a.join('') === b.join('');
};

const serializeMirror = (root, results) => {
	if (!root) {
		results.push('X');
		return results;
	}

	results.push(root.val);

	serializeMirror(root.right, results);
	serializeMirror(root.left, results);

	return results;
};
