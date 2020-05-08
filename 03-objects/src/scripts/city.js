const cityFunctions = {};

class City {
    constructor(name, lat, long, population) {
        this.name = name,
        this.lat = parseFloat(parseFloat(lat).toFixed(2)),
        this.long = parseFloat(parseFloat(long).toFixed(2)),
        this.population = population;
    }

    show() {
        return `Name: ${this.name}, Latitude: ${this.lat}, Longitude: ${this.long}, Population: ${this.population}`;
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
        } else if (this.population < 100) {
            str = 'Hamlet';
        }
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

    createCity(name, lat, long, population) {        
        const city = new City(name, lat, long, population);
        this.cities.push(city);        
    }
}

export default { cityFunctions, City, Community};