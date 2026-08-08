# Exercise 2: Online Shopping Cart
# Scenario: An online shopping website wants to build a shopping cart for customers.
# Requirements: Create a Python program that: Allows customers to add products. Stores: Product ID, Product Name, Price, Quantity
#               Calculates: Item Total, Grand Total, Apply discount: Above ₹5000 → 15%, Above ₹3000 → 10%, Otherwise no discount.
#               Print final invoice.
# Concepts to Use: Lists, Loops, Functions, OOP, Constructor, Instance variables, Methods, if-else



class Product:
    def __init__(self, product_id, name, price, quantity):
        self.product_id = product_id
        self.name = name
        self.price = price
        self.quantity = quantity

    def item_total(self):
        return self.price * self.quantity

cart = []

n = int(input("Enter number of products: "))

for i in range(n):
    print("\nEnter Product", i + 1)

    pid = input("Product ID: ")
    name = input("Product Name: ")
    price = float(input("Price: "))
    quantity = int(input("Quantity: "))

    p = Product(pid, name, price, quantity)
    cart.append(p)

grand_total = 0

print("\n----------- INVOICE -----------")
print("ID\tName\tPrice\tQty\tTotal")

for product in cart:
    total = product.item_total()
    grand_total += total
    print(product.product_id, "\t", product.name, "\t", product.price, "\t", product.quantity, "\t", total)

if grand_total > 5000:
    discount = grand_total * 0.15
elif grand_total > 3000:
    discount = grand_total * 0.10
else:
    discount = 0

final_amount = grand_total - discount

print("\nGrand Total :", grand_total)
print("Discount    :", discount)
print("Final Amount:", final_amount)





