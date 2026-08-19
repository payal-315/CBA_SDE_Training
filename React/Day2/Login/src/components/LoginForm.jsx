import React, { useEffect, useRef, useState } from "react";

function LoginForm() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameRef = useRef();
  const passwordRef = useRef();

  // Focus username when page loads
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    // Username empty
    if (username.trim() === "") {
      usernameRef.current.focus();
      return;
    }

    // Username valid, password empty
    if (password.trim() === "") {
      passwordRef.current.focus();
      return;
    }

    // Successful login
    alert("Login Successful");

    // Clear form
    setUsername("");
    setPassword("");

    // Focus username again
    usernameRef.current.focus();
  };

  return (
    <div>

      <h2>Login Form</h2>

      <form onSubmit={handleLogin}>

        <div>
          <label>Username: </label>

          <input
            type="text"
            ref={usernameRef}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Password: </label>

          <input
            type="password"
            ref={passwordRef}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default LoginForm;