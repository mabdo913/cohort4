import React from "react";

const AccountList = props => {
  return (
    <div>
      {props.accounts.map(account => (
        <div key={account.key} className="outline">
          <h4>{account.name}</h4>
          <h4>Account # {account.accountNumber}</h4>
          <h4>Balance: ${account.balance}</h4>
          <button onClick={() => props.depositHandler(account.key)}>
            Deposit $50
          </button>
          <button onClick={() => props.withdrawHandler(account.key)}>
            Withdraw $50
          </button>
          <button onClick={() => props.deleteHandler(account.key)}>
            Delete Account
          </button>
          <label id="message" />
        </div>
      ))}
    </div>
  );
};

export default AccountList;