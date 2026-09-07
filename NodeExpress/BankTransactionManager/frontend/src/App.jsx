import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

    const API = "http://localhost:5000";

    const [balance, setBalance] = useState(25000);

    const [transactions, setTransactions] = useState([]);

    const [amount, setAmount] = useState("");


    // =============================
    // GET BALANCE
    // =============================

    const getBalance = async () => {

        try {

            const response = await axios.get(
                `${API}/balance`
            );

            setBalance(response.data.balance);

        } catch (error) {

            console.log(error);

        }

    };


    // =============================
    // GET TRANSACTIONS
    // =============================

    const getTransactions = async () => {

        try {

            const response = await axios.get(
                `${API}/transactions`
            );

            setTransactions(response.data);

        } catch (error) {

            console.log(error);

        }

    };


    // =============================
    // LOAD DATA
    // =============================

    useEffect(() => {

        getBalance();

        getTransactions();

    }, []);


    // =============================
    // DEPOSIT
    // =============================

    const deposit = async () => {

        if (!amount || Number(amount) <= 0) {

            alert("Enter a valid amount");

            return;
        }

        try {

            const response = await axios.post(
                `${API}/deposit`,
                {
                    amount: Number(amount)
                }
            );

            alert(response.data.message);

            setAmount("");

            getBalance();

            getTransactions();

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Deposit failed"
            );

        }

    };


    // =============================
    // WITHDRAW
    // =============================

    const withdraw = async () => {

        if (!amount || Number(amount) <= 0) {

            alert("Enter a valid amount");

            return;
        }

        try {

            const response = await axios.post(
                `${API}/withdraw`,
                {
                    amount: Number(amount)
                }
            );

            alert(response.data.message);

            setAmount("");

            getBalance();

            getTransactions();

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Withdrawal failed"
            );

        }

    };


    return (

        <div className="container">

            <h1>Bank Transaction Manager</h1>


            {/* ==========================
                BALANCE
            ========================== */}

            <div className="balance-card">

                <p>Current Balance</p>

                <h2>
                    ₹{balance.toLocaleString("en-IN")}
                </h2>

            </div>


            {/* ==========================
                TRANSACTION
            ========================== */}

            <div className="transaction-box">

                <h2>Make a Transaction</h2>

                <input
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) =>
                        setAmount(e.target.value)
                    }
                />

                <div>

                    <button
                        className="deposit"
                        onClick={deposit}
                    >
                        Deposit Money
                    </button>

                    <button
                        className="withdraw"
                        onClick={withdraw}
                    >
                        Withdraw Money
                    </button>

                </div>

            </div>


            {/* ==========================
                TRANSACTION HISTORY
            ========================== */}

            <div className="history">

                <h2>Transaction History</h2>

                {transactions.length === 0 ? (

                    <p className="empty">
                        No transactions yet
                    </p>

                ) : (

                    <div>

                        {transactions.map(
                            transaction => (

                                <div
                                    className="transaction"
                                    key={transaction.id}
                                >

                                    <div className="indicator">

                                        <span
                                            className={
                                                transaction.type === "credit"
                                                    ? "credit-icon"
                                                    : "debit-icon"
                                            }
                                        >
                                            {transaction.type === "credit"
                                                ? "+"
                                                : "-"}
                                        </span>

                                    </div>


                                    <div className="details">

                                        <h3>
                                            {transaction.description}
                                        </h3>

                                        <p>
                                            {transaction.date}
                                        </p>

                                    </div>


                                    <div
                                        className={
                                            transaction.type === "credit"
                                                ? "credit"
                                                : "debit"
                                        }
                                    >

                                        {transaction.type === "credit"
                                            ? "+"
                                            : "-"}
                                        ₹
                                        {transaction.amount.toLocaleString(
                                            "en-IN"
                                        )}

                                    </div>

                                </div>

                            )
                        )}

                    </div>

                )}

            </div>


            {/* ==========================
                BALANCE CALCULATION
            ========================== */}

            <div className="summary">

                <h2>Account Summary</h2>

                <p>
                    Opening Balance:
                    <span>
                        ₹25,000
                    </span>
                </p>

                <p>
                    Total Credit:
                    <span className="credit">
                        +₹
                        {transactions
                            .filter(
                                t => t.type === "credit"
                            )
                            .reduce(
                                (sum, t) =>
                                    sum + t.amount,
                                0
                            )
                            .toLocaleString("en-IN")}
                    </span>
                </p>

                <p>
                    Total Debit:
                    <span className="debit">
                        -₹
                        {transactions
                            .filter(
                                t => t.type === "debit"
                            )
                            .reduce(
                                (sum, t) =>
                                    sum + t.amount,
                                0
                            )
                            .toLocaleString("en-IN")}
                    </span>
                </p>

                <hr />

                <h3>
                    Current Balance:
                    <span>
                        ₹{balance.toLocaleString("en-IN")}
                    </span>
                </h3>

            </div>

        </div>

    );
}

export default App;