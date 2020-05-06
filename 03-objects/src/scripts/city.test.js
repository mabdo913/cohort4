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
    cities.push(new cityStuff.City('New York', 40.71, -74.00, 8.41));
    cities.push(new cityStuff.City('Los Angeles', 34.05, -118.24, 3.88));

    cities[0].show();
    expect(cities[0].name).toBe('Dallas');
});