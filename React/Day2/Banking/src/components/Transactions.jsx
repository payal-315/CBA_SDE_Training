import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";

import { BankContext } from "../context/BankContext";


function Transactions() {

  const {
    transactions
  } = useContext(BankContext);

  const [search, setSearch] = useState("");

  const [searchedTransactions, setSearchedTransactions] =
    useState(transactions);


  // Search input reference
  const searchRef = useRef(null);

  // Previous search reference
  const previousSearchRef = useRef("");


  // Store previous search value
  useEffect(() => {

    previousSearchRef.current = search;

  }, [search]);


  // Search transactions
  const searchTransactions = useCallback(() => {

    const result = transactions.filter(transaction =>
      transaction.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    setSearchedTransactions(result);

    // Focus search box
    searchRef.current.focus();

  }, [search, transactions]);


  // Update displayed transactions when transactions change
  useEffect(() => {

    setSearchedTransactions(transactions);

  }, [transactions]);


  // Total Credits
  const totalCredits = useMemo(() => {

    return transactions
      .filter(transaction =>
        transaction.type === "credit"
      )
      .reduce(
        (total, transaction) =>
          total + transaction.amount,
        0
      );

  }, [transactions]);


  // Total Debits
  const totalDebits = useMemo(() => {

    return transactions
      .filter(transaction =>
        transaction.type === "debit"
      )
      .reduce(
        (total, transaction) =>
          total + transaction.amount,
        0
      );

  }, [transactions]);


  // Highest Transaction
  const highestTransaction = useMemo(() => {

    return transactions.reduce(
      (highest, transaction) =>
        transaction.amount > highest.amount
          ? transaction
          : highest
    );

  }, [transactions]);


  // Average Transaction
  const averageTransaction = useMemo(() => {

    if (transactions.length === 0) {
      return 0;
    }

    const total = transactions.reduce(
      (sum, transaction) =>
        sum + transaction.amount,
      0
    );

    return total / transactions.length;

  }, [transactions]);


  return (
    <div>

      <h2>Transactions</h2>


      <input
        ref={searchRef}
        type="text"
        placeholder="Search Transactions"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <button onClick={searchTransactions}>
        Search
      </button>


      <p>
        Previous Search:
        {" "}
        {previousSearchRef.current}
      </p>


      <hr />


      {searchedTransactions.map(transaction => (

        <div key={transaction.id}>

          <h3>
            {transaction.name}

            {" "}

            {transaction.type === "credit"
              ? `+₹${transaction.amount.toLocaleString()}`
              : `-₹${transaction.amount.toLocaleString()}`
            }
          </h3>

        </div>

      ))}


      <hr />


      <h3>Statistics</h3>

      <p>
        Total Credits:
        ₹{totalCredits.toLocaleString()}
      </p>

      <p>
        Total Debits:
        ₹{totalDebits.toLocaleString()}
      </p>

      <p>
        Highest Transaction:
        {highestTransaction.name}
        {" "}
        ₹{highestTransaction.amount.toLocaleString()}
      </p>

      <p>
        Average Transaction:
        ₹{averageTransaction.toLocaleString()}
      </p>

    </div>
  );
}

export default Transactions;