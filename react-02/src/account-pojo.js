export class Account {
    constructor(accountName, initialBalance, key) {
      this.accountNumber = Math.floor(1000 + Math.random() * 9000);
      this.name = accountName;
      this.balance = parseFloat(initialBalance);
      this.key = key;
    }  
  }
  
  const functions = {
    newAccount(accounts, name, startingBalance, key = null) {
      if (key === null) {
        if (accounts.length >= 1) {
          let maxKey = accounts.reduce((a, b) => (a.key > b.key ? a : b)).key;
          key = maxKey + 1;
        } else {
          key = 1;
        }
      }
      const account = new Account(name, startingBalance, key);
      accounts.push(account);
      return accounts;
    },
  
    sumAccounts(accounts) {
      return accounts.reduce(
        (accum, accounts) => accum + parseFloat(accounts.balance),
        0
      );
    },
  
    getHighestName(accounts) {
      return accounts.reduce(
        (prev, current) => (prev.balance > current.balance ? prev : current),
        0
      ).name;
    },
  
    getHighestBalance(accounts) {
      return accounts.reduce(
        (prev, current) => (prev.balance > current.balance ? prev : current),
        0
      ).balance;
    },
  
    getLowestName(accounts) {
      return accounts.reduce(
        (prev, current) => (prev.balance < current.balance ? prev : current),
        0
      ).name;
    },
  
    getLowestBalance(accounts) {
      return accounts.reduce(
        (prev, current) => (prev.balance < current.balance ? prev : current),
        0
      ).balance;
    },
  
    findAccount(key) {
      return this.accounts.find(account => account.key === key);
    },
  
    removeAccount(accounts,key) {
      return accounts.filter(account => account.key !== key);
    }  
  };
  
  export default functions;