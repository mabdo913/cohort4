let numArray = [];

const arrayFunctions = {
    //adds number to end of array
    addNumToArray: (numArray,num) => {      
        numArray.push(num);
        return numArray;
    },
    //converts array to string
    show: numArray => {    
        let arrString = "";                 
        numArray.forEach(element => {
            arrString+=element+",";
        });
        return arrString;
    },

    //adds and returns sum of all array elements
    arraySum:  numArray => {
        let sum = 0;  
        numArray.forEach(element => {
            sum+=parseInt(element);
        });
        return sum;
    },

    //removes all values from array
    clear: numArray => {
        numArray =[];
        return numArray;
    },
    
}

export default arrayFunctions;