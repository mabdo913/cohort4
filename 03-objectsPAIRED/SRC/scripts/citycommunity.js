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
 createCard (city) {
     // create elements
    console.log ("you are in create card")
    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('class', 'card w-100');
    const bodyDiv = document.createElement('div');
    bodyDiv.setAttribute('class', 'card-body');
    const cityName = document.createElement('h5');
    cityName.textContent =  city.name;
    const latitude = document.createElement('p');
    latitude.textContent = "Latitude: " + city.lat;
    const long = document.createElement('p');
    long.textContent = "Longitude: " + city.long;
    const population = document.createElement('p');
    population.textContent = "Population: " + city.population;
    const hemi = document.createElement('p');
    hemi.textContent = city.whichSphere();
    const identity= document.createElement('p');
    identity.textContent = city.howBig();
    const label = document.createElement('label');
    label.setAttribute('for','popchange');
    const input = document.createElement('input');
    input.setAttribute('type','number');
    input.setAttribute('id','popchange');
    input.setAttribute('name','quantity');

   

    const moveInButton = document.createElement('button');
    moveInButton.textContent = "Moved In"
    moveInButton.setAttribute('type', 'button');
    moveInButton.setAttribute('class', 'btn btn-primary');
    moveInButton.setAttribute('id', 'movedIn');
    const moveOutButton = document.createElement('button');
    moveOutButton.textContent = "Moved Out"
    moveOutButton.setAttribute('type', 'button');
    moveOutButton.setAttribute('class', 'btn btn-primary');
    moveOutButton.setAttribute('id', 'movedOut');

    const trash = document.createElement('i');
    trash.setAttribute('class', 'fa fa-trash-o trash');



    



    // append elements to div(s)
    bodyDiv.appendChild(cityName);
    bodyDiv.appendChild(latitude);
    bodyDiv.appendChild(long);
    bodyDiv.appendChild(population);
    bodyDiv.appendChild(hemi);
    bodyDiv.appendChild(identity);

    bodyDiv.appendChild(label);
    bodyDiv.appendChild(input);
    bodyDiv.appendChild(moveInButton);
    bodyDiv.appendChild(moveOutButton);
    bodyDiv.appendChild(trash);

    cardDiv.appendChild(bodyDiv);

  

    return cardDiv;    
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
