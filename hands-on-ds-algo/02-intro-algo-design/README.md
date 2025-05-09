# Algorithm Design

An `algorithm` is a sequence of steps that should be followed in order to complete a given task/problem.

![alt text](image.png)

To solve a given problem we need to consider two ky aspects:

- Find an efficient mechanism to store, manage, and retrieve data, which is required to solve the problem. This comes under `data structures`.
- Find an efficient way to manipulate the data in order to solve the problem. This comes under `algorithms`.

The costs of executing different algorithms may be different; it may be measured in terms of the `time` required to run the algorithm on a computer system and the `memory` space required for it. Performance analysis of the algorithm is very important for deciding the best solution for a given problem. The performance of an algorithm is measured in terms of `time complexity` and `space complexity`.

## Performance Analysis of an Algorithm

The performance of an algorithm is generally measured by the size of its input data, and the time and the memory space used by the algorithm.

### Time Complexity

The time complexity of the algorithm is the amount of time that an algorithm will take to execute on a computer system to produce the output. The running time required by an algorithm depends on the input size; as the input size, `n`, increases, the runtime also increases.

Example: Linear Search. [Code here](./linear_search.py)

The `worst-case running time` of the algorithm is the upper-bound complexity; it is the maximum runtime required for an algorithm to execute for any given input. For example, in the linear search problem, the worst case occurs when the element to be searched is found in the last comparison or not found in the list at all. In this case, the algorithm will have to check all the elements in the list before concluding that the element is not present in the list. The worst-case running time of the linear search algorithm is `O(n)`. In this case, the running time required will linearly depend upon the length of the list, whereas, in the best case, the search element will be found in the first comparison.

The `average-case running time` is the average running time required for an algorithm to execute. In this analysis, we compute the average over the running time for all possible input values. Generally, probabilistic analysis is used to analyze the average-case running time of an algorithm, which is computed by averaging the cost over the distribution of all the possible inputs.

**_ In most real-world applications, worst-case analysis is mostly used, since it gives a guarantee that the running time will not take any longer than the worst-case running time of the algorithm for any input value._**

`Best-case running time` is the minimum time needed for an algorithm to run; it is the lower bound on the running time required for an algorithm.

### Space Complexity

The space complexity of the algorithm estimates the memory requirement to execute it on a computer to produce the output as a function of input data.

Example: Squares. [Code here](./squares.py). It needs to store the squares of the first `n` numbers in a list. The space complexity of this algorithm is `O(n)`.

The space complexity of an algorithm is the total space required by the algorithm to execute, including the space required for the input values, auxiliary space, and output values. The space complexity of an algorithm is expressed in terms of `Big O` notation.

Given two algorithms to solve a given problem, with all other requirements being equal, then the algorithm that requires less memory can be considered more efficient

## Asymptotic Notation

To analyze the time complexity of an algorithm, the rate of growth (order of growth) is very important when the input size is large. When the input size becomes large, we only consider the higher-order terms and ignore the insignificant terms. In asymptotic analysis, we analyze the efficiency of algorithms for large input sizes considering the higher order of growth and ignoring the multiplicative constants and lower-order terms.

### Theta Notation

It denotes the worst-case running time complexity with a tight bound. For a given function F(n), the asymptotic worst-case running time complexity can be defined as follows:

`T(n) = Θ(F(n))` iff there exists constants n0, c1, and c2 such that: `0 ≤ c1 * F(n) ≤ T(n) ≤ c2 * F(n)` for all n ≥ n0.

![alt text](image-1.png)

### Big O Notation

It denotes the upper bound of the running time complexity. For a given function F(n), the asymptotic upper bound running time complexity can be defined as follows:

`T(n) = O(F(n))` iff there exists constants n0 and c such that: `0 ≤ T(n) ≤ c * F(n)` for all n ≥ n0.

![alt text](image-2.png)

In O notation, O(F(n)) is really a set of functions that includes all functions with the same or smaller rates of growth than F(n)

Most common growth rates are:

![alt text](image-3.png)

## Amortized Analysis

In the `amortized analysis` of an algorithm, we average the time required to execute a sequence of operations with all the operations of the algorithm. In amortized analysis, we analyze algorithms considering both the costly and less costly operations in order to analyze all the sequences of operations.

Methods for amortized analysis:

- Aggregate method: In aggregate analysis, the amortized cost is the average cost of all the sequences of operations.
- Accounting method: In the accounting method, we assign an amortized cost to each operation, which may be different than their actual cost. In this, we impose an extra charge on early operations in the sequence and save “credit cost,” which is used to pay expensive operations later in the sequence.
- Potential method: The potential method is like the accounting method. We determine the amortized cost of each operation and impose an extra charge to early operations that may be used later in the sequence. Unlike the accounting method, the potential method accumulates the overcharged credit as “potential energy” of the data structure as a whole instead of storing credit for individual operations.
