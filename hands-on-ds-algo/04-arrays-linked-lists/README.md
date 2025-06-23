# Arrays

An `array` is a collection od data items of the same type. In Python we can use the built-in `list` type to represent an array. Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.
An array stores the data of the same data type and each data element in the array is stored in contiguous memory locations.
Storing multiple data values of the same type makes it easier and faster to compute the position of any element in the array using `offset` and `base address`.

- Base address is the address of the first element in the array.
- Offset is the distance from the base address to the address of the element we want to access.

![alt text](image.png)

In an array, elements can be acccesed randomly using their index. The index of the first element is 0, the second element is 1, and so on. This allows for efficient access to elements in the array. The array data structure has further limitations in that it has a static size that has to be declared at the time of creation. In addition, the insertion and deletion operations in array data structures are slow as compared to linked lists. This is because it is difficult to insert an element in an array at a given location since all data elements after that desired position must be shifted and then new elements inserted in between
