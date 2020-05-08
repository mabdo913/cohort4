import cityStuff from './city.js';

test('Test OOP for City class', ()=>{
    const london = new cityStuff.City('London', 51.51, -0.12, 8987400);

    expect(london.name).toBe('London');
    expect(london.lat).toBe(51.51);
    expect(london.lon).toBe(-0.12);
    expect(london.pop).toBe(8987400);
});

test('Test OOP show method in City class', () => {    
    const cities = [];
    cities.push(new cityStuff.City('New York', 40.71, -74.01, 8419600));
    cities.push(new cityStuff.City('Los Angeles', 34.05, -118.24, 3881450));

    expect(cities[0].show()).toBe(
            "Name: New York, Latitude: 40.71, Longitude: -74.01, Population: 8419600"
        );

    expect(cities[1].show()).toBe(
            "Name: Los Angeles, Latitude: 34.05, Longitude: -118.24, Population: 3881450"
        );
});

test('Test OOP movedIn method in City class', () => {    
    const cities = [];
    cities.push(new cityStuff.City('New York', 40.71, -74.00, 8419600));
    cities.push(new cityStuff.City('Los Angeles', 34.05, -118.24, 3881450));

    cities[0].movedIn(65000);
    expect(cities[0].pop).toBe(8484600);

    cities[1].movedIn(120000);
    expect(cities[1].pop).toBe(4001450);
});

test('Test OOP movedOut method in City class', () => {    
    const cities = [];
    cities.push(new cityStuff.City('New York', 40.71, -74.01, 8419600));
    cities.push(new cityStuff.City('Los Angeles', 34.05, -118.24, 3881450));

    cities[0].movedOut(65000);
    expect(cities[0].pop).toBe(8354600);

    cities[1].movedOut(120000);
    expect(cities[1].pop).toBe(3761450);
});

test('Test OOP howBig method in City class', () => {    
    const cities = [];
    cities.push(new cityStuff.City('Sylvan Lake', 52.31, -114.10, 14816));
    cities.push(new cityStuff.City('Cochrane', 51.19, -114.47, 25853));
    cities.push(new cityStuff.City('London', 51.51, -0.12, 8987400));
    cities.push(new cityStuff.City('Churchill', 58.77, -94.16, 899));
    cities.push(new cityStuff.City('Tilt Cove', 49.88, -55.62, 5));

    expect(cities[0].howBig()).toBe("Town");
    expect(cities[1].howBig()).toBe("Large Town");
    expect(cities[2].howBig()).toBe("City");
    expect(cities[3].howBig()).toBe("Village");
    expect(cities[4].howBig()).toBe("Hamlet");
});

test('Test OOP whichSphere method in City class', () => {    
    const cities = [];
    cities.push(new cityStuff.City('Sao Paulo', -23.53, -46.62, 12176866));
    cities.push(new cityStuff.City('New York', 40.71, -74.01, 8419600));    
    cities.push(new cityStuff.City('Jakarta', -6.20, 106.02, 10770487));
    cities.push(new cityStuff.City('Los Angeles', 34.05, -118.24, 3881450));
    cities.push(new cityStuff.City('Johannesburg', -26.20, 28.03, 4434800));
    cities.push(new cityStuff.City('London', 51.51, -0.12, 8987400));

    expect(cities[0].whichSphere()).toBe("Southern Hemisphere");
    expect(cities[1].whichSphere()).toBe("Northern Hemisphere");
    expect(cities[2].whichSphere()).toBe("Southern Hemisphere");
    expect(cities[3].whichSphere()).toBe("Northern Hemisphere");
    expect(cities[4].whichSphere()).toBe("Southern Hemisphere");
    expect(cities[5].whichSphere()).toBe("Northern Hemisphere");    
});