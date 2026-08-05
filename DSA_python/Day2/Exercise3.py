# Exercise 3: Banking System  Scenario
# Create a banking application.
# Requirements: Create account. Deposit money. Withdraw money. Transfer money. Print mini statement. Calculate interest.
# Classes: Bank, Account, SavingsAccount, CurrentAccount, Transaction
# OOP Concepts: Inheritance, Method overriding, Polymorphism, Encapsulation
# Savings account earns interest. Current account has overdraft limit. Maintain transaction history.


class Account:
    def __init__(self, acc_no, name, balance):
        self.acc_no = acc_no
        self.name = name
        self.__balance = balance         
        self.transactions = []

    def deposit(self, amount):
        self.__balance += amount
        self.transactions.append("Deposited ₹" + str(amount))
        print("Amount Deposited")

    def withdraw(self, amount):
        if amount <= self.__balance:
            self.__balance -= amount
            self.transactions.append("Withdrawn ₹" + str(amount))
            print("Amount Withdrawn")
        else:
            print("Insufficient Balance")

    def transfer(self, other, amount):
        if amount <= self.__balance:
            self.__balance -= amount
            other.deposit(amount)
            self.transactions.append("Transferred ₹" + str(amount))
            print("Transfer Successful")
        else:
            print("Insufficient Balance")

    def get_balance(self):
        return self.__balance

    def mini_statement(self):
        print("\nMini Statement")
        for t in self.transactions:
            print(t)


class SavingsAccount(Account):
    def calculate_interest(self):
        interest = self.get_balance() * 0.04
        print("Interest:", interest)


class CurrentAccount(Account):
    def __init__(self, acc_no, name, balance):
        super().__init__(acc_no, name, balance)
        self.overdraft = 5000

    def withdraw(self, amount):
        if amount <= self.get_balance() + self.overdraft:
            balance = self.get_balance() - amount
            self._Account__balance = balance
            self.transactions.append("Withdrawn ₹" + str(amount))
            print("Amount Withdrawn")
        else:
            print("Overdraft Limit Exceeded")


class Bank:
    def __init__(self):
        self.accounts = []

    def create_account(self, account):
        self.accounts.append(account)
        print("Account Created")


class Transaction:
    def __init__(self, account):
        self.account = account


bank = Bank()

acc1 = SavingsAccount(101, "Payal", 10000)
acc2 = CurrentAccount(102, "Sakshi", 5000)

bank.create_account(acc1)
bank.create_account(acc2)

acc1.deposit(2000)
acc1.withdraw(3000)
acc1.transfer(acc2, 2000)

acc1.mini_statement()

acc1.calculate_interest()

acc2.withdraw(8000)

print("Savings Balance:", acc1.get_balance())
print("Current Balance:", acc2.get_balance())


