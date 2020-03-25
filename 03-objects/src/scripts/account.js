export default class Account {

      constructor(accountName, initialBalance) {
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

    
}