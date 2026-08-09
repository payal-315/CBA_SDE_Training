# 6. Inventory Stock Alert
# A store maintains stock quantities of products in a list. Create a program that: Identifies products with stock below 10.
# Calculates total inventory count. Finds the product with maximum stock.



stocks = []

n = int(input("Enter number of products: "))

for i in range(n):
    stock = int(input(f"Enter stock of product {i + 1}: "))
    stocks.append(stock)

print("\nProducts with stock below 10:")
for i in range(len(stocks)):
    if stocks[i] < 10:
        print(f"Product {i + 1}: {stocks[i]}")

total_stock = sum(stocks)
max_stock = max(stocks)

print("\nStock List:", stocks)
print("Total Inventory Count:", total_stock)
print("Maximum Stock:", max_stock)







