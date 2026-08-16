import React, { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import { BankContext } from "../context/BankContext";

function Header() {

  const customer = useContext(AuthContext);

  const { accounts } = useContext(BankContext);

  const totalBalance = accounts.reduce(
    (total, account) =>
      total + account.balance,
    0
  );

  return (
    <header>

      <h2>Banking Dashboard</h2>

      <h3>
        Welcome {customer.name}
      </h3>

      <p>
        Customer ID: {customer.customerId}
      </p>

      <p>
        Account Type: {customer.accountType}
      </p>

      <h2>
        Total Balance: ₹{totalBalance.toLocaleString()}
      </h2>

      <hr />

    </header>
  );
}

export default Header;