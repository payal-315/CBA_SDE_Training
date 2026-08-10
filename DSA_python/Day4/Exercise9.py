# 9. Monthly Expense Analyzer
# A person records daily expenses for a month in a list. Write a program to: Calculate total expenses. Find the day with maximum expense.
# Calculate average daily expense. Count days where expense exceeded ₹1000.



expenses = []

n = int(input("Enter number of days: "))

for i in range(n):
    expense = float(input(f"Enter expense for day {i + 1}: "))
    expenses.append(expense)

total = sum(expenses)
maximum = max(expenses)
day = expenses.index(maximum) + 1
average = total / len(expenses)

count = 0
for expense in expenses:
    if expense > 1000:
        count += 1

print("\nExpenses:", expenses)
print("Total Expenses: ₹", total)
print("Day with Maximum Expense:", day)
print("Maximum Expense: ₹", maximum)
print("Average Daily Expense: ₹", average)
print("Days with Expense Above ₹1000:", count)
