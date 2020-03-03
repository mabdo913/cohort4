import functions from './daily'

test('Check if convertToF works', () => {
    expect(functions.convertToF(0)).toBe(32); 
    expect(functions.convertToF(200)).toBe(392);
});