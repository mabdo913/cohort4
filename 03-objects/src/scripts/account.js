export class Account {

      constructor(accountName, initialBalance) {
        this.id = Math.floor(1000 + Math.random() * 9000);  
        this.name = accountName,
        this.balance = initialBalance;
    }

    deposit(amount) {
        this.balance = this.balance + amount;        
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