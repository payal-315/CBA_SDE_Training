# 2. ATM Withdrawal System
# Create an ATM simulation. Input: Current account balance, Withdrawal amount
# Rules: Withdrawal must be a multiple of ₹500. Withdrawal cannot exceed the balance. Minimum balance after withdrawal must be ₹1,000.
# If the amount is invalid, display an appropriate message. Allow the user to make multiple withdrawals until they choose to exit.


balance = float(input("Enter current account balance: "))

while True:
    print("\n----- ATM MENU -----")
    print("1. Withdraw Money")
    print("2. Exit")

    choice = int(input("Enter your choice: "))

    if choice == 1:
        amount = float(input("Enter withdrawal amount: "))

        if amount % 500 != 0:
            print("Invalid amount! Withdrawal must be a multiple of ₹500.")

        elif amount > balance:
            print("Insufficient balance!")

        elif balance - amount < 1000:
            print("Invalid withdrawal! Minimum balance of ₹1,000 must be maintained.")

        else:
            balance -= amount
            print("Withdrawal successful!")
            print("Withdrawn amount: ", amount)
            print("Remaining balance: ", balance)

    elif choice == 2:
        print("Thank you for using the ATM!")
        break

    else:
        print("Invalid choice! Please select 1 or 2.")
