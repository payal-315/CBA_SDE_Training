# Exercise 5: Write a program to display the multiplication table of a given number from 1 to 10.

num = int(input("Enter a number: "))

for i in range(1, 11):
    print(num, "x", i, "=", num * i)
