/* TAX CALCULATOR
All number based on Canada Revenue website
Link : https://tinyurl.com/y9qwu69v 

Constants
Tax brackets. Used to determine tax rate and taxable income 
i.e if your income is above $48535, then you are in the second tier */
const firstTierBase = 0.00;
const secondTierBase = 48535.00;
const thirdTierBase = 97069.00;
const fourthTierBase = 150473.00;
const fifthTierBase= 214368.00;

// tax rates for each bracket
const firstTierRate = 0.15;
const secondTierRate = 0.205;
const thirdTierRate = 0.26;
const fourthTierRate = 0.29;
const fifthTierRate = 0.33;

const calculatorFunctions = {

    /* calculate() function. accepts and evaluates user income. calculates income tax
    // deduct base amount from income and multiply by appropriate tax, then add tax amounts from
    // lower teirs */
    calculate: income => {
      
      let taxesOwed = 0.0000;          
      if (income <= secondTierBase) {        
          taxesOwed = ((income - firstTierBase) * firstTierRate) + (firstTierBase * firstTierRate);
        }          
      if (income > secondTierBase && income <= thirdTierBase) {        
          taxesOwed = ((income - secondTierBase) * secondTierRate) + (secondTierBase * firstTierRate);
          }          
      if (income > thirdTierBase && income <= fourthTierBase) {          
          taxesOwed = (income - thirdTierBase) * thirdTierRate + secondTierBase * firstTierRate + (thirdTierBase - secondTierBase) * secondTierRate;
          }          
      if (income > fourthTierBase && income <= fifthTierBase) {    
          taxesOwed = ((income - fourthTierBase) * fourthTierRate) + (secondTierBase * firstTierRate) + (thirdTierBase - secondTierBase) * secondTierRate + (fourthTierBase - thirdTierBase) * thirdTierRate;
          }          
      if (income > fifthTierBase) {
        taxesOwed = ((income - fifthTierBase) * fifthTierRate) + (secondTierBase * firstTierRate) + (thirdTierBase - secondTierBase) * secondTierRate + (fourthTierBase - thirdTierBase) * thirdTierRate + (fifthTierBase - fourthTierBase) * fourthTierRate;
         } 
          
      return taxesOwed.toFixed(2);

      }
    
}

export default calculatorFunctions;