import functions from './tax-calculator'

test('Check calculator', () => {
    expect(functions.calculate(35000)).toBe(5250.00); // Consider the edge cases
    
});