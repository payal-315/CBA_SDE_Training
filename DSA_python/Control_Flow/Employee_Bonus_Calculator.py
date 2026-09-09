# 1. Employee Bonus Calculator
# Write a Python program that accepts an employee's and (1–5). Calculate the bonus according to:
# Rating 5 → 20% of salary, Rating 4 → 15%, Rating 3 → 10%, Rating 2 → 5%, Rating 1 → No bonus
# Additionally: If salary is below ₹30,000, add a fixed ₹2,000 bonus. Display the final salary including the bonus.


name = input("Enter employee name: ")
salary = float(input("Enter salary: "))
rating = int(input("Enter performance rating (1-5): "))

if rating == 5:
    bonus = salary * 0.20
elif rating == 4:
    bonus = salary * 0.15
elif rating == 3:
    bonus = salary * 0.10
elif rating == 2:
    bonus = salary * 0.05
elif rating == 1:
    bonus = 0
else:
    print("Invalid rating! Rating must be between 1 and 5.")
    exit()

if salary < 30000:
    bonus += 2000

final_salary = salary + bonus

print("\n----- Employee Bonus Details -----")
print("Employee Name:", name)
print("Basic Salary: ", salary)
print("Performance Rating:", rating)
print("Bonus: ", bonus)
print("Final Salary: ", final_salary)
