const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();

const PORT = 5001;
const JWT_SECRET = "my-secret-key";

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("MFA Backend is running!");
});

// Demo user
const user = {
  email: "test@gmail.com",
  password: "123456",
  otp: "123456"
};

// Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log("Login request received");

  if (email !== user.email || password !== user.password) {
    return res.status(401).json({
      message: "Invalid email or password"
    });
  }

  res.json({
    isMfaRequired: true,
    message: "OTP sent to registered device"
  });
});

// Verify OTP
app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  console.log("OTP verification received");

  if (email !== user.email) {
    return res.status(401).json({
      message: "Invalid user"
    });
  }

  if (otp !== user.otp) {
    return res.status(401).json({
      message: "Invalid OTP"
    });
  }

  const token = jwt.sign(
    { email: user.email },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({
    message: "Login successful",
    token: token
  });
});

app.listen(PORT, () => {
  console.log(`MFA Backend running at http://localhost:${PORT}`);
});
