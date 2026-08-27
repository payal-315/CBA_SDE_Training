import { useState } from "react";

export function MfaLoginForm() {
  const [process, setProcess] = useState(1);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  // Step 1: Login
  const login = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok && data.isMfaRequired) {
        setProcess(2);

        alert(
          "MFA is required. Please enter the OTP sent to your registered device."
        );
      } else {
        alert(data.message || "Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Cannot connect to backend. Make sure the server is running.");
    }
  };

  // Step 2: Verify OTP
  const verifyOtp = async () => {
    if (!otp) {
      alert("Please enter OTP");
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          otp,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");

        // Store JWT token
        localStorage.setItem("token", data.token);

        console.log("JWT Token:", data.token);
      } else {
        alert(data.message || "Invalid OTP");
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      alert("Cannot connect to backend. Make sure the server is running.");
    }
  };

  return (
    <div className="login-container">

      {/* LOGIN STEP */}
      {process === 1 && (
        <>
          <h2>Login</h2>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />
          <br />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br />
          <br />

          <button onClick={login}>
            Login
          </button>
        </>
      )}

      {/* OTP STEP */}
      {process === 2 && (
        <>
          <h2>Two-Factor Authentication</h2>

          <p>
            Enter the OTP sent to your registered device.
          </p>

          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <br />
          <br />

          <button onClick={verifyOtp}>
            Verify OTP
          </button>
        </>
      )}
    </div>
  );
}