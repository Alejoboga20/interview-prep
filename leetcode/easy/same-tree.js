/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
	const a = serialize(p, []);
	const b = serialize(q, []);

	const sameTree = a.join('') === b.join('');

	return sameTree;
};

const serialize = (root, results = []) => {
	if (!root) {
		results.push('x');
		return results;
	}

	results.push(root.val);
	serialize(root.left, results);
	serialize(root.right, results);

	return results;
};
