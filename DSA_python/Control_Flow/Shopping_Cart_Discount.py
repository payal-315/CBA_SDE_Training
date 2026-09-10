# Shopping Cart Discount
# Write a program that accepts the prices of multiple products. Calculate the total bill and apply discounts:
# ₹0–₹4,999 → No discount, ₹5,000–₹9,999 → 10%, ₹10,000–₹19,999 → 15%, ₹20,000 or above → 20%
# Additional conditions: If the customer is a , give an additional 5% discount.
# Display: Original amount, Discount, Final amount


total = 0

n = int(input("Enter number of products: "))

for i in range(1, n + 1):
    price = float(input(f"Enter price of product {i}: "))
    total += price

if total >= 20000:
    discount_percent = 20
elif total >= 10000:
    discount_percent = 15
elif total >= 5000:
    discount_percent = 10
else:
    discount_percent = 0

discount = total * discount_percent / 100

customer = input("Are you a member? (yes/no): ")

if customer.lower() == "yes":
    additional_discount = total * 5 / 100
else:
    additional_discount = 0

total_discount = discount + additional_discount

final_amount = total - total_discount

print("\n----- Shopping Bill -----")
print("Original Amount: ", total)
print("Discount: ", total_discount)
print("Final Amount: ", final_amount)
