import { Account, AccountController } from './account.js';

const testAccount = new Account("My First Account", 50);
const controller = new AccountController();

test("Check if object is instance of Account class: ", () => {
  expect(testAccount instanceof Account).toBe(true);
});

test("Check value of name and balance: ", () => {
  expect(testAccount.name).toBe("My First Account");
  expect(testAccount.balance).toBe(50);
});

test("Check if deposit function works: ", () => {
  testAccount.deposit(100);
  expect(testAccount.balance).toBe(150);
});

test("Check if withdraw function works: ", () => {
  testAccount.withdraw(200);
  expect(testAccount.balance).toBe(-50);
});

test("Check if show function works: ", () => {
  expect(testAccount.show()).toBe(-50);
});

test("Check if 'controller' is instance of AccountController class: ", () => {
  expect(controller instanceof AccountController).toBe(true);
  expect(controller.accounts instanceof Array).toBe(true);
});

test("Check if newAccount function works", () => {
  const id = controller.newAccount("College Fund", 1500);
  controller.newAccount("Christmas Vacation Fund", 2000);
  controller.newAccount("Main Chequing Account", 1200);
  controller.newAccount("Swiss Bank Account", 400000);
  
  expect(controller.accounts.length).toBe(4);
  expect(controller.accounts[0] instanceof Account).toBe(true);
  expect(controller.accounts[0].balance).toBe(1500);
});

test("Check if removeAccount function works", () => {
  const id = controller.accounts[2]["id"];  
  console.log(id);
  controller.removeAccount(id);

  expect(controller.accounts.length).toBe(3);
  expect(controller.accounts[1]["name"]).toBe("Christmas Vacation Fund");
  expect(controller.accounts[2]["balance"]).toBe(400000);
});

test("Check if findAccount function works", () => {
  const id = controller.accounts[2]["id"];
  const found = controller.findAccount(id);

  expect(found instanceof Account).toBe(true);
  expect(found["id"]).toBe(id);
  expect(found["name"]).toBe("Swiss Bank Account");
  expect(found["balance"]).toBe(400000);
});

test("Check if updateBal function works", () => {
  const id = controller.accounts[2]["id"];  
  controller.updateBal(id,'withdraw',250000);  
  expect(controller.accounts[2]["balance"]).toBe(150000);  
  controller.updateBal(id,'deposit',100000);
  expect(controller.accounts[2]["balance"]).toBe(250000);
});