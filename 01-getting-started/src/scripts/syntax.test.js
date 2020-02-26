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

test('Does the hasProperty function work?', () => {
    expect(functions.hasProperty({playerName:"LeBron James", position:["guard","forward"], age:35},'position')).toBe(true);
    expect(functions.hasProperty({type:"Fiat", model:"500", color:"white"},'weight')).toBe(false);
});

test('Does the checkPassLength function work?', () => {
    expect(functions.checkPassLength('123',3)).toBe("Your password has met the condition");
    expect(functions.checkPassLength('password',10)).toBe("Password must be ${length} characters or more");
});