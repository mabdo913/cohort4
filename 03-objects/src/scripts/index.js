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

    if (e.target.nodeName == "BUTTON" && e.target.textContent == "Details") {        
        updateAccountDetails(parseInt(e.target.parentNode.id));
    }
});

document.body.addEventListener("click", (e) => {
    if (e.target.nodeName == "BUTTON" && e.target.textContent == "Withdraw") {  
        const id = document.querySelector("h2:nth-of-type(2)").id;
        const amt = parseFloat(inputAmount.value);  

        accounts.updateBal(parseInt(id), 'withdraw', parseFloat(inputAmount.value));              
        updateAccountDetails(parseInt(id));
        label.textContent = 'A withdrawl in the amount of $' + amt + ' has been made';
    }

    if (e.target.nodeName == "BUTTON" && e.target.textContent == "Deposit") {
        const id = document.querySelector("h2:nth-of-type(2)").id;
        const amt = parseFloat(inputAmount.value);

        accounts.updateBal(parseInt(id), 'deposit', amt);        
        updateAccountDetails(parseInt(id));        
        label.textContent = 'A deposit in the amount of $' + amt + ' has been made';
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
                        <button>Details</button>
                    </div>`;
    });
    document.querySelector("#accounts").innerHTML = divHTML;
};

const updateAccountDetails = (id) => {
    let divHTML = "";
    const current = accounts.findAccount(id);
    
    divHTML = `<div id=${current["id"]} class='card'>
                        <h2>Account Name: ${current["name"]}</h4>
                        <h2 id="${current["id"]}">Account Number: ${current["id"]}</h4>
                        <h2>Balance: $${current["balance"]}</h4>                        
                        <input id="inputAmount" type="text" placeholder="Enter amount" required>
                        <button>Withdraw</button>                        
                        <button>Deposit</button><br><br>
                        <label id ="label">                        
                </div>`;

    document.querySelector("#account-details").innerHTML = divHTML;
};
