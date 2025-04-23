# Greedy Algorithms

Greedy algorithms are a class of algorithms that make a series of choices, each of which looks best at the moment. The idea is to pick the locally optimal solution in hopes that it leads to a globally optimal solution.
Greedy algorithms are often used in optimization problems, where the goal is to find the best solution among many possible solutions. They are typically faster and simpler than other algorithms, but they do not always guarantee the best solution. In some cases, they can lead to suboptimal solutions.

Here’s the takeaway from this second example: sometimes perfect is the enemy of good. Sometimes all you need is an algorithm that solves the problem pretty well. And that’s where greedy algorithms shine because they’re simple to write and get results that are often good enough.

When calculating the exact solution will take too much time, an `approximation algorithm` will work. Approximation algorithms are judged by:

- How fast they are
- How close they get to the optimal solution

## Example: Covering states with radio stations

Python implementation [here](./greedy.py)

If you have an NP-hard problem, your best bet is to use an approximation algorithm.
