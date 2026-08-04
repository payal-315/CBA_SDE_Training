# Exercise 4: Write a program to calculate the factorial of a positive integer using a loop.


num = int(input("Enter a positive integer: "))

factorial = 1

for i in range(1, num + 1):
    factorial *= i

print("Factorial =", factorial)
