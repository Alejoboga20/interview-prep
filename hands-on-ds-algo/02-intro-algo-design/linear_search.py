input_list: list[int] = [1, 2, 3, 4, 5, 6]


def linear_search(input_list: list[int], element: int) -> int:
    if len(input_list) == 0:
        raise ValueError('Can not perform this operation on an empty list')

    for index, value in enumerate(input_list):
        if value == element:
            return index

    return -1


print(f"Index position for the element 4 is: {linear_search(input_list=input_list, element=4)}")
print(f"Index position for the element 10 is: {linear_search(input_list=input_list, element=10)}")
