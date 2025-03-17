# Hash Tables

Hash tables are a type of data structure in which the address or the index value of the data element is generated from a hash function. That makes accessing the data faster as the index value behaves as a key for the data value. In other words, a hash table is used to store key-value pairs.

## Hash Functions

A hash function is any function that can be used to map data of arbitrary size to fixed-size values. The values returned by a hash function are called hash values, hash codes, digests, or simply hashes. Usually a `hash function` maps strings to numbers.

![alt text](image.png)

It needs to meet the following requirements:

1. It should be deterministic, meaning that the same input should always produce the same output.
2. It should generate a unique hash for different inputs.

![alt text](image-1.png)
![alt text](image-2.png)

An `array` plus a `hash function` is a `hash table`, where you can store data in an array and access it using a key in constant time `O(1)`.

![alt text](image-3.png)

```python
book = dict()
book["apple"] = 0.67
book["milk"] = 1.49
book["avocado"] = 1.49
print(book) # {'apple': 0.67, 'milk': 1.49, 'avocado': 1.49}
print(book["avocado"]) # 1.49
```
