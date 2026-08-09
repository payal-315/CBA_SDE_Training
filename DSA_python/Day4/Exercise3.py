# 3. Shopping Cart Manager
# An e-commerce application stores product prices in a list. Write a program to: Add new product prices. Remove a product price.
# Display the total cart value. Find the most expensive product.



prices = []

n = int(input("Enter number of products: "))

for i in range(n):
    price = float(input(f"Enter price of product {i + 1}: "))
    prices.append(price)

new_price = float(input("Enter new product price to add: "))
prices.append(new_price)

remove_price = float(input("Enter product price to remove: "))

if remove_price in prices:
    prices.remove(remove_price)
    print("Product removed.")
else:
    print("Product price not found.")

total = sum(prices)
expensive = max(prices)

print("\nProduct Prices:", prices)
print("Total Cart Value:", total)
print("Most Expensive Product:", expensive)



