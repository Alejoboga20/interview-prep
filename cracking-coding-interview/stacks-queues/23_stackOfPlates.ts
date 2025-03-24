// 3. *Stack of Plates*:

// Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
// Therefore, in real life, we would likely start a new stack when the previous stack
// exceeds some threshold. Implement a data structure SetOfStacks that mimics this.
// SetOfStacks should be composed of several stacks and should create a new stack once
// the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave
// identically to a single stack (that is, pop() should return the same values as it would if
// there were just a single stack).

// FOLLOW UP: Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.

export default class StackOfPlates<T> {
	stacks: Array<Array<T>> = [];
	capacity: number;

	constructor(capacity: number) {
		this.capacity = capacity;
	}

	push(value: T): void {
		const stackWithSpace = this.stacks.find(
			(stack) => stack.length < this.capacity
		);

		if (stackWithSpace) {
			stackWithSpace.push(value);
		} else {
			this.stacks.push([value]);
		}
	}

	pop(): T | undefined {
		const lastStack = this.stacks[this.stacks.length - 1];
		const result = lastStack.pop();

		if (lastStack.length === 0) {
			this.stacks.pop();
		}

		return result;
	}
}

const stackOfPlates = new StackOfPlates(3);
stackOfPlates.push(1);
stackOfPlates.push(2);
stackOfPlates.push(3);
stackOfPlates.push(4);
stackOfPlates.push(5);
stackOfPlates.push(6);
stackOfPlates.push(7);
stackOfPlates.push(8);
stackOfPlates.push(9);
stackOfPlates.push(10);
console.log(stackOfPlates.stacks);
stackOfPlates.pop();
console.log(stackOfPlates.stacks);
stackOfPlates.pop();
console.log(stackOfPlates.stacks);
