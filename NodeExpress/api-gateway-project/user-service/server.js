const express = require("express");

const app = express();

const PORT = 5001;

// Sample users
const users = [
    {
        id: 1,
        name: "Kavish",
        email: "kv@gmail.com"
    },
    {
        id: 2,
        name: "Suraj",
        email: "s@gmail.com"
    },
    {
        id: 3,
        name: "Sneha",
        email: "sne@gmail.com"
    }
];

// Get all users
app.get("/users", (req, res) => {
    res.json(users);
});

// Get user by ID
app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json(user);
});

// Start server
app.listen(PORT, () => {
    console.log(`User Service running on http://localhost:${PORT}`);
});
