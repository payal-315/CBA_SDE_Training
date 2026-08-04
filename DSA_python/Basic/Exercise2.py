# Exercise 2: Write a program to input three numbers and display the largest number.


a = input("Enter first number: ")
b = input("Enter second number: ")
c = input("Enter third number: ")

if a >= b and a >= c:
    print("Largest number is:", a)
elif b >= a and b >= c:
    print("Largest number is:", b)
else:
    print("Largest number is:", c)
