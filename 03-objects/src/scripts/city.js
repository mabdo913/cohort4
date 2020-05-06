const oopCity = {};

class City {
    constructor(name, lat, lon, pop) {
        this.name = name,
        this.lat = parseFloat(lat.toFixed(2)),
        this.lon = parseFloat(lon.toFixed(2)),
        this.pop = pop;
    }

    show() {
        return `Name: ${this.name}, Latitude: ${this.lat}, Longitude: ${this.lon}, Population: ${this.pop} million`;
    }
}

class Community {
    
}

export default { oopCity, City, Community};