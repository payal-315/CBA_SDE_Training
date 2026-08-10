# 13. Sales Performance Comparison
# A company stores monthly sales of two salespersons in separate lists. Write a program to: Compare month-wise sales.
# Identify who performed better each month. Calculate annual sales for both.



sales1 = []
sales2 = []

print("Enter monthly sales of Salesperson 1:")
for i in range(12):
    sale = float(input(f"Month {i + 1}: "))
    sales1.append(sale)

print("\nEnter monthly sales of Salesperson 2:")
for i in range(12):
    sale = float(input(f"Month {i + 1}: "))
    sales2.append(sale)

print("\nMonth-wise Performance:")

for i in range(12):
    if sales1[i] > sales2[i]:
        print(f"Month {i + 1}: Salesperson 1 performed better")
    elif sales2[i] > sales1[i]:
        print(f"Month {i + 1}: Salesperson 2 performed better")
    else:
        print(f"Month {i + 1}: Both performed equally")

total1 = sum(sales1)
total2 = sum(sales2)

print("\nAnnual Sales of Salesperson 1:", total1)
print("Annual Sales of Salesperson 2:", total2)





