# Exercise 6: Vehicle Rental System
# Scenario: A vehicle rental company rents cars and bikes to customers.
# Requirements: Each vehicle contains: Vehicle ID, Vehicle Name, Vehicle Type, Rental Price per Day, Customer enters, Number of rental days
#               The application should: Calculate total rental amount. Apply discount: More than 10 days → 20%, More than 5 days → 10%
#               Display final bill.
# Bonus:  Allow renting multiple vehicles and calculate the overall total.
# Concepts to Use: Classes, Objects, Constructors, Functions, Loops, Lists, Conditional statements, Arithmetic operators



class Vehicle:
    def __init__(self, vehicle_id, name, vehicle_type, price_per_day):
        self.vehicle_id = vehicle_id
        self.name = name
        self.vehicle_type = vehicle_type
        self.price_per_day = price_per_day

    def calculate_bill(self, days):
        total = self.price_per_day * days

        if days > 10:
            discount = total * 0.20
        elif days > 5:
            discount = total * 0.10
        else:
            discount = 0

        final_amount = total - discount
        return total, discount, final_amount


vehicles = []

n = int(input("Enter number of vehicles to rent: "))

for i in range(n):
    print("\nEnter Vehicle", i + 1)

    vehicle_id = input("Vehicle ID: ")
    name = input("Vehicle Name: ")
    vehicle_type = input("Vehicle Type: ")
    price = float(input("Rental Price per Day: "))
    days = int(input("Number of Rental Days: "))

    vehicle = Vehicle(vehicle_id, name, vehicle_type, price)
    vehicles.append((vehicle, days))

overall_total = 0

print("\n----------- FINAL BILL -----------")

for vehicle, days in vehicles:
    total, discount, final_amount = vehicle.calculate_bill(days)

    print("\nVehicle ID :", vehicle.vehicle_id)
    print("Vehicle Name :", vehicle.name)
    print("Vehicle Type :", vehicle.vehicle_type)
    print("Rental Days :", days)
    print("Total Amount :", total)
    print("Discount :", discount)
    print("Final Amount :", final_amount)

    overall_total += final_amount

print("\nOverall Total Amount :", overall_total)
