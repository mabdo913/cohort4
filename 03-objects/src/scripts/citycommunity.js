const cityCommunityDOMFunctions = {};

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