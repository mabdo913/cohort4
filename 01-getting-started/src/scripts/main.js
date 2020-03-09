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

// add input value to array if it is a number
arrayAddButton.addEventListener('click', (() => {
    if (isNaN(arrInput.value)) {
        message.textContent = "Not a number. Cannot add to array";
    }
    else {
        arrayFunctions.addNumToArray(numberArray,arrInput.value);
        message.textContent = "Number " + arrInput.value + " was successfully added to array";
    }          
}));

// display contents of array in string form
showButton.addEventListener('click', (() => {
    message.textContent = arrayFunctions.show(numberArray);
}));

//sum up all values of array and display
totalButton.addEventListener('click', (() => {    
    let sum = arrayFunctions.arraySum(numberArray);
    message.textContent = sum;

}));

//clear array. update message div
clearButton.addEventListener('click', (() => {
    numberArray = arrayFunctions.clear(numberArray);
    message.textContent = numberArray;
}));