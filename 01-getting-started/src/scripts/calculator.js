const calculatorFunctions = {

    // add two given numbers
    addNumbers: (num1,num2) => {      
        return parseInt(num1)+parseInt(num2);
    },
    // subtract two given
    subtractNumbers: (num1,num2) => {
        return parseInt(num1-num2);
    },
    // multiply two given numbers
    multiplyNumbers: (num1,num2) => {
      return parseInt(num1*num2);
    },
    // divide two given numbers
    divideNumbers: (num1,num2) => {
      return parseInt(num1/num2);
    }
}

export default calculatorFunctions;