import functions from './functions.js';
import taxCalculatorFunctions from './tax-calculator.js';
import calculatorFunctions from './calculator.js';
import arrayFunctions from './arrays.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));


// CALCULATOR
let isOperatorclicked = false;
let num1,num2 = 0;

addButton.addEventListener('click', (() => {
    if (!isOperatorclicked)
        num1 = input.value;
    else
        num2 = input.value;
    isOperatorclicked=true;
    alert(num1+num2+isOperatorclicked)
}));


// TAX CALCULATOR
// event listener for calculate button in tax calculator
calcButton.addEventListener('click', (() => {
    let income = document.getElementById("income");
    let result = document.getElementById("result");   
    result.textContent = " $ " + taxCalculatorFunctions.calculate(income.value);
}));

// ARRAYS
// event listener for add button in arrays section
let numberArray = [];
let arrInput = document.getElementById("arrayInput");
let message = document.getElementById("message");  

arrayAddButton.addEventListener('click', (() => {

    arrayFunctions.addNumToArray(numberArray,arrInput.value);
    message.textContent = "Number successfully added to array";
}));

showButton.addEventListener('click', (() => {
    /* let arrInput = document.getElementById("arrayInput");
    let message = document.getElementById("message");   */
    
    message.textContent = arrayFunctions.show(numberArray);
}));