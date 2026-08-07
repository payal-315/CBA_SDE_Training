# Exercise 9: Electricity Bill Calculator
# Scenario: An electricity company generates monthly bills.
# Requirements: Create an ElectricityBill class.   Store: Consumer Number, Customer Name, Units Consumed
# Billing Rules: First 100 units → ₹5/unit, Next 100 units → ₹7/unit, Remaining units → ₹10/unit, 
#                If total bill exceeds ₹5000, add 5% surcharge.
# Display: Customer details, Units, Total amount, Surcharge, Final bill
# Nested if, Methods, Arithmetic calculations


class ElectricityBill:
    def __init__(self, consumer_no, customer_name, units):
        self.consumer_no = consumer_no
        self.customer_name = customer_name
        self.units = units

    def calculate_bill(self):
        if self.units <= 100:
            bill = self.units * 5
        else:
            if self.units <= 200:
                bill = (100 * 5) + ((self.units - 100) * 7)
            else:
                bill = (100 * 5) + (100 * 7) + ((self.units - 200) * 10)

        if bill > 5000:
            surcharge = bill * 0.05
        else:
            surcharge = 0

        final_bill = bill + surcharge

        print("\n----- Electricity Bill -----")
        print("Consumer Number:", self.consumer_no)
        print("Customer Name:", self.customer_name)
        print("Units Consumed:", self.units)
        print("Total Amount: ₹", bill)
        print("Surcharge: ₹", surcharge)
        print("Final Bill: ₹", final_bill)

consumer_no = int(input("Enter Consumer Number: "))
customer_name = input("Enter Customer Name: ")
units = int(input("Enter Units Consumed: "))

bill = ElectricityBill(consumer_no, customer_name, units)
bill.calculate_bill()




