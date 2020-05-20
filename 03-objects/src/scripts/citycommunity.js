global.fetch = require('node-fetch');

const url = 'http://localhost:5000/';

const cityCommunityDOMFunctions = {

    createCityCard: cityObj => {
        /* //create elements we need 
        const div = document.createElement("div");
        const h4 = document.createElement("h4");
        const beforeButton = document.createElement("button");
        const afterButton = document.createElement("button");
        const deleteButton = document.createElement("button");
        const beforeText = document.createTextNode("Add Before");
        const afterText = document.createTextNode("Add After");
        const delText = document.createTextNode("Delete");
        const cardText = document.createTextNode("Card " + cardNum);

        //attach buttons and h4 to div
        div.appendChild(h4); div.appendChild(beforeButton); div.appendChild(afterButton); div.appendChild(deleteButton);

        //attach text to elements
        div.append(cardText); h4.append(cardText); beforeButton.append(beforeText); afterButton.append(afterText); deleteButton.append(delText);

        //add style to card
        div.className = 'card'; div.style.border = "2px solid black";
 */
        return div;
    },

    //addCity: (city,lat,long,pop)

    postData: async (url = '', data = {}) => {
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

class City {
    constructor(city, lat, long, population, key) {
        
        this.city = city,
        this.lat = parseFloat(parseFloat(lat).toFixed(2)),
        this.long = parseFloat(parseFloat(long).toFixed(2)),
        this.population = population;
        this.key = key;
    }

    show() {
        return `City: ${this.city}, Latitude: ${this.lat}, Longitude: ${this.long}, Population: ${this.population}`;
    }

    movedIn(num) {
        this.population = this.population + num;
    }

    movedOut(num) {
        this.population = this.population - num;
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
    }

    getPopulation() {
        return this.cities.reduce((accum, cities) => accum + cities.population, 0);
    }

    getMostNorthern() {
        return (this.cities.reduce((prev, current) => (prev.lat > current.lat) ? prev : current)).city;
    }

    getMostSouthern() {
        return (this.cities.reduce((prev, current) => (prev.lat < current.lat) ? prev : current)).city;
    }
}

export default { cityCommunityDOMFunctions, City, Community };