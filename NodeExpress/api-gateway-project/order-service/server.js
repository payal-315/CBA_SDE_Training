const express = require("express");

const app = express();

const PORT = 5002;

// Sample orders
const orders = [
    {
        id: 101,
        userId: 1,
        product: "Laptop",
        amount: 60000
    },
    {
        id: 102,
        userId: 2,
        product: "Mobile",
        amount: 30000
    }
];

// Get all orders
app.get("/orders", (req, res) => {
    res.json(orders);
});

// Get order by ID
app.get("/orders/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const order = orders.find(order => order.id === id);

    if (!order) {
        return res.status(404).json({
            message: "Order not found"
        });
    }

    res.json(order);
});

// Start server
app.listen(PORT, () => {
    console.log(`Order Service running on http://localhost:${PORT}`);
});
