# Exercise 7: Write a program to check whether a given number is a palindrome.
# Input: 121 → Output: Palindrome


num = int(input("Enter a number: "))

original = num
reverse = 0

while num > 0:
    digit = num % 10
    reverse = reverse * 10 + digit
    num = num // 10

if original == reverse:
    print("Palindrome")
else:
    print("Not a palindrome")
