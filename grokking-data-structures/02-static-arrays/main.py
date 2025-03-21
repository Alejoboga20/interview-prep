from typing import Generic, TypeVar, List, Optional

T = TypeVar('T')


class Array(Generic[T]):
    def __init__(self, size: int = 0, default_value: Optional[T] = None):
        """Initialize an array of fixed size"""

        if size <= 0:
            raise ValueError("Size should be a positive integer")

        self.size = size
        self.data: List[Optional[T]] = [default_value] * size
        self.element_type: Optional[type] = type(
            default_value) if default_value is not None else None

    def __validate_index__(self, index: int):
        """Check if the index is valid"""

        if index < 0 or index >= self.size:
            raise IndexError("Index out of bounds")

    def __validate_type__(self, value: T):
        """Check if the value is of the correct type"""

        if self.element_type is not None and not isinstance(value, self.element_type):
            raise TypeError("Invalid type")

    def get_item(self, index: int) -> T | None:
        """Get an element by index"""
        self.__validate_index__(index)
        element = self.data[index]

        return element

    def set_item(self, index: int, element: T):
        """Set an element by index"""
        self.__validate_index__(index)
        self.__validate_type__(element)
        self.data[index] = element

    def remove_item(self, index: int):
        self.__validate_index__(index)

        lower_array = self.data[:index]
        upper_array = self.data[index + 1:]
        self.data = lower_array + upper_array

    def __str__(self) -> str:
        return str(self.data)

    def __len__(self) -> int:
        return self.size


str_array = Array[str](3, None)
int_array = Array[int](3, 0)
int_array.set_item(0, 1)
int_array.set_item(1, 2)
int_array.set_item(2, 3)

print(str_array.__str__())
first = str_array.get_item(0)
str_array.set_item(1, "world")


class UnsortedArray(Generic[T]):
    def __init__(self, max_size: int = 0, default_value: Optional[T] = None):
        self.filled_index = 0
        self.max_size = max_size
        self.array = Array[Optional[T]](max_size, default_value)

    def insert(self, element: T):
        if self.filled_index >= self.max_size:
            raise ValueError("Array is full")

        self.array.set_item(self.filled_index, element)
        self.filled_index += 1

    def remove_last_element(self):
        if self.filled_index == 0:
            raise ValueError("Array is empty")

        self.array.set_item(self.filled_index - 1, None)

    def remove_element(self, index: int):
        if index < 0 or index >= self.filled_index:
            raise IndexError("Index out of bounds")

        self.array.remove_item(index)
        self.filled_index -= 1

    def find_first_ocurrence(self, element: T):
        index_element = None
        for index in range(0, self.filled_index):
            if self.array.get_item(index) == element:
                index_element = index
                return {"index_element": index_element, "element": element}
        return None

    def traverse(self):
        for index in range(0, self.filled_index):
            print(self.array.get_item(index))


unsorted_array = UnsortedArray[str](2, None)
unsorted_array.insert("hello")
unsorted_array.insert("world")
print(unsorted_array.array.__str__())

unsorted_array.remove_last_element()
print(unsorted_array.array.__str__())

unsorted_with_numbers = UnsortedArray[int](5, 0)
unsorted_with_numbers.insert(1)
unsorted_with_numbers.insert(2)
unsorted_with_numbers.insert(3)
unsorted_with_numbers.insert(4)
unsorted_with_numbers.insert(5)

unsorted_with_numbers.remove_element(2)
print(unsorted_with_numbers.array.__str__())
unsorted_with_numbers.remove_element(3)
print(unsorted_with_numbers.array.__str__())


def find_max_in_array(int_array: Array[int]):
    """ Find Max in Array of integers"""
    if int_array.element_type is not int:
        raise TypeError(
            "Operation cannot be performed on this type of array")

    max_value = None
    max_value_index = -1

    for index in range(0, int_array.__len__() - 1):
        value = int_array.get_item(index)

        if isinstance(value, int):
            if max_value is None or value > max_value:
                max_value = value
                max_value_index = index

    if max_value is None:
        raise ValueError("No valid integer values in the arrayy")

    return {
        "max_value": max_value,
        "max_value_index": max_value_index
    }


def find_min_in_array(int_array: Array[int]):
    """ Find min in Array of integers"""
    if int_array.element_type is not int:
        raise TypeError(
            "Operation cannot be performed on this type of array")

    min_value = None
    min_value_index = -1

    for index in range(0, int_array.__len__() - 1):
        value = int_array.get_item(index)

        if isinstance(value, int):
            if min_value is None or value < min_value:
                min_value = value
                min_value_index = index

    if min_value is None:
        raise ValueError("No valid integer values in the arrayy")

    return {
        "min_value": min_value,
        "min_value_index": min_value_index
    }


def find_min_and_max_in_array(int_array: Array[int]):
    """ Find min and max in Array of integers"""
    """
    Performing both operations using the same loop is more efficient 
    than having two separated loops
    """
    if int_array.element_type is not int:
        raise TypeError(
            "Operation cannot be performed on this type of array")

    min_value = None
    min_value_index = -1

    max_value = None
    max_value_index = -1

    for index in range(0, int_array.__len__() - 1):
        value = int_array.get_item(index)

        if isinstance(value, int):
            if min_value is None or value < min_value:
                min_value = value
                min_value_index = index
            if max_value is None or value > max_value:
                max_value = value
                max_value_index = index

    if min_value is None:
        raise ValueError("No valid integer values in the arrayy")

    return {
        "min_value": min_value,
        "min_value_index": min_value_index,
        "max_value": max_value,
        "max_value_index": max_value_index,
    }


print(
    f"find_max_in_array(int_array=int_array): {find_max_in_array(int_array=int_array)}")

print(
    f"find_min_in_array(int_array=int_array): {find_min_in_array(int_array=int_array)}")

print(
    f"find_min_and_max_in_array(int_array=int_array): {find_min_and_max_in_array(int_array=int_array)}")
