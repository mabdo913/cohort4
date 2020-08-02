import React from "react";

const AccountList = props => {
  return (
    <div className="acc-list">
      {props.accounts.map(account => (
        <div key={account.key} className="bg-light-grey dib br3 pa3 ma3 grow bw2 shadow-5 account-card">
          <p>{account.name}</p>
          <p>Account # {account.accountNumber}</p>
          <p>Balance: ${account.balance}</p>
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