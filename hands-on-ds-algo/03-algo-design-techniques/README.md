# Algorithm Design Techniques and Strategies

Algorithm design techniques are strategies or methods used to develop algorithms for solving computational problems. These techniques help in breaking down complex problems into manageable parts and provide a systematic approach to finding solutions. Here are some common algorithm design techniques:

1. **Brute Force**: This is the simplest approach where all possible solutions are generated and checked to find the best one. It is often not efficient but can be used as a baseline.
2. **Greedy Algorithms**: This technique builds up a solution piece by piece, always choosing the next piece that offers the most immediate benefit. It does not always lead to the optimal solution but is often efficient and easy to implement.
3. **Divide and Conquer**: This technique divides the problem into smaller subproblems, solves each subproblem independently, and then combines the solutions to solve the original problem. It is often used in sorting algorithms like Merge Sort and Quick Sort.
4. **Dynamic Programming**: This technique is used for optimization problems where the solution can be constructed from solutions to smaller subproblems. It stores the results of subproblems to avoid redundant calculations.
5. **Backtracking**: This technique is used for constraint satisfaction problems. It builds a solution incrementally and abandons a solution as soon as it determines that it cannot be extended to a valid solution.
6. **Recursion**: This technique involves solving a problem by solving smaller instances of the same problem. It is often used in conjunction with other techniques like divide and conquer or dynamic programming.

# Recursion

A recursive algorithm calls itself repeatedly in order to solve the problem until a certain condition is fulfilled. A `recursive function` should have two types of cases:

- **Base Case**: The simplest instance of the problem, which can be solved directly without further recursion. Recursion will be stopped once the base case is met.
- **Recursive Case**: The part of the function that breaks the problem down into smaller subproblems and calls itself to solve those subproblems.

Example: [Factorial Calculation](./factorial.py)

# Divide and Conquer

The `divide-and-conquer` paradigm divides a problem into smaller sub-problems, and then solves these; finally, it combines the results to obtain a global, optimal solution. Some examples of divide-and-conquer algorithms include:

- Binary search
- Merge sort
- Quick sort
- Algorithm for fast multiplication
- Strassen’s matrix multiplication
- Closest pair of points

## Binary Search

The binary search algorithm is based on the divide-and-conquer design technique. This algorithm is used to find a given element from a sorted list of elements. It first compares the search element with the middle element of the list; if the search element is smaller than the middle element, then the half of the list of elements greater than the middle element is discarded; the process repeats recursively until the search element is found or we reach the end of the list

![alt text](image.png)
