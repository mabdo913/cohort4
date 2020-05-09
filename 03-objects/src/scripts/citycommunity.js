const cityCommunityDOMFunctions = {};

class City {
    constructor(key, name, lat, long, population) {       
        this.key = key;
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

    createCity(name, lat, long, population, key=null) {       
        
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
        const city = new City(key, name, lat, long, population);        
        this.cities.push(city);               
    }

    delete(key) {
        let index = this.cities.findIndex(x => x.key ===key);
        let x = this.cities.splice(index,1);
        console.log(x);
    }

    getPopulation() {        
        return this.cities.reduce((accum, obj) => accum + obj.population, 0);
    }
}

export default { cityCommunityDOMFunctions, City, Community};