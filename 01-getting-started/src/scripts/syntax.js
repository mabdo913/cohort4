const functions = {
/* 
* * define attributes / variables **
------------------------------------
- number
- string
- boolean
- array
- dictionary / objects
- undefined
*/

// returns true if num is odd
    isOdd: (num) => {
        return num%2!=0;
    },

// returns true if num is 'Hello World'
    isHelloWorld: (str) => {
        return str == 'Hello World';
    },

// returns true if bool is true
    isTrue: (bool) => {
        return bool==1;
    },

// returns array length as number
    arrLength: (arr) => {
        return arr.length;
    },

// returns true if object has property prop    
    hasProperty: (obj,prop) => {
        return obj.hasOwnProperty(prop);
    },

// returns string based on whether passed value is undefined
    isUndefined: (val) => {
        let str = '';
        val===undefined ? str = "Value is undefined" : str = "Value is not undefined"
        return str;
    },
/*
** sample if / else **
------------------------------------
*/
// returns string based on password length
    checkPassLength: (password,length) => {
        if (password.length<length)
            return "Password must be ${length} characters or more";
        else
            return "Your password has met the condition";    
    },
/*
** functions **
------------------------------------
* parameters *
*/
// returns true if parameter is zero
    isZero: (num) => {
        return num==0;
    },
    /*
* returns *
*/
// returns the number squared
    powerOfTwo: (num) => {
        return num*num;
    },

/*
arrays
add to the front
add to the end
update values
*/
// adds value to the front of array
    addToFront: (array,val) => {
        array.unshift(val);
        return array; 
    },

// adds value to end of array
    addToBack: (array,val) => {
        array.push(val);
        return array; 
        },

// update values of array
    updateArray: (arr,index,val) => {
        arr[index] = val;
        return arr;
    }
};
// loops


export default functions;
/*

loops 
for
for/in
while
do while
forEach (with array and function)
Objects / Dictionaries
declare object
lookup key to retrieve value */
 