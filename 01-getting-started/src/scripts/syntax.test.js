import functions from './syntax' 

test('Check if number is odd', () => {
    expect(functions.isOdd(1)).toBe(true); 
    expect(functions.isOdd(0)).toBe(false);
    expect(functions.isOdd(10)).toBe(false);
});

test('Does that isHelloWorld function work?', () => {
    expect(functions.isHelloWorld('Hello World')).toBe(true);
    expect(functions.isHelloWorld('Test')).toBe(false);
});