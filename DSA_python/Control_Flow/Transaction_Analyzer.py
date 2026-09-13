# 10. Bank Transaction Analyzer
# Create a program that processes a series of bank transactions.
# Example: transactions = [5000, -1200, -500, 3000, -800, 10000, -15000]
# Where: Positive value → Deposit, Negative value → Withdrawal
# Calculate: Total deposits, Total withdrawals, Number of deposits, Number of withdrawals, Final balance, Largest deposit, Largest withdrawal
# Additional rules: Ignore transactions equal to 0 using continue.
# If a withdrawal is greater than the current balance, display "Insufficient balance" and skip it.
# Stop processing if the balance becomes negative using break.


transactions = [5000, -1200, -500, 3000, -800, 10000, -15000]

balance = 0

total_deposits = 0
total_withdrawals = 0
number_of_deposits = 0
number_of_withdrawals = 0

largest_deposit = 0
largest_withdrawal = 0

for transaction in transactions:

    if transaction == 0:
        continue

    if transaction > 0:
        balance += transaction
        total_deposits += transaction
        number_of_deposits += 1

        if transaction > largest_deposit:
            largest_deposit = transaction


    else:
        withdrawal = abs(transaction)

        if withdrawal > balance:
            print("Insufficient balance for withdrawal:", withdrawal)
            continue

        balance -= withdrawal
        total_withdrawals += withdrawal
        number_of_withdrawals += 1

        if withdrawal > largest_withdrawal:
            largest_withdrawal = withdrawal

  
    if balance < 0:
        break

print("\n----- Bank Transaction Analysis -----")
print("Total deposits:", total_deposits)
print("Total withdrawals:", total_withdrawals)
print("Number of deposits:", number_of_deposits)
print("Number of withdrawals:", number_of_withdrawals)
print("Final balance:", balance)
print("Largest deposit:", largest_deposit)
print("Largest withdrawal:", largest_withdrawal)
