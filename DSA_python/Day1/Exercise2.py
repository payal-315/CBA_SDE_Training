# Monthly Sales Analysis (Arrays)
# Problem Statement

# A retail company records its sales for the of the year.

# Develop a program to:

# Store monthly sales in an array.

# Calculate total annual sales.

# Find the month with maximum sales.

# Find the month with minimum sales.

# Display months where sales exceeded ₹50,000.

# Arrays

# Searching

# Conditional statements



months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]

sales = []

for i in range(12):
    amount = float(input(f"Enter sales for {months[i]}: Rs."))
    sales.append(amount)

total = 0
for amount in sales:
    total += amount

max_sales = sales[0]
max_month = months[0]

for i in range(12):
    if sales[i] > max_sales:
        max_sales = sales[i]
        max_month = months[i]

min_sales = sales[0]
min_month = months[0]

for i in range(12):
    if sales[i] < min_sales:
        min_sales = sales[i]
        min_month = months[i]

print("\nTotal Annual Sales: Rs.", total)
print("Month with Maximum Sales:", max_month, "- Rs.", max_sales)
print("Month with Minimum Sales:", min_month, "- Rs.", min_sales)

print("\nMonths with Sales Exceeding Rs.50,000:")
for i in range(12):
    if sales[i] > 50000:
        print(months[i], "- Rs.", sales[i])












