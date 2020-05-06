import cityStuff from './city.js';

test('Test OOP for City class', ()=>{
    const london = new cityStuff.City('London', 51.51, -0.12, 8.98);

    expect(london.name).toBe('London');
    expect(london.lat).toBe(51.51);
    expect(london.lon).toBe(-0.12);
    expect(london.pop).toBe(8.98);
});

test('Test OOP show method City class', () => {
    const cities = [];
    cities.push(new cityStuff.City('New York', 40.71, -74.01, 8.41));
    cities.push(new cityStuff.City('Los Angeles', 34.05, -118.24, 3.88));

    expect(cities[0].show()).toBe(
            "Name: New York, Latitude: 40.71, Longitude: -74.01, Population: 8.41 million"
        );

    expect(cities[1].show()).toBe(
            "Name: Los Angeles, Latitude: 34.05, Longitude: -118.24, Population: 3.88 million"
        );
});