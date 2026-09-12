# Electricity Bill Calculator
# Create an electricity billing program. Input the number of units consumed. 
# Calculate the bill: First 100 units → ₹2/unit, Next 200 units → ₹3/unit, Next 300 units → ₹5/unit, Above 600 units → ₹8/unit
# Additional rules: If the bill exceeds ₹5,000, add a 10% surcharge. If units are negative, display an error.
# Display the detailed bill calculation.



units = float(input("Enter electricity units consumed: "))

if units < 0:
    print("Error! Units cannot be negative.")

else:
    bill = 0


    if units <= 100:
        bill = units * 2
        print(f"{units} units × 2 = {bill}")


    elif units <= 300:
        bill = (100 * 2) + ((units - 100) * 3)
        print("First 100 units × 2 = 200")
        print(f"Next {units - 100} units × 3 = {(units - 100) * 3}")


    elif units <= 600:
        bill = (100 * 2) + (200 * 3) + ((units - 300) * 5)
        print("First 100 units × 2 = 200")
        print("Next 200 units × 3 = 600")
        print(f"Next {units - 300} units × 5 = {(units - 300) * 5}")


    else:
        bill = (100 * 2) + (200 * 3) + (300 * 5) + ((units - 600) * 8)
        print("First 100 units × 2 = 200")
        print("Next 200 units × 3 = 600")
        print("Next 300 units × 5 = 1500")
        print(f"Above 600 units × 8 = {(units - 600) * 8}")

    surcharge = 0

    if bill > 5000:
        surcharge = bill * 0.10
        print(f"10% Surcharge = {surcharge}")

    final_bill = bill + surcharge

    print("\n----- Electricity Bill -----")
    print("Units Consumed:", units)
    print("Bill Amount: ", bill)
    print("Surcharge: ", surcharge)
    print("Final Bill: ", final_bill)
