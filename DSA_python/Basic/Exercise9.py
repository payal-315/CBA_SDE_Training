# Exercise 9: Write a program to determine whether a given number is prime.

num = int(input("Enter a number: "))

if num <= 1:
    print("Not a prime number")
else:
    prime = True
    for i in range(2, num):
        if num % i == 0:
            prime = False
            break

    if prime:
        print("Prime number")
    else:
        print("Not a prime number")
