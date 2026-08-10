# 15. Smart City Traffic Analysis
# A smart city records the number of vehicles passing a signal every hour in a list. Write a program to: Find peak traffic hour.
# Find the hour with minimum traffic. Calculate total daily traffic. Identify hours where traffic exceeded 500 vehicles.


traffic = []

n = int(input("Enter number of hours: "))

for i in range(n):
    vehicles = int(input(f"Enter vehicles for Hour {i + 1}: "))
    traffic.append(vehicles)

peak = max(traffic)
minimum = min(traffic)
total = sum(traffic)

print("\nTraffic Data:", traffic)
print("Peak Traffic Hour:", traffic.index(peak) + 1)
print("Vehicles:", peak)
print("Minimum Traffic Hour:", traffic.index(minimum) + 1)
print("Vehicles:", minimum)
print("Total Daily Traffic:", total)

print("\nHours with traffic above 500 vehicles:")
for i in range(len(traffic)):
    if traffic[i] > 500:
        print("Hour", i + 1, ":", traffic[i], "vehicles")
