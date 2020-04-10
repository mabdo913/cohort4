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
        accounts.updateBal(parseInt(e.target.id), 'withdraw', parseFloat(inputAmount.value));
        const amt = parseFloat(inputAmount.value);
        updateAccountDetails(parseInt(e.target.id));
        label.textContent = 'Withdrawl in the amount of $' + amt + ' was successful!';
    }

    if (e.target.nodeName == "BUTTON" && e.target.textContent == "Deposit") {
        accounts.updateBal(parseInt(e.target.id), 'deposit', parseFloat(inputAmount.value));
        const amt = parseFloat(inputAmount.value);
        updateAccountDetails(parseInt(e.target.id));        
        label.textContent = 'Deposit in the amount of $' + amt + ' was successful!';
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
    const current = accounts.findAccount(id);
    
    divHTML = `<div id=${current["id"]} class='card'>
                        <h2>Account Name: ${current["name"]}</h4>
                        <h2>Account Number: ${current["id"]}</h4>
                        <h2>Balance: $${current["balance"]}</h4>
                        <input id="inputAmount" placeholder="Enter amount">
                        <button id=${current["id"]}>Withdraw</button>                        
                        <button id=${current["id"]}>Deposit</button><br><br>
                        <label id ="label">
                    </div>`;

    document.querySelector("#account-details").innerHTML = divHTML;
};
