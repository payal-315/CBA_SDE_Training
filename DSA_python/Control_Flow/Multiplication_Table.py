# 9. Multiplication Table with Conditions
# Accept a number from the user and print its multiplication table from 1 to 20. But:
# Skip multiples of 3 using continue. Stop the table if the result becomes greater than 100 using break. Do not print even results.


num = int(input("Enter a number: "))

for i in range(1, 21):


    if i % 3 == 0:
        continue

    result = num * i


    if result > 100:
        break

    
    if result % 2 == 0:
        continue

    print(num, "x", i, "=", result)
