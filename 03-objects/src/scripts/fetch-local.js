const fetchFunctions = {

    getFirstName : (data) => {        
        return data[0].name;
    },

    getAllFirstNames : (data) => {        
        return data.map(data => data.name);        
    }

} 



export default fetchFunctions;