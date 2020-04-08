import { Account, AccountController } from './account.js';

const accounts = new AccountController();

addButton.addEventListener("click", () => {
    accounts.newAccount(accountName.value, accountBalance.value);
    updateAccounts();
});

document.body.addEventListener("click", e => {
    if (e.target.nodeName == 'BUTTON' && e.target.textContent == 'Delete') {
        console.log(e.target.parentNode.id);
        accounts.removeAccount(parseInt(e.target.parentNode.id));
        updateAccounts();
    }

    if (e.target.className == 'card') {
        console.log(e.target.id);        
        updateAccountDetails(parseInt(e.target.id));
    }

});

const updateAccounts = () => {
    let divHTML = '';
    accounts.accounts.forEach(account => {
        divHTML += `<div id=${account['id']} class='card'>
                        <h4>${account['name']} Account</h4>
                        <h4>Acc # ${account['id']}</h4>
                        <button>Delete</button>
                    </div>`;
    });
    document.querySelector("#accounts").innerHTML = divHTML;
}

const updateAccountDetails = (id) => {
    let divHTML = '';
    const found = accounts.findAccount(id);
   
        divHTML = `<div id=${found['id']} class='card'>
                        <h2>Account Name: ${found['name']} Account</h4>
                        <h2>Account Number: ${found['id']}</h4>
                        <h2>Balance: $${found['balance']}</h4>
                        <input placeholder="Enter amount">
                        <button>Withdraw</button>
                        <input placeholder="Enter amount">
                        <button>Deposit</button>
                    </div>`;
    
    document.querySelector("#account-details").innerHTML = divHTML;
}
