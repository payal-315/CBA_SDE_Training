# Exercise 2: Online Shopping Cart
# Scenario: An online shopping website wants to calculate the customer bill.
# Requirements: Create a ShoppingCart class.Store: Customer Name, Product Name, Quantity, Price per item.  
# Methods should: Calculate total amount. Apply discount: 20% if bill > ₹10,000, 10% if bill > ₹5,000, No discount otherwise
# Display final bill.
# Objects, Conditional statements, Class methods, Variables


class ShoppingCart:
    def __init__(self, customer_name, product_name, quantity, price):
        self.customer_name = customer_name
        self.product_name = product_name
        self.quantity = quantity
        self.price = price

    def calculate_bill(self):
        total = self.quantity * self.price

        if total > 10000:
            discount = total * 0.20
        elif total > 5000:
            discount = total * 0.10
        else:
            discount = 0

        final_bill = total - discount

        print("\nCustomer Name:", self.customer_name)
        print("Product Name:", self.product_name)
        print("Quantity:", self.quantity)
        print("Price per Item: ₹", self.price)
        print("Total Amount: ₹", total)
        print("Discount: ₹", discount)
        print("Final Bill: ₹", final_bill)


customer_name = input("Enter Customer Name: ")
product_name = input("Enter Product Name: ")
quantity = int(input("Enter Quantity: "))
price = float(input("Enter Price per Item: "))

cart = ShoppingCart(customer_name, product_name, quantity, price)
cart.calculate_bill()

