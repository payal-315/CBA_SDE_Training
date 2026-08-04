# Exercise 8: Write a program to calculate the sum of the digits of a given integer.
# Input: 456 → Output: 15


num = int(input("Enter a number: "))

sum = 0

while num > 0:
    digit = num % 10
    sum = sum + digit
    num = num // 10

print("Sum of digits =", sum)
