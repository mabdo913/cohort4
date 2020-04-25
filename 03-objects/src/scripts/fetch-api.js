const fetch = require("node-fetch");

const fetchFunctions = {

    me: {
        "id": 1,
        "name": "Mags Abdo",
        "username": "mabdo913",
        "email": "mabdo913@420.biz"        
        },    

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
    },

    async postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST',     // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',       // no-cors, *cors, same-origin
            cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow',         // manual, *follow, error
            referrer: 'no-referrer',    // no-referrer, *client
            body: JSON.stringify(data)  // body data type must match "Content-Type" header
        });

        const json = await response.json();   // parses JSON response into native JavaScript objects
        json.status = response.status;
        json.statusText = response.statusText;
        return json;
}


} 

export default fetchFunctions;