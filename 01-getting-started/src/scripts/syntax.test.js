import functions from './syntax' 

test('Check if number is odd', () => {
    expect(functions.isOdd(1)).toBe(true); 
    expect(functions.isOdd(0)).toBe(false);
    expect(functions.isOdd(10)).toBe(false);
});

test('Does the isHelloWorld() function work?', () => {
    expect(functions.isHelloWorld('Hello World')).toBe(true);
    expect(functions.isHelloWorld('Test')).toBe(false);
});

 test('Does the isTrue() function work?', () => {
    expect(functions.isTrue(true)).toBe(true);
    expect(functions.isTrue(false)).toBe(false);
}); 

test('Does the arrLength() function work?', () => {
    expect(functions.arrLength(['Hello World','Hello','World'])).toBe(3);
    expect(functions.arrLength([34,5,790,500])).toBe(4);
});

test('Does the hasProperty() function work?', () => {
    expect(functions.hasProperty({playerName:"LeBron James", position:["guard","forward"], age:35},'position')).toBe(true);
    expect(functions.hasProperty({type:"Fiat", model:"500", color:"white"},'weight')).toBe(false);
});

test('Does the isUndefined() function work?', () => {
    expect(functions.isUndefined(undefined)).toBe("Value is undefined");
    expect(functions.isUndefined(true)).toBe("Value is not undefined");
});

test('Does the checkPassLength() function work?', () => {
    expect(functions.checkPassLength('123',3)).toBe("Your password has met the condition");
    expect(functions.checkPassLength('password',10)).toBe("Password must be ${length} characters or more");
});

test('Does the isZero() function work?', () => {
    expect(functions.isZero(1)).toBe(false);
    expect(functions.isZero(0)).toBe(true);
});

test('Does the powerOfTwo() function work?', () => {
    expect(functions.powerOfTwo(1)).toBe(1);
    expect(functions.powerOfTwo(2)).toBe(4);
});

test('Does the addToFront() function work?', () => {
    expect(functions.addToFront([32,90,0],90)).toStrictEqual([90,32,90,0]);
    expect(functions.addToFront([32,90,0],90)).toStrictEqual([90,32,90,0]);
    expect(functions.addToFront([23,'foo',0],false)).toStrictEqual([false,23,'foo',0]);
});

test('Does the addToBack() function work?', () => {
    expect(functions.addToBack([32,90,0],'foo')).toStrictEqual([32,90,0,'foo']);
    //expect(functions.addToBack([32,90,0],90)).toStrictEqual([90,32,90,0]);
});
