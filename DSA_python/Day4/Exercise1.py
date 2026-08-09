# 1. Daily Temperature Analyzer
# A weather station records temperatures for 7 days in a list. Write a program to: Store the temperatures. 
# Find the highest and lowest temperature. Calculate the average temperature. Count how many days were above average.


temperatures = []

print("Enter temperatures for 7 days:")

for i in range(7):
    temp = float(input(f"Day {i + 1}: "))
    temperatures.append(temp)

highest = max(temperatures)
lowest = min(temperatures)
average = sum(temperatures) / len(temperatures)

count = 0
for temp in temperatures:
    if temp > average:
        count += 1

print("\nTemperatures:", temperatures)
print("Highest Temperature:", highest)
print("Lowest Temperature:", lowest)
print("Average Temperature:", average)
print("Days Above Average:", count)
