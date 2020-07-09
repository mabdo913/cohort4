import { DOMFunctions, AccountController } from "./account.js";

const accounts = new AccountController();

// event listeners
addButton.addEventListener("click", () => {
    accounts.newAccount(accountName.value, accountBalance.value);
    DOMFunctions.updateAccounts(accounts);
});

document.body.addEventListener("click", (e) => {
    if (e.target.textContent == "Delete") {
        accounts.removeAccount(parseInt(e.target.parentNode.id));
        DOMFunctions.updateAccounts(accounts);
    }

    else if (e.target.textContent == "Details") {        
        DOMFunctions.updateAccountDetails(parseInt(e.target.parentNode.id),accounts);
    }
});

document.body.addEventListener("click", (e) => {
    if (e.target.textContent == "Withdraw") {  
        const id = document.querySelector("h2:nth-of-type(2)").id;
        const amt = parseFloat(inputAmount.value);  

        accounts.updateBal(parseInt(id), 'withdraw', parseFloat(inputAmount.value));              
        DOMFunctions.updateAccountDetails(parseInt(id),accounts);
        label.textContent = 'A withdrawl in the amount of $' + amt + ' has been made';
    }

    else if (e.target.textContent == "Deposit") {
        const id = document.querySelector("h2:nth-of-type(2)").id;
        const amt = parseFloat(inputAmount.value);

        accounts.updateBal(parseInt(id), 'deposit', amt);        
        DOMFunctions.updateAccountDetails(parseInt(id),accounts);        
        label.textContent = 'A deposit in the amount of $' + amt + ' has been made';
    }
});

