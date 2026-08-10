# 8. Duplicate Customer ID Detector
# A customer database contains customer IDs in a list. Create a program that: Finds duplicate IDs. Displays IDs that appear more than once.
# Removes duplicates and creates a unique list.


customer_ids = []
duplicates = []
unique_ids = []

n = int(input("Enter number of customer IDs: "))

for i in range(n):
    cid = int(input(f"Enter Customer ID {i + 1}: "))
    customer_ids.append(cid)

for id in customer_ids:
    if customer_ids.count(id) > 1 and id not in duplicates:
        duplicates.append(id)

for id in customer_ids:
    if id not in unique_ids:
        unique_ids.append(id)

print("\nCustomer IDs:", customer_ids)
print("Duplicate IDs:", duplicates)
print("Unique Customer IDs:", unique_ids)
