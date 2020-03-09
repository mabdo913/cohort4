let numArray = [];

const arrayFunctions = {

    addNumToArray: (numArray,num) => {      
        numArray.push(num);
        return numArray;
    },

    show: numArray => {    
        let arrString = "";  
        numArray.forEach(element => {
            arrString+=element+",";
        });
        return arrString;
    },

    arraySum:  numArray => {
        let sum = 0;  
        numArray.forEach(element => {
            sum+=element;
        });
        return sum;
    },

    clear: numArray => {
        numArray =[];
        return numArray;
    },
    
}

export default arrayFunctions;