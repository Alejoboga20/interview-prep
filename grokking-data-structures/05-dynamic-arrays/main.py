from typing import Generic, TypeVar, List, Optional

T = TypeVar('T')


class Array(Generic[T]):
    def __init__(self, size: int = 1, default_value: Optional[T] = None) -> None:
        """Init an array of fixed size"""

        if size <= 0:
            raise ValueError("Size should be positive")

        self.size = size
        self.element_type: Optional[type] = type(
            default_value) if default_value is not None else None
        self.data: List[Optional[T]] = [default_value] * size

    def __validate_index__(self, index: int):
        """Check if the index is valid"""

        if index < 0 or index >= self.size:
            raise IndexError("Index out of bounds")

    def __validate_type__(self, element: T):
        """Check if the value has the correct type"""
        if self.element_type is not None and not isinstance(element, self.element_type):
            raise TypeError(
                f"Invalid type for this array, valid type: {self.element_type}")

    def print_array(self):
        str_array = str(self.data)
        print(str_array)

    def insert_element(self, index: int, element: T):
        self.__validate_index__(index)
        self.__validate_type__(element)
        self.data[index] = element

    def get_item(self, index: int) -> T | None:
        """Get an element by index"""
        self.__validate_index__(index)
        element = self.data[index]

        return element


class DynamicArray(Generic[T]):
    def __init__(self, size: int = 1, default_value: Optional[T] = None) -> None:
        self.filled_index: int = 0
        self.default_value = default_value
        self.size: int = size
        self.array = Array[Optional[T]](size=size, default_value=default_value)

    def __double_size__(self):
        old_array = self.array
        new_size = self.size * 2
        self.array = Array[Optional[T]](size=new_size, default_value=self.default_value)
        self.size = new_size
        print(f"new_size: {self.size}")

        for i in range(self.filled_index):
            element = old_array.get_item(i)
            self.array.insert_element(index=i, element=element)

    def __shrink_size__(self):
        old_array = self.array
        new_size = self.size // 2
        self.array = Array[Optional[T]](size=new_size, default_value=self.default_value)
        self.size = new_size

        for i in range(self.filled_index):
            element = old_array.get_item(i)
            self.array.insert_element(index=i, element=element)

    def __clean_array__(self):
        for i in range(self.size, self.filled_index, -1):
            self.array.insert_element(index=i - 1, element=self.default_value)

    def find_element_by_index(self, index: int):
        self.array.get_item(index=index)

    def find_element_by_value(self, target: T):
        for i in range(self.filled_index):
            if (self.array.get_item(i) == target):
                return i

    def insert_element(self, element: T):

        if (self.filled_index >= self.size):
            self.__double_size__()

        self.array.insert_element(index=self.filled_index, element=element)
        self.filled_index += 1

    def delete_element(self, target: T):
        index_to_delete = self.find_element_by_value(target)

        if index_to_delete is None:
            raise ValueError("Item not found in the array")

        for i in range(index_to_delete, self.size - 1):
            next = self.array.get_item(index=i + 1)
            self.array.insert_element(index=i, element=next)

        self.filled_index -= 1
        self.__clean_array__()
        print(f"filled_index {self.filled_index}, size: {self.size}")

        if self.filled_index <= (self.size // 4):
            self.__shrink_size__()


dynamic_array = DynamicArray[int](2, 0)
dynamic_array.array.print_array()
dynamic_array.insert_element(1)
dynamic_array.array.print_array()
dynamic_array.insert_element(1)
dynamic_array.array.print_array()
dynamic_array.insert_element(1)
dynamic_array.array.print_array()
dynamic_array.insert_element(2)
dynamic_array.array.print_array()

dynamic_array.delete_element(1)
dynamic_array.array.print_array()
dynamic_array.delete_element(1)
dynamic_array.array.print_array()
dynamic_array.delete_element(1)
dynamic_array.array.print_array()

dynamic_array.insert_element(1)
dynamic_array.array.print_array()
dynamic_array.insert_element(2)
dynamic_array.array.print_array()
dynamic_array.delete_element(1)
dynamic_array.array.print_array()
