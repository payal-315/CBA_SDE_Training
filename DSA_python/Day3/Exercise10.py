# Exercise 10: Inventory Management System
# Scenario: A retail shop wants to monitor stock availability.
# Requirements: Create a Product class.  Store: Product ID, Product Name, Quantity Available, Minimum Stock Level
# Methods: Sell product, Restock product, Check stock status
# Display: "Stock Available", "Low Stock", "Out of Stock"
# Rules: Prevent selling more than available quantity. Update stock after every operation.
# Object state, if-else, while loop, Methods, Input validation



class Product:
    def __init__(self, product_id, product_name, quantity, min_stock):
        self.product_id = product_id
        self.product_name = product_name
        self.quantity = quantity
        self.min_stock = min_stock

    def sell_product(self, qty):
        if qty <= self.quantity:
            self.quantity -= qty
            print("Product Sold Successfully!")
        else:
            print("Not Enough Stock!")

    def restock_product(self, qty):
        self.quantity += qty
        print("Stock Updated Successfully!")

    def check_stock(self):
        print("\nProduct ID:", self.product_id)
        print("Product Name:", self.product_name)
        print("Available Quantity:", self.quantity)

        if self.quantity == 0:
            print("Status: Out of Stock")
        elif self.quantity <= self.min_stock:
            print("Status: Low Stock")
        else:
            print("Status: Stock Available")


# Main Program
product_id = int(input("Enter Product ID: "))
product_name = input("Enter Product Name: ")
quantity = int(input("Enter Available Quantity: "))
min_stock = int(input("Enter Minimum Stock Level: "))

product = Product(product_id, product_name, quantity, min_stock)

while True:
    print("\n----- Inventory Menu -----")
    print("1. Sell Product")
    print("2. Restock Product")
    print("3. Check Stock")
    print("4. Exit")

    choice = int(input("Enter your choice: "))

    if choice == 1:
        qty = int(input("Enter Quantity to Sell: "))
        if qty > 0:
            product.sell_product(qty)
        else:
            print("Enter a Valid Quantity!")

    elif choice == 2:
        qty = int(input("Enter Quantity to Restock: "))
        if qty > 0:
            product.restock_product(qty)
        else:
            print("Enter a Valid Quantity!")

    elif choice == 3:
        product.check_stock()

    elif choice == 4:
        print("Thank You!")
        break

    else:
        print("Invalid Choice!")
