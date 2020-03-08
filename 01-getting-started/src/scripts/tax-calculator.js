/* TAX CALCULATOR
All number based on Canada Revenue website
Link : https://tinyurl.com/y9qwu69v 

Constants
Gross income base amounts. Used to determine tax brackets, tax rates, and taxes owed for each bracket */
const firstIncomeBase = 0.00, secondIncomeBase = 48535.00, thirdIncomeBase = 97069.00, fourthIncomeBase = 150473.00, fifthIncomeBase= 214368.00;

// tax rates for each bracket
const firstRate = 0.15, secondRate = 0.205, thirdRate = 0.26, fourthRate = 0.29, fifthRate = 0.33;

// calculate tax amount for each bracket
const secondBracketTaxes = secondIncomeBase * firstRate, thirdBracketTaxes = (thirdIncomeBase - secondIncomeBase) * secondRate + secondBracketTaxes,
	fourthBracketTaxes = (fourthIncomeBase - thirdIncomeBase) * thirdRate + thirdBracketTaxes,
	fifthTaxBracket = (fifthIncomeBase - fourthIncomeBase) * fourthRate + fourthBracketTaxes;

const calculatorFunctions = {

// calculate() function. accepts user income as parameter. calculates income tax based on income, tax rate, and taxes calculated on each tax bracket
    calculate: income => {
      
      let taxesOwed = 0.0000;          
      if (income <= secondIncomeBase) {        
          	taxesOwed = ((income - firstIncomeBase) * firstRate);
        }          
      if (income > secondIncomeBase && income <= thirdIncomeBase) {        
          	taxesOwed = ((income - secondIncomeBase) * secondRate) + secondBracketTaxes;
          }          
      if (income > thirdIncomeBase && income <= fourthIncomeBase) {          
          	taxesOwed = (income - thirdIncomeBase) * thirdRate + thirdBracketTaxes;
          }          
      if (income > fourthIncomeBase && income <= fifthIncomeBase) {    
          	taxesOwed = ((income - fourthIncomeBase) * fourthRate) + fourthBracketTaxes;
          }          
      if (income > fifthIncomeBase) {
        	taxesOwed = ((income - fifthIncomeBase) * fifthRate) + fifthTaxBracket;
         } 
          
      return taxesOwed.toFixed(2);

      }
    
}

export default calculatorFunctions;