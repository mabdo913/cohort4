const oopCity = {};

class City {
    constructor(name, lat, lon, pop) {
        this.name = name,
        this.lat = parseFloat(parseFloat(lat).toFixed(2)),
        this.lon = parseFloat(parseFloat(lon).toFixed(2)),
        this.pop = pop;
    }

    show() {
        return `Name: ${this.name}, Latitude: ${this.lat}, Longitude: ${this.lon}, Population: ${this.pop}`;
    }

    movedIn(num) {
        this.pop = this.pop + num;
    }

    movedOut(num) {
        this.pop = this.pop - num;
    }

    howBig() {   
        const population = this.pop;
        let str = '';

        if (population > 100000) {
            str = 'City';
        } else if (population > 20000 && population < 100000) {
            str = 'Large Town';
        } else if (population > 1000 && population < 20000) {
            str = 'Town';
        } else if (population > 100 && population < 1000) {
            str = 'Village';
        } else if (population < 100) {
            str = 'Hamlet';
        }
        return str;       
    }

    whichSphere() {
        
    }


}

    

class Community {
    
}

export default { oopCity, City, Community};