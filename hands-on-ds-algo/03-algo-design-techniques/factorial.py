def factorial(number: int) -> int:
    positive_number = abs(number)
    if positive_number == 0:
        return 1
    else:
        return positive_number * factorial(positive_number - 1)


print(factorial(number=4))
