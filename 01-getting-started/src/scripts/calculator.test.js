import functions from './calculator.js';

test('Testing addNumbers() function', () => {
    expect(functions.addNumbers(2,4)).toBe(6); 
    expect(functions.addNumbers(349,10)).toBe(359); 
    
});

test('Testing subtractNumbers() function', () => {
    expect(functions.subtractNumbers(12,29)).toBe(-17); 
    expect(functions.subtractNumbers(45,8)).toBe(37); 
    
});

test('Testing multiplyNumbers() function', () => {
    expect(functions.multiplyNumbers(12,10)).toBe(120); 
    expect(functions.multiplyNumbers(35,2)).toBe(70);
    
});

test('Testing array() function', () => {
    expect(functions.divideNumbers(10,2)).toBe(5); 
    expect(functions.divideNumbers(200,25)).toBe(8);
    
});