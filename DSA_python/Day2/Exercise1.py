# Exercise 1. Online Food Delivery System  Scenario
# Build a food delivery application similar to Swiggy or Zomato.
# Requirements: Customer can register and login.  Restaurant can add/update menu items.  Customer can place multiple orders.
#               Apply discounts.  Generate bill.  Track order status.
# Classes:  User, Customer, Restaurant, MenuItem, Order, Payment
# OOP Concepts:  Inheritance (User → Customer), Encapsulation (private order details), Polymorphism (different payment methods)
#               Composition (Order contains MenuItem), Add coupon codes, Cancel an order before preparation.
#               Calculate GST and delivery charges.


class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email

    def login(self):
        print(self.name, "logged in")


class Customer(User):
    def __init__(self, name, email):
        super().__init__(name, email)
        self.orders = []

    def place_order(self, order):
        self.orders.append(order)
        print("Order placed successfully")


class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price



class Restaurant:
    def __init__(self, name):
        self.name = name
        self.menu = []

    def add_menu_item(self, item):
        self.menu.append(item)

    def update_price(self, item_name, new_price):
        for item in self.menu:
            if item.name == item_name:
                item.price = new_price

    def show_menu(self):
        print("\nMenu")
        for item in self.menu:
            print(item.name, "- ₹", item.price)



class Order:
    def __init__(self):
        self.__items = []     
        self.__status = "Pending"

    def add_item(self, item):
        self.__items.append(item)

    def apply_coupon(self, code):
        if code == "SAVE10":
            return 10
        return 0

    def generate_bill(self, code=""):
        total = 0
        for item in self.__items:
            total += item.price

        discount = self.apply_coupon(code)
        total = total - (total * discount / 100)

        gst = total * 0.05
        delivery = 40

        final_bill = total + gst + delivery

        print("\n----- BILL -----")
        print("Food Cost :", total)
        print("GST (5%)  :", gst)
        print("Delivery  :", delivery)
        print("Total Bill:", final_bill)

        return final_bill

    def track_order(self):
        print("Order Status:", self.__status)

    def update_status(self, status):
        self.__status = status

    def cancel_order(self):
        if self.__status == "Pending":
            self.__status = "Cancelled"
            print("Order Cancelled")
        else:
            print("Cannot cancel. Preparation started.")



class Payment:
    def pay(self, amount):
        print("Paid ₹", amount)


class UPI(Payment):
    def pay(self, amount):
        print("Paid ₹", amount, "using UPI")


class Card(Payment):
    def pay(self, amount):
        print("Paid ₹", amount, "using Card")


customer = Customer("Payal", "payal@gmail.com")
customer.login()

restaurant = Restaurant("Food Hub")

restaurant.add_menu_item(MenuItem("Burger", 150))
restaurant.add_menu_item(MenuItem("Pizza", 300))
restaurant.add_menu_item(MenuItem("Fries", 100))

restaurant.show_menu()

order = Order()

order.add_item(restaurant.menu[0])
order.add_item(restaurant.menu[2])

customer.place_order(order)

bill = order.generate_bill("SAVE10")

order.track_order()

order.cancel_order()

order.track_order()

order.update_status("Preparing")

order.cancel_order()

payment = UPI()
payment.pay(bill)

