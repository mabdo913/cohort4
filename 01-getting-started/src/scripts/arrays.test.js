import functions from './arrays.js'

test('Testing addNumToArray() function', () => {
    expect(functions.addNumToArray([23,4,90],67)).toStrictEqual([23,4,90,67]); 
    //expect(functions.calculate(48535)).toBe("7280.25"); // edge case    
});

test('Testing show() function', () => {
    expect(functions.show([23,4,90,67])).toBe("23,4,90,67,"); 
    expect(functions.show([43,298,32,6])).toBe("43,298,32,6,");
}); 

test('Testing arraySum() function', () => {
    expect(functions.arraySum([54,5,6,15])).toBe(80); 
    expect(functions.arraySum([9,4,3,6,8])).toBe(30);
    expect(functions.arraySum(['9','4','3','6','8'])).toBe(30);
    expect(functions.arraySum([])).toBe(0);
});

test('Testing clear() function', () => {
    expect(functions.clear([9,4,3,6,8])).toStrictEqual([]); 
    expect(functions.clear([43,298,32,6])).toStrictEqual([]);
    
}); 