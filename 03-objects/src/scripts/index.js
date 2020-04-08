import { Account, AccountController } from "./account.js";

const accounts = new AccountController();

// event listeners
addButton.addEventListener("click", () => {
    accounts.newAccount(accountName.value, accountBalance.value);
    updateAccounts();
});

document.body.addEventListener("click", (e) => {
    if (e.target.nodeName == "BUTTON" && e.target.textContent == "Delete") {
        accounts.removeAccount(parseInt(e.target.parentNode.id));
        updateAccounts();
    }

    if (e.target.className == "card") {
        updateAccountDetails(parseInt(e.target.id));
    }
});

document.body.addEventListener("click", (e) => {
    if (e.target.nodeName == "BUTTON" && e.target.textContent == "Withdraw") {
        let amt = document.getElementById("inputAmount");
        accounts.updateBal(parseInt(e.target.id), "withdraw", amt.textContent);
        label.textContent = "Withdrawl in the amount of $" + amt.value + " was successful!";
        updateAccounts();
    }

    if (e.target.nodeName == "BUTTON" && e.target.textContent == "Deposit") {
        let amt = document.getElementById("inputAmount");
        accounts.updateBal(parseInt(e.target.id), 'deposit', amt.textContent);
        label.textContent =
            "Deposit in the amount of $" + inputAmount.value + " was successful!";
        updateAccounts();
    }
});

// building and updating divs
const updateAccounts = () => {
    let divHTML = "";
    accounts.accounts.forEach((account) => {
        divHTML += `<div id=${account["id"]} class='card'>
                        <h4>${account["name"]} Account</h4>
                        <h4>Acc # ${account["id"]}</h4>
                        <button>Delete</button>
                    </div>`;
    });
    document.querySelector("#accounts").innerHTML = divHTML;
};

const updateAccountDetails = (id) => {
    let divHTML = "";
    const found = accounts.findAccount(id);

    divHTML = `<div id=${found["id"]} class='card'>
                        <h2>Account Name: ${found["name"]} Account</h4>
                        <h2>Account Number: ${found["id"]}</h4>
                        <h2>Balance: $${found["balance"]}</h4>
                        <input id="inputAmount" placeholder="Enter amount">
                        <button id="btnWithdraw">Withdraw</button>                        
                        <button id="btnDeposit">Deposit</button>
                        <label id ="label">
                    </div>`;

    document.querySelector("#account-details").innerHTML = divHTML;
};
