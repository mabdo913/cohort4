import React from "react";
import functions from "../../account-pojo.js";
import AddAccount from "./AddAccount.js";

import AccountList from "./AccountList";
import AccountStats from "./AccountStats";

class BankApp extends React.Component {
  constructor() {
    super();

    this.state = {
      accounts: []
    };
  }

  addAccount = (name, balance) => {
    const accountsArray = functions.newAccount(
      this.state.accounts,
      name,
      balance
    );
    this.setState({ accounts: accountsArray });
  };

  handleWithdraw = key => {
    let accountsArray = this.state.accounts.map(account => {
      if (account.key === key) {
        account.balance -= 50;
      }
      return account;
    });
    this.setState({ accounts: accountsArray });
  };

  handleDeposit = key => {
    let accountsArray = this.state.accounts.map(account => {
      if (account.key === key) {
        account.balance += 50;
      }
      return account;
    });
    this.setState({ accounts: accountsArray });
  };

  handleDelete = key => {
    let accountsArray = functions.removeAccount(this.state.accounts, key);
    this.setState({ accounts: accountsArray });
  };

  render() {
    return (
      <div>
        <article className="cf">
          <div className="fl w-50 bg-near-white tc">
            <h2>New Account</h2>
            <AddAccount addAccount={this.addAccount} {...this.state} />
          </div>
          <div className="fl w-50 bg-light-gray tc">
            <h2>Summary of Account(s)</h2>
            <AccountStats {...this.state} />
          </div>
        </article>
        <div className="fl w-100 pa2">
          <AccountList
            {...this.state}
            depositHandler={this.handleDeposit}
            withdrawHandler={this.handleWithdraw}
            deleteHandler={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default BankApp;