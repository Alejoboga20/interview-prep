# Linked Lists

Unlike arrays, a linked list is a complex modular structure, made of building blocks called nodes: each node contains an element, a single value, of the linked list. But that’s not all! Because the nodes are not in contiguous areas of memory, each must also contain a link to the next node, an extra piece of data that stores the location in the memory of the next node in the list

![alt text](image.png)

A linked list is a collection of nodes where each node contains a value and a reference to the next node in the list. The first node is called the `head`, and the last node is called the `tail`. The `tail` node points to `None`, indicating the end of the list.

![alt text](image-1.png)

## Singly Linked Lists

A singly linked list is a linked list where each node only points to the next node in the list. The last node in the list points to `None`. The first node in the list is called the `head`, and the last node is called the `tail`.
