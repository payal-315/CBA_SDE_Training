# 4. Employee Salary Processing
# A company stores monthly salaries in a list. Create a program that: Gives a 10% increment to all employees.
# Stores updated salaries in a new list. Displays employees earning above ₹50,000.



salaries = []
updated_salaries = []

n = int(input("Enter number of employees: "))

for i in range(n):
    salary = float(input(f"Enter salary of employee {i + 1}: "))
    salaries.append(salary)


for salary in salaries:
    updated_salaries.append(salary * 1.10)

print("\nUpdated Salaries:", updated_salaries)

print("\nEmployees earning above ₹50,000:")
for salary in updated_salaries:
    if salary > 50000:
        print(salary)

