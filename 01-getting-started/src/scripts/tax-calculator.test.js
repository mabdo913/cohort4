import functions from './tax-calculator'

test('Check calculator', () => {
    expect(functions.getTaxRate(120000)).toStrictEqual([97069, 0.26, 17230,120000]); // Consider the edge cases
    expect(functions.calculate([97069, 0.26, 17230,120000])).toStrictEqual(23193.06); // Consider the edge cases
});