# E-Commerce Product Catalog (Arrays + Lists + Dictionary)
# Problem Statement

# An e-commerce company manages its products using multiple data structures.

# Requirements:

# Store Product IDs in an array.

# Store Product Names in a list.

# Store Product ID and Price in a dictionary.

# Search product by ID.

# Update product price.

# Display products costing more than ₹1,000.

# Calculate the average price of all products.

# Arrays

# Lists

# Dictionaries

# Searching

# Filtering

# Data analysis


product_ids = []       
product_names = []     
product_prices = {}    
n = int(input("Enter the number of products: "))

for i in range(n):
    product_id = int(input("Enter Product ID: "))
    product_name = input("Enter Product Name: ")
    price = float(input("Enter Product Price: Rs."))

    product_ids.append(product_id)
    product_names.append(product_name)
    product_prices[product_id] = price

search_id = int(input("\nEnter Product ID to search: "))

if search_id in product_prices:
    index = product_ids.index(search_id)
    print("\nProduct Found")
    print("Product ID:", product_ids[index])
    print("Product Name:", product_names[index])
    print("Price: Rs.", product_prices[search_id])
else:
    print("Product not found.")

update_id = int(input("\nEnter Product ID to update price: "))

if update_id in product_prices:
    new_price = float(input("Enter New Price: Rs."))
    product_prices[update_id] = new_price
    print("Price updated successfully.")
else:
    print("Product not found.")

print("\nProducts Costing More Than Rs.1000:")

found = False
for i in range(len(product_ids)):
    if product_prices[product_ids[i]] > 1000:
        print("Product ID:", product_ids[i])
        print("Product Name:", product_names[i])
        print("Price: Rs.", product_prices[product_ids[i]])
        print()
        found = True

if not found:
    print("No products found.")

total = 0

for price in product_prices.values():
    total += price

average = total / len(product_prices)

print("Average Price: Rs.", average)