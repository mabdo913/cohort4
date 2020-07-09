export class Account {

      constructor(accountName, initialBalance) {
        this.id = Math.floor(1000 + Math.random() * 9000);  
        this.name = accountName,
        this.balance = initialBalance;
    }

    deposit(amount) {        
        this.balance = parseFloat(this.balance) + amount;         
    }

    withdraw(amount) {
        this.balance = this.balance - amount;
    }

    show() {
        return this.balance;
    }
 

}

export class AccountController {

    constructor() {        
        this.accounts = [];
    }

    newAccount(name, startingBalance) {        
        const account = new Account(name, startingBalance);
        this.accounts.push(account);
        return account.id;
    }

    findAccount(id) {
        return this.accounts.find(account => account.id === id);
    }

    removeAccount(id) {        
        this.accounts = this.accounts.filter(account => account.id !== id);
    }

    updateBal(id, action, amt) {
        const account = this.accounts.find(acc => acc.id === id);

        if (action == 'deposit') {            
            account.deposit(amt)
        }

        else if (action == 'withdraw') {
            account.withdraw(amt);
        }        
        
    }

}

export const DOMFunctions = {

    updateAccounts: (accounts) => { 
        let divHTML = "";
        accounts.accounts.forEach((account) => {
            divHTML += `<div id=${account["id"]} class='card'>
                            <h4>Account Name: ${account["name"]}</h4>
                            <h4>Acc # ${account["id"]}</h4>
                            <button>Delete</button>
                            <button>Details</button>
                        </div>`;
        });
        document.querySelector("#accounts").innerHTML = divHTML;
    },    

    updateAccountDetails: (id,accounts) => {
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
    }

}