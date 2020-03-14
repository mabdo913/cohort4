import functions from './functions.js';
import taxCalculatorFunctions from './tax-calculator.js';
import calculatorFunctions from './calculator.js';
import arrayFunctions from './arrays.js';

// ******************************************************************
//
// Add the event listeners
//
// ******************************************************************

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

//-------------------------------------------------------------------
// CALCULATOR
//-------------------------------------------------------------------
let operator = "";
let num1,num2 = 0;

addButton.addEventListener('click', (() => {
    operator = "add";    
    num1 = parseInt(input.value);    
    input.value = ''; 
}));

subtractButton.addEventListener('click', (() => {
    operator = "subtract";
    num1 = parseInt(input.value);
    input.value = ''; 
}));

multiplyButton.addEventListener('click', (() => {
    operator = "multiply";
    num1 = parseInt(input.value);
    input.value = ''; 
}));

divideButton.addEventListener('click', (() => {
    operator = "divide";
    num1 = parseInt(input.value);
    input.value = '';    
}));

idClearButton.addEventListener('click', (() => {
    operator = "";
    num1,num2 = 0;
    input.value = '';
}));

equalsButton.addEventListener('click', (() => {
    num2 = parseInt(input.value);;
    console.log(num1,num2,operator);

    switch (operator) {
        case "add":            
            input.value = calculatorFunctions.addNumbers(num1,num2); 
            console.log(num1, num2, operator, input.value, input.textContent);           
        case "subtract":            
            input.value = calculatorFunctions.subtractNumbers(num1,num2);
        case "multiply":            
            input.value = calculatorFunctions.multiplyNumbers(num1,num2);
        case "divide":
            input.value = calculatorFunctions.divideNumbers(num1,num2);        
         
    }    
}));


//---------------------------------------------------------------------
// TAX CALCULATOR
//---------------------------------------------------------------------
// event listener for calculate button in tax calculator
calcButton.addEventListener('click', (() => {
    let income = document.getElementById("income");
    let result = document.getElementById("result");   
    result.textContent = " $ " + taxCalculatorFunctions.calculate(income.value);
}));

//--------------------------------------------------------------------
// ARRAYS
//---------------------------------------------------------------------
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
        message.textContent = arrInput.value + " was successfully added to array";
    }          
}));

// display contents of array in string form
showButton.addEventListener('click', (() => {
    message.textContent = arrayFunctions.show(numberArray);
}));

// add listener for total button. sum up all values of array and display
totalButton.addEventListener('click', (() => {    
    let sum = arrayFunctions.arraySum(numberArray);
    message.textContent = sum;

}));

//clear array. update message div
idClearButton.addEventListener('click', (() => {
    numberArray = arrayFunctions.clear(numberArray);
    message.textContent = numberArray;
}));

//---------------------------------------------------------------------
// DICTIONARIES
//---------------------------------------------------------------------
// define province dictionary
let provinces = {
    ab: "Alberta",
    bc: "British Columbia",
    mb: "Manitoba",
    nb: "New Brunswick",
    ns: "Nova Scotia",
    nwt: "Northwest Territories",
    nfl: "Newfoundland",
    nv: "Nunavut",
    ont: "Ontario",
    pei: "Prince Edward Island",
    qb: "Quebec",
    sk: "Saskatchewan",
    yk: "Yukon"
};

// set variables for input field and button
let provinceInput = document.getElementById("dictInput");
let messageArea = document.getElementById("province"); 

// add listener for lookup button
lookup.addEventListener('click', (() => {  
    if (provinces.hasOwnProperty(provinceInput.value))  
        messageArea.textContent = provinces[provinceInput.value];
    else
        messageArea.textContent = "Error. This is not a province";
}));