# 5. Number Analysis
# Accept a positive integer from the user and analyze it. 
# Display: Number of digits, Sum of digits, Largest digit, Smallest digit, Whether the number is a palindrome.


num = int(input("Enter a positive integer: "))

original = num
digits = 0
sum_digits = 0
largest = 0
smallest = 9

while num > 0:
    digit = num % 10

    digits += 1

    sum_digits += digit

    if digit > largest:
        largest = digit

    if digit < smallest:
        smallest = digit

    num = num // 10

reverse = 0
temp = original

while temp > 0:
    digit = temp % 10
    reverse = reverse * 10 + digit
    temp = temp // 10

if original == reverse:
    palindrome = "Yes"
else:
    palindrome = "No"

print("\n----- Number Analysis -----")
print("Digits:", digits)
print("Sum:", sum_digits)
print("Largest digit:", largest)
print("Smallest digit:", smallest)
print("Palindrome:", palindrome)
