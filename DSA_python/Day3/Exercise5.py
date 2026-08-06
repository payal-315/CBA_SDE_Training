# Exercise 5: Bank ATM Simulation
# Scenario: Develop a simple ATM system.
# Requirements: Create an Account class. Store: Account Number, Account Holder, Balance
# Methods: Deposit money, Withdraw money, Display balance
# Rules: Cannot withdraw more than available balance. Display proper success/error messages. Continue transactions until user chooses Exit.
# while loop, Menu-driven program, Methods, Object



class Account:
    def __init__(self, acc_no, holder, balance):
        self.acc_no = acc_no
        self.holder = holder
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        print("Amount Deposited Successfully!")

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            print("Withdrawal Successful!")
        else:
            print("Insufficient Balance!")

    def display_balance(self):
        print("Current Balance: ₹", self.balance)


acc_no = int(input("Enter Account Number: "))
holder = input("Enter Account Holder Name: ")
balance = float(input("Enter Initial Balance: "))

acc = Account(acc_no, holder, balance)

while True:
    print("\n----- ATM MENU -----")
    print("1. Deposit")
    print("2. Withdraw")
    print("3. Display Balance")
    print("4. Exit")

    choice = int(input("Enter your choice: "))

    if choice == 1:
        amount = float(input("Enter Amount to Deposit: "))
        acc.deposit(amount)

    elif choice == 2:
        amount = float(input("Enter Amount to Withdraw: "))
        acc.withdraw(amount)

    elif choice == 3:
        acc.display_balance()

    elif choice == 4:
        print("Thank You! Visit Again.")
        break

    else:
        print("Invalid Choice!")





