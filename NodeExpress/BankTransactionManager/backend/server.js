const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// =================================
// ACCOUNT DATA
// =================================

let balance = 25000;

let transactions = [];

let nextId = 1;


// =================================
// GET ACCOUNT BALANCE
// =================================

app.get("/balance", (req, res) => {

    res.json({
        balance: balance
    });

});


// =================================
// GET TRANSACTION HISTORY
// =================================

app.get("/transactions", (req, res) => {

    res.json(transactions);

});


// =================================
// DEPOSIT MONEY
// =================================

app.post("/deposit", (req, res) => {

    const amount = Number(req.body.amount);

    if (!amount || amount <= 0) {

        return res.status(400).json({
            message: "Enter a valid amount"
        });

    }

    balance += amount;

    const transaction = {

        id: nextId++,

        type: "credit",

        amount: amount,

        date: new Date().toLocaleString(),

        description: "Money deposited"

    };

    transactions.unshift(transaction);

    res.json({

        message: "Money deposited successfully",

        balance: balance,

        transaction: transaction

    });

});


// =================================
// WITHDRAW MONEY
// =================================

app.post("/withdraw", (req, res) => {

    const amount = Number(req.body.amount);

    if (!amount || amount <= 0) {

        return res.status(400).json({
            message: "Enter a valid amount"
        });

    }

    if (amount > balance) {

        return res.status(400).json({
            message: "Insufficient balance"
        });

    }

    balance -= amount;

    const transaction = {

        id: nextId++,

        type: "debit",

        amount: amount,

        date: new Date().toLocaleString(),

        description: "Money withdrawn"

    };

    transactions.unshift(transaction);

    res.json({

        message: "Money withdrawn successfully",

        balance: balance,

        transaction: transaction

    });

});


// =================================
// START SERVER
// =================================

app.listen(5000, () => {

    console.log(
        "Server running on http://localhost:5000"
    );

});
