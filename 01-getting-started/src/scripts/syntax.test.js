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

 test('Does that isTrue function work?', () => {
    expect(functions.isTrue(true)).toBe(true);
    expect(functions.isTrue(false)).toBe(false);
}); 

test('Does that arrLength function work?', () => {
    expect(functions.arrLength(['Hello World','Hello','World'])).toBe(3);
    expect(functions.arrLength([34,5,790,500])).toBe(4);
});