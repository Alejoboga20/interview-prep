class SortedArray():
    def __init__(self, size: int) -> None:
        self.filled_index: int = 0
        self.size: int = size
        self.data: list[int] = [0] * size

    def __str__(self):
        str_array = str(self.data)

        return str_array

    def __validate_insert__(self):
        """Check if the array is already full"""
        print(f"filled_index: {self.filled_index}")
        if (self.filled_index == self.size):
            raise ValueError("Array already full")

    def insert_element(self, element: int):
        """Implement Insertion Sort"""
        self.__validate_insert__()

        for index in range(self.filled_index, 0, -1):
            current_element = self.data[index - 1]

            if current_element <= element:  # _,_
                self.data[index] = element
                self.filled_index += 1
                return
            else:
                self.data[index] = current_element

        self.data[0] = element
        self.filled_index += 1


sorted_array = SortedArray(10)

print(sorted_array.__str__())
sorted_array.insert_element(1)
print(sorted_array.__str__())
sorted_array.insert_element(1)
print(sorted_array.__str__())
sorted_array.insert_element(8)
print(sorted_array.__str__())
sorted_array.insert_element(10)
print(sorted_array.__str__())
sorted_array.insert_element(11)
print(sorted_array.__str__())
sorted_array.insert_element(20)
print(sorted_array.__str__())
sorted_array.insert_element(2)
print(sorted_array.__str__())
sorted_array.insert_element(0)
print(sorted_array.__str__())
sorted_array.insert_element(0)
print(sorted_array.__str__())
sorted_array.insert_element(15)
print(sorted_array.__str__())
