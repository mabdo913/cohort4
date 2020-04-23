const fetch = require("node-fetch");

const fetchFunctions = {

    url: 'https://jsonplaceholder.typicode.com/users',

    getFirstName(data) {        
        return data[0].name;
    },

    getAllFirstNames(data) {        
        return data.map(data => data.name);        
    },

    async getUsers() {
        try {
            const response = await fetch(fetchFunctions.url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw (error);
        }
    },

    async workWithData() {        
        const data = await fetchFunctions.getUsers();
        console.log(fetchFunctions.getFirstName(data));
        console.log(fetchFunctions.getAllFirstNames(data));
    }


} 

export default fetchFunctions;