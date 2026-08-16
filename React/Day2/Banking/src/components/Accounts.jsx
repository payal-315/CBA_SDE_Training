import React, { useContext } from "react";

import { BankContext } from "../context/BankContext";

function Accounts() {

  const { accounts } = useContext(BankContext);

  return (
    <div>

      <h2>Accounts</h2>

      {accounts.map(account => (

        <div key={account.id}>

          <h3>
            {account.name}
          </h3>

          <p>
            ₹{account.balance.toLocaleString()}
          </p>

          <hr />

        </div>

      ))}

    </div>
  );
}

export default Accounts;