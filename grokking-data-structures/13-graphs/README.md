# Graphs

A `graph` is a generalization of `trees`. A more formal definition would be:

We can define a graph `G` as a pair of sets. A ser of vertices `V` and a set of edges `E`. Each edge is a pair `(v, w)` where `v, w` are elements of `V`.

![alt text](image.png)

`G = (V, E) = ({v1, v2, v3, ...}, {(v1, v2), (v2, v3), ...})`

- An edge whose source and destination are the same is called a loop.

- Simple graphs are graphs without loops, with at most one edge between any two vertices. For any couple of vertices u,v, where u ≠ v, there can only be (at most) one edge from u to v.

- Multigraphs, in contrast, can have any number of edges between two given vertices. Both simple graphs and multigraphs can be extended to allow loops.

- An edge can have a numerical value associated with it. Such a value is called its weight, and the edge is then called a weighted edge.

- A graph is sparse if the number of edges is relatively small. For reference, we can consider a graph with n vertices to be sparse if its number of edges is O(n) or less.

- A graph is dense if the number of edges is close to the maximum possible, which can be at most O(n2) for a simple graph with n vertices.

- We can have `directed graphs`. In a directed graph, edges have a direction: they only go from the source vertex to the destination vertex. In an undirected graph, edges have no direction: they simply connect two vertices.
