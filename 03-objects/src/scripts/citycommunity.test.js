import cityStuff from './citycommunity.js';

test('Test OOP for City class', ()=>{
    const newyork = new cityStuff.City('New York', 40.71, -74.01, 8419600, 1);

    expect(newyork instanceof cityStuff.City).toBe(true);
    expect(newyork.city).toBe('New York');
    expect(newyork.lat).toBe(40.71);
    expect(newyork.long).toBe(-74.01);
    expect(newyork.population).toBe(8419600);
});

test('Test show() from City class', () => {    
    const cities = [];
    cities.push(new cityStuff.City('New York', 40.71, -74.01, 8419600, 1));
    cities.push(new cityStuff.City('Los Angeles', 34.05, -118.24, 3881450, 2));

    expect(cities[0].show()).toBe(
            "City: New York, Latitude: 40.71, Longitude: -74.01, Population: 8419600"
        );

    expect(cities[1].show()).toBe(
            "City: Los Angeles, Latitude: 34.05, Longitude: -118.24, Population: 3881450"
        );
});


test('Test movedIn() from City class', () => {    
    const cities = [];
    cities.push(new cityStuff.City('New York', 40.71, -74.00, 8419600, 1));
    cities.push(new cityStuff.City('Los Angeles', 34.05, -118.24, 3881450, 2));

    cities[0].movedIn(65000);
    expect(cities[0].population).toBe(8484600);

    cities[1].movedIn(120000);
    expect(cities[1].population).toBe(4001450);
});

test('Test movedOut() from City class', () => {    
    const cities = [];
    cities.push(new cityStuff.City('New York', 40.71, -74.01, 8419600, 1));
    cities.push(new cityStuff.City('Los Angeles', 34.05, -118.24, 3881450, 2));

    cities[0].movedOut(65000);
    expect(cities[0].population).toBe(8354600);

    cities[1].movedOut(120000);
    expect(cities[1].population).toBe(3761450);
});

test('Test howBig() from City class', () => {    
    const cities = [];
    cities.push(new cityStuff.City('Sylvan Lake', 52.31, -114.10, 14816, 1));
    cities.push(new cityStuff.City('Cochrane', 51.19, -114.47, 25853, 2));
    cities.push(new cityStuff.City('London', 51.51, -0.12, 8987400, 3));
    cities.push(new cityStuff.City('Churchill', 58.77, -94.16, 899, 4));
    cities.push(new cityStuff.City('Tilt Cove', 49.88, -55.62, 5));

    expect(cities[0].howBig()).toBe("Town");
    expect(cities[1].howBig()).toBe("Large Town");
    expect(cities[2].howBig()).toBe("City");
    expect(cities[3].howBig()).toBe("Village");
    expect(cities[4].howBig()).toBe("Hamlet");
});

test('Test whichSphere() from City class', () => {    
    const cities = [];
    cities.push(new cityStuff.City('Sao Paulo', -23.53, -46.62, 12176866, 1));
    cities.push(new cityStuff.City('New York', 40.71, -74.01, 8419600, 2));    
    cities.push(new cityStuff.City('Jakarta', -6.20, 106.02, 10770487, 3));
    cities.push(new cityStuff.City('Los Angeles', 34.05, -118.24, 3881450, 3));
    cities.push(new cityStuff.City('Johannesburg', -26.20, 28.03, 4434800, 4));
    cities.push(new cityStuff.City('London', 51.51, -0.12, 8987400, 5));

    expect(cities[0].whichSphere()).toBe("Southern Hemisphere");
    expect(cities[1].whichSphere()).toBe("Northern Hemisphere");
    expect(cities[2].whichSphere()).toBe("Southern Hemisphere");
    expect(cities[3].whichSphere()).toBe("Northern Hemisphere");
    expect(cities[4].whichSphere()).toBe("Southern Hemisphere");
    expect(cities[5].whichSphere()).toBe("Northern Hemisphere");    
});

test('Test OOP for Community class', ()=>{
    const northernQuebec = new cityStuff.Community();
    
    expect(northernQuebec instanceof cityStuff.Community).toBe(true);    
    expect(northernQuebec.cities.length).toBe(0);    
});

test('Test OOP createCity() from Community class', () => {    
    const southAfrica = new cityStuff.Community();    
    
    southAfrica.createCity('Johannesburg', -26.20, 28.03, 4434800);
    
    expect(southAfrica.cities[0].city).toBe('Johannesburg');
    expect(southAfrica.cities[0].lat).toBe(-26.20);
    expect(southAfrica.cities[0].long).toBe(28.03);
    expect(southAfrica.cities[0].population).toBe(4434800);
});


test('Test getPopulation() from Community class', () => {    
    const prairies = new cityStuff.Community();
    
    prairies.createCity('Sylvan Lake', 52.31, -114.10, 1);
    prairies.createCity('Cochrane', 51.19, -114.47, 1);
    prairies.createCity('Churchill', 58.77, -94.16, 1);
    prairies.createCity('Tilt Cove', 49.88, -55.62, 1);
    
    expect(prairies.getPopulation()).toBe(4);        
});

test('Test delete() from Community class', () => {    
    const prairies = new cityStuff.Community();
    
    prairies.createCity('Sylvan Lake', 52.31, -114.10, 14816);
    prairies.createCity('Cochrane', 51.19, -114.47, 25853);
    prairies.createCity('Churchill', 58.77, -94.16, 899);
    prairies.createCity('Tilt Cove', 49.88, -55.62, 5);

    prairies.delete(1);    
    
    expect(prairies.cities.length).toBe(3);        
});

test('Test getMostNorthern() from Community class', () => {    
    const worldCities = new cityStuff.Community();    

    worldCities.createCity('Sao Paulo', -23.53, -46.62, 12176866, 1);
    worldCities.createCity('New York', 40.71, -74.01, 8419600, 2);
    worldCities.createCity('Jakarta', -6.20, 106.02, 10770487, 3);
    worldCities.createCity('Los Angeles', 34.05, -118.24, 3881450, 3);
    worldCities.createCity('Johannesburg', -26.20, 28.03, 4434800, 4);
    worldCities.createCity('London', 51.51, -0.12, 8987400, 5);
    
    expect(worldCities.getMostNorthern()).toBe('London');             
});

test('Test getMostSouthern() from Community class', () => {    
    const worldCities = new cityStuff.Community();    

    worldCities.createCity('Sao Paulo', -23.53, -46.62, 12176866, 1);
    worldCities.createCity('New York', 40.71, -74.01, 8419600, 2);
    worldCities.createCity('Jakarta', -6.20, 106.02, 10770487, 3);
    worldCities.createCity('Los Angeles', 34.05, -118.24, 3881450, 3);
    worldCities.createCity('Johannesburg', -26.20, 28.03, 4434800, 4);
    worldCities.createCity('London', 51.51, -0.12, 8987400, 5);
    
    expect(worldCities.getMostSouthern()).toBe('Johannesburg');            
});