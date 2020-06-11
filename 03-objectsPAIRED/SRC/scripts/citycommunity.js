// global.fetch = require('node-fetch');
// const url = 'http://localhost:5000/';

class City {

    constructor(name, lat, long, population, key) {
        
        this.name = name,
        this.lat = parseFloat(parseFloat(lat).toFixed(4)),
        this.long = parseFloat(parseFloat(long).toFixed(4)),
        this.population = population;
        this.key = key;
    }

    show() {
        return `City: ${this.name}, Latitude: ${this.lat}, Longitude: ${this.long}, Population: ${this.population}`;
    }

    movedIn(num) {
        this.population = this.population + num;
        return this.population;
    }

    movedOut(num) {
        this.population = this.population - num;
        return this.population;
    }

    howBig() {
        let str = '';

        if (this.population > 100000) {
            str = 'City';
        } else if (this.population > 20000 && this.population < 100000) {
            str = 'Large Town';
        } else if (this.population > 1000 && this.population < 20000) {
            str = 'Town';
        } else if (this.population > 100 && this.population < 1000) {
            str = 'Village';
        } else
            str = 'Hamlet';

        return str;
    }

    whichSphere() {
        if (this.lat > 0)
            return "Northern Hemisphere";
        else
            return "Southern Hemisphere";
    }

}
class Community {
    constructor() {
        this.cities = [];
    }

    createCity(city, lat, long, population, key = null) {

        if (key === null) {

            if (this.cities.length >= 1) {
                let maxKey = this.cities.reduce((a, b) =>
                    a.key > b.key ? a : b).key;
                key = maxKey + 1;

            }
            else {
                key = 1;
            }
        }
        const newCity = new City(city, lat, long, population, key);
        this.cities.push(newCity);
    }

    delete(key) {
        let index = this.cities.findIndex(x => x.key === key);
        this.cities.splice(index, 1); 
        return key      
    }

    getPopulation() {
        return this.cities.reduce((accum, cities) => accum + cities.population, 0);
    }

    getMostNorthern() {
        return (this.cities.reduce((prev, current) => (prev.lat > current.lat) ? prev : current)).name;
    }

    getMostSouthern() {
        return (this.cities.reduce((prev, current) => (prev.lat < current.lat) ? prev : current)).name;
    }


// API Fetch
async createCard () {
    console.log ("you are in create card")
}

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

    const json = await response.json();    // parses JSON response into native JavaScript objects
    json.status = response.status;
    json.statusText = response.statusText;

    return json;
}

}




export default {City, Community};
