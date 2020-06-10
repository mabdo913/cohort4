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

export default {City};