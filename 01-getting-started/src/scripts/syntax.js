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

// return array length
    arrLength: (arr) => {
        return arr.length;
    }
};

export default functions;
/*
** sample if / else **
------------------------------------
** functions **
------------------------------------
parameters
returns
arrays
add to the front
add to the end
update values
loops 
for
for/in
while
do while
forEach (with array and function)
Objects / Dictionaries
declare object
lookup key to retrieve value */
 