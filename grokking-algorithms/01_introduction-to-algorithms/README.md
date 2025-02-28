# Introduction to Algorithms

An algorithm is a set of instructions for accomplishing a task.

## Binary Search

`Binary search` is an algorithm; its input is a sorted list of elements. If the element you’re looking for is in that list, binary search returns the position where it’s located. Otherwise, binary search returns `null`.

![alt text](image.png)

Binary search works by checking the middle element of the list. If the middle element is greater than the element you’re looking for, then the algorithm will search the left half of the list. If the middle element is less than the element you’re looking for, then the algorithm will search the right half of the list. It will continue to halve the list until it finds the element or the list is empty.

On the other hand, a `simple search` is an algorithm that checks every element in the list, one by one. If you want to search for an element in a list of n elements, in the worst case, simple search will take n steps.

In general, for any list of n, binary search will take `log2 n` steps to run in the worst case, whereas simple search will take `n` steps.

Binary search implementation here: [binary_search.ts](binarySearch.ts)
