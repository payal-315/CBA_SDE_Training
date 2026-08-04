# Exercise 6: Write a program to reverse the digits of an integer.
# Input: 12345 → Output: 54321


num = int(input("Enter a number: "))

reverse = 0

while num > 0:
    digit = num % 10
    reverse = reverse * 10 + digit
    num = num // 10

print("Reversed number =", reverse)
