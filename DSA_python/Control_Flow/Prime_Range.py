# 6. Prime Number Range
# Accept two numbers start and end. Print all prime numbers between them.
# Also display: Total number of primes, Sum of all primes, Largest prime


start = int(input("Enter start number: "))
end = int(input("Enter end number: "))

primes = []
total_sum = 0

for num in range(start, end + 1):

    if num < 2:
        continue

    is_prime = True

    for i in range(2, num):
        if num % i == 0:
            is_prime = False
            break

    if is_prime:
        primes.append(num)
        total_sum += num

print("\n----- Prime Numbers -----")

if len(primes) > 0:
    print("Primes:", *primes)
    print("Count:", len(primes))
    print("Sum:", total_sum)
    print("Largest:", primes[-1])
else:
    print("No prime numbers found.")
