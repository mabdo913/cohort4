import Account, { account, accountController } from './account';

const acc = new Account('test',500);

test("Check if object is instance of Account class: ", ()=> {       
    expect(acc instanceof Account).toBe(true);
});

test("Check value of name and balance: ", () => {  
  expect(acc.name).toBe('test');  
  expect(acc.balance).toBe(500);
});

test("Check if deposit function works: ", () => {  
    acc.deposit(100);
    expect(acc.balance).toBe(600);      
  });

  test("Check if withdraw function works: ", () => {  
    acc.withdraw(200);
    expect(acc.balance).toBe(400);      
  });

  test("Check if show function works: ", () => {      
    expect(acc.show()).toBe(400);      
  });