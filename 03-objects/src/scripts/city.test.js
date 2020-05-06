import { City, Community } from './city.js';

test('Check if City class with no parameters works properly', ()=>{
    const newCity = new City();
    expect(newCity instanceof City).toBe(true);
    newCity.lat = 39.09;    
    expect(newCity.lat).toBe(39.09);    
});

test('Check if City class with parameters works', ()=>{
    const london = new City('London', 51.51, -0.12, 8.98);    
    expect(london.name).toBe('London');
    expect(london.lat).toBe(51.51);
    expect(london.lon).toBe(-0.12);
    expect(london.pop).toBe(8.98);
});