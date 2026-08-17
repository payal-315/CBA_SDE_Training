import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App.jsx";

import AuthProvider
  from "./context/AuthContext";

import CartProvider
  from "./context/CartContext";

import ThemeProvider
  from "./context/ThemeContext";


createRoot(
  document.getElementById("root")
).render(

  <StrictMode>

    <AuthProvider>

      <CartProvider>

        <ThemeProvider>

          <App />

        </ThemeProvider>

      </CartProvider>

    </AuthProvider>

  </StrictMode>

);