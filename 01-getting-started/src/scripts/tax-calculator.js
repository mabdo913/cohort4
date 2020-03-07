// Constants
// tax rates for each bracket
const firstTierBase = 0.00;
const secondTierBase = 48535.00;
const thirdTierBase = 97069.00;
const fourthTierBase = 150473.00;
const fifthTierBase= 214368.00;

// tax rates for each bracket
const firstTierRate = 0.15;
const secondTierRate = 0.20;
const thirdTierRate = 0.26;
const fourthTierRate = 0.29;
const fifthTierRate = 0.33;

const firstTierTaxes= 0.0000;
const secondTierTaxes = 7280.00;
const thirdTierTaxes = 17230.00;
const fourthTierTaxes = 31115.00;
const fifthTierTaxes = 49645.00;


const calculatorFunctions = {

    calculate: income => {
      
      let taxesOwed = 0.0000;          
      if (income < secondTierBase && income > 0) {        
          taxesOwed = ((income - firstTierBase) * firstTierRate) + firstTierBase;
        }          
      if (income > secondTierBase && income <= thirdTierBase) {        
          taxesOwed = ((income - firstTierBase) * firstTierRate) + firstTierBase;
          }          
      if (income > thirdTierBase && income <= fourthTierBase) {          
          taxesOwed = ((income - secondTierBase) * secondTierRate) + secondTierTaxes;
          }          
      if (income > fourthTierBase && income <= fifthTierBase) {    
          taxesOwed = ((income - thirdTierBase) * thirdTierRate) + thirdTierTaxes;
          }          
      if (income > fifthTierBase) {
        taxesOwed = ((income - fourthTierBase) * fourthTierRate) + fourthTierTaxes;
         } 
          
      return taxesOwed.toFixed(2);

      }
    
}

export default calculatorFunctions;