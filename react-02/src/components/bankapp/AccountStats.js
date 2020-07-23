import React from "react";
import functions from "../../account-pojo.js";

const AccountStats = props => {
  return (
    <div>
      <p>
        <label>Number of accounts: </label>
        <span>{props.accounts.length}</span>
      </p>
      <p>
        <label>Total Amount: </label>
        <span>${functions.sumAccounts(props.accounts)}</span>
      </p>
      <p>
        <label>Highest Account: </label>
        <span>{functions.getHighestName(props.accounts)} </span>
        <span>${functions.getHighestBalance(props.accounts)}</span>
      </p>
      <p>
        <label>Lowest Account: </label>
        <span>{functions.getLowestName(props.accounts)} - </span>
        <span>${functions.getLowestBalance(props.accounts)}</span>
      </p>
    </div>
  );
};

export default AccountStats;