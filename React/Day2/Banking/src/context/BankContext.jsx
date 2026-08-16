import React, {
  createContext,
  useCallback,
  useState
} from "react";

export const BankContext = createContext();

function BankProvider({ children }) {

  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: "Savings",
      balance: 85000
    },
    {
      id: 2,
      name: "Current",
      balance: 42000
    },
    {
      id: 3,
      name: "Investment",
      balance: 150000
    }
  ]);

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      name: "Salary",
      amount: 80000,
      type: "credit"
    },
    {
      id: 2,
      name: "Amazon",
      amount: 4500,
      type: "debit"
    },
    {
      id: 3,
      name: "Electricity",
      amount: 2000,
      type: "debit"
    },
    {
      id: 4,
      name: "Investment",
      amount: 10000,
      type: "debit"
    }
  ]);


  // Deposit
  const deposit = useCallback((accountId, amount) => {

    setAccounts(prevAccounts =>
      prevAccounts.map(account =>
        account.id === accountId
          ? {
              ...account,
              balance: account.balance + amount
            }
          : account
      )
    );

  }, []);


  // Withdraw
  const withdraw = useCallback((accountId, amount) => {

    setAccounts(prevAccounts =>
      prevAccounts.map(account =>
        account.id === accountId
          ? {
              ...account,
              balance: account.balance - amount
            }
          : account
      )
    );

  }, []);


  // Transfer
  const transfer = useCallback(
    (fromId, toId, amount) => {

      setAccounts(prevAccounts =>
        prevAccounts.map(account => {

          if (account.id === fromId) {
            return {
              ...account,
              balance: account.balance - amount
            };
          }

          if (account.id === toId) {
            return {
              ...account,
              balance: account.balance + amount
            };
          }

          return account;

        })
      );

    },
    []
  );


  return (
    <BankContext.Provider
      value={{
        accounts,
        transactions,
        deposit,
        withdraw,
        transfer
      }}
    >
      {children}
    </BankContext.Provider>
  );
}

export default BankProvider;