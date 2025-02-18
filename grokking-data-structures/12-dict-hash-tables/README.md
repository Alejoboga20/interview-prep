# Dictories and Hash Tables

A `dictionary` is a data structure that stores `key-value` pairs. It's like a list, but instead of storing elements in a sequence, a dictionary stores key-value pairs. The key is used to look up the associated value.

**The performance of a dictionary depends on its implementation.**

To create a dictionary we need to implement 3 methods:

- Insert: Add a key-value pair to the dictionary.
- Delete: Remove a key-value pair from the dictionary.
- Lookup: Find the value associated with a key.

![alt text](image.png)

Implementation of dictionary -> a BBST has the best performance for all 3 methods.

![alt text](image-1.png)

## Hash Tables

To implement a dictionary, we can use a hash table. A hash table is a data structure that maps keys to values. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

![alt text](image-2.png)
![alt text](image-3.png)

## Hash Functions

A `hash function` is a function that takes an input (or "key") and returns a fixed-size string of bytes. The output is typically a number that represents the position in the hash table.

- The domain of a hash function must be the set of all possible keys. Of course, the possible values for the input depend on the context. But we can always convert the elements to be stored to integers, so we can say that the domain for a general-purpose hash function is the set of all integers.

- A hash function must return a valid index. If our hash table has size `m`, then the output of the hash function associated with the table must be an integer between `0` and `m-1`.

![alt text](image-4.png)

Example of a hash function:

```python
h = lambda k: math.floor(m * ((A * k) % 1))
```

## Collision Resolution

In a `hash-table` at some point, we will have two keys that hash to the same index. This is called a `collision`. There are several ways to resolve collisions:

- **Separate Chaining**: The first way we can resolve a conflict is by allowing multiple items to be stored in the same cell. Of course, we can’t make an array cell larger and store more than one value in it. So, we need to be creative. Instead of storing values directly in the array’s cells, each cell stores the head of a linked list, called a `hash chain`. When a new element x is hashed into the i-th cell, we retrieve the hash chain pointed to by that cell and insert x at its front. If we want to avoid duplicates, we can instead add new elements to the tail of the list, after traversing the entire list and checking that x is not there

![alt text](image-5.png)

```python
class HashTable:
    __A__ = Decimal((sqrt(5) - 1) / 2)
    def __init__(self, buckets, extract_key=hash):
        self._m = buckets
        self._data = [SinglyLinkedList() for _ in range(buckets)]
        self._extract_key = extract_key
    def _hash(self, key):
        return floor(self._m*((Decimal(key) * HashTable.__A__)%1))

    def insert(self, value):
        index = self._hash(self._extract_key(value))
        self._data[index].insert_in_front(value)
    def _search(self, value):
        index = self._hash(key)
        value_matches_key = lambda v: self._extract_key(v) == key
        return self._data[index].search(value_matches_key)
```

- **Open Addressing**: All entry records are stored in the bucket array itself. When a new entry has to be inserted, the buckets are examined, starting with the hashed-to slot and proceeding in some probe sequence, until an unoccupied slot is found.
