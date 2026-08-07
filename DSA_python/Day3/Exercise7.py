# Exercise 7: Food Delivery Order System
# Scenario: A food delivery application calculates restaurant bills.
# Requirements: Create an Order class.        Store: Customer Name, Food Item, Quantity, Price
# Methods: Calculate total,   Add delivery charge: Free above ₹800, ₹60 otherwise, Print final bill.
# Display message: "Eligible for Free Delivery" or "Delivery Charge Applied"
# Methods, Conditions, Arithmetic



class Order:
    def __init__(self, customer_name, food_item, quantity, price):
        self.customer_name = customer_name
        self.food_item = food_item
        self.quantity = quantity
        self.price = price

    def calculate_bill(self):
        total = self.quantity * self.price

        if total > 800:
            delivery_charge = 0
            print("Eligible for Free Delivery")
        else:
            delivery_charge = 60
            print("Delivery Charge Applied")

        final_bill = total + delivery_charge

        print("\n----- Final Bill -----")
        print("Customer Name:", self.customer_name)
        print("Food Item:", self.food_item)
        print("Quantity:", self.quantity)
        print("Price per Item: ₹", self.price)
        print("Food Total: ₹", total)
        print("Delivery Charge: ₹", delivery_charge)
        print("Final Bill: ₹", final_bill)


customer_name = input("Enter Customer Name: ")
food_item = input("Enter Food Item: ")
quantity = int(input("Enter Quantity: "))
price = float(input("Enter Price per Item: "))

order = Order(customer_name, food_item, quantity, price)
order.calculate_bill()





