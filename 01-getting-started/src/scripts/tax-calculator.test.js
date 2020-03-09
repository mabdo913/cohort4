import functions from './tax-calculator'

test('Testing calculate() function', () => {
    expect(functions.calculate(35000)).toBe("5250.00"); 
    expect(functions.calculate(48535)).toBe("7280.25"); // edge case
    expect(functions.calculate(79456.75)).toBe("13619.21");
    expect(functions.calculate(214368)).toBe("49644.31"); // edge case
});