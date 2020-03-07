import functions from './functions.js';
//import functions from './calculator.js';
import calculatorFunctions from './tax-calculator.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

calcButton.addEventListener('click', (() => {
    let income = document.getElementById("income");
    let result = document.getElementById("result");   
    result.textContent = " $ " + calculatorFunctions.calculate(income.value);
}));