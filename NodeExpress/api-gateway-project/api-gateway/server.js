const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

const PORT = 5000;


app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.json({
        message: "API Gateway is running",
        services: {
            users: "/api/users",
            userById: "/api/users/:id",
            orders: "/api/orders",
            orderById: "/api/orders/:id"
        }
    });
});

// User Service
app.use(
    "/api/users",
    createProxyMiddleware({
        target: "http://localhost:5001",
        changeOrigin: true,
        pathRewrite: {
            "^/api/users": "/users"
        }
    })
);

app.use(
    "/api/orders",
    createProxyMiddleware({
        target: "http://localhost:5002",
        changeOrigin: true,
        pathRewrite: {
            "^/api/orders": "/orders"
        }
    })
);

app.listen(PORT, () => {
    console.log(`API Gateway running on http://localhost:${PORT}`);
});
