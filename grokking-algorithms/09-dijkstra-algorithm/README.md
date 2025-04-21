# Dijkstra's Algorithm

We can find the shortest path from A to B using BFS (breadth-first search) but, if we want to find the fastest path from A to B, we need to use Dijkstra's algorithm. In this case each segment has a weight, which is the time it takes to travel that segment. The algorithm will find the fastest path from A to B by taking into account the weights of each segment.

Steps for Dijkstra's algorithm:

1. Find the cheapest node. This is the node you can get to in the least amount of time.
2. Check whether there’s a cheaper path to the out-neighbors of this node. If so, update their costs.
3. Repeat until you’ve done this for every node in the graph.
4. Calculate the final path. (Coming up in the next section!)

Step 1: Find the node with the lowest weight.

![alt text](image.png)
![alt text](image-1.png)

Step 2: Calculate how long it takes to get to all of node B’s out-neighbors by following an edge from B.

![alt text](image-2.png)

Step 3: Repeat.

Step 4: Calculate the shortest path from A to B by following the nodes with the lowest weights.

![alt text](image-3.png)
