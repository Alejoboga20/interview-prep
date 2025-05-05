def squares(input_list: list[int]) -> list[int]:
    square_numbers: list[int] = []

    for number in input_list:
        square_numbers.append(number * number)

    return square_numbers


nums = [2, 3, 5, 8]
print(squares(nums))
