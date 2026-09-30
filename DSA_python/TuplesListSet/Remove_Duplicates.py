# 1. Remove Duplicates While Preserving Order
# Given: numbers = [10, 20, 10, 30, 20, 40, 30, 50, 10]
# Create a new list that: Removes duplicates, Preserves the original order


numbers = [10, 20, 10, 30, 20, 40, 30, 50, 10]

result = []

for num in numbers:
    if num not in result:
        result.append(num)

print(result)
