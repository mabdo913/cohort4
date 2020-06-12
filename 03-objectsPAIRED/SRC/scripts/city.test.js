import functions from './citycommunity.js';

global.fetch = require('node-fetch');
const url = 'http://localhost:5000/';

test('Test our City class', () => {
    const firstCity = new functions.City('Calgary', 51.049999, -114.066666, 1547484, 1);
    //test the constructor in our city class
    expect(firstCity.name).toBe('Calgary');
    expect(firstCity.lat).toBe(51.05);
    expect(firstCity.long).toBe(-114.0667);
    expect(firstCity.population).toBe(1547484);
    //test our methods in the city class
    expect(firstCity.show()).toBe("City: Calgary, Latitude: 51.05, Longitude: -114.0667, Population: 1547484" );
    expect(firstCity.movedIn(1)).toBe(1547485);
    expect(firstCity.movedOut(2)).toBe(1547483);
    expect(firstCity.howBig()).toBe("City");
    expect(firstCity.whichSphere()).toBe("Northern Hemisphere");
});

test('Test our Community class', () => {
    const community = new functions.Community();
    community.createCity('New York', 40.71, -74.01, 8419600);
    expect(community.cities[0].name).toBe('New York');

    community.createCity('Los Angeles', 34.05, -118.24, 3881450);
    community.createCity('Johannesburg', -26.20, 28.03, 4434800);
    
    expect(community.delete(2)).toBe(2);
    expect(community.getPopulation()).toBe(12854400);
    console.log (community.cities);
    expect(community.getMostNorthern()).toBe('New York');
    expect(community.getMostSouthern()).toBe('Johannesburg');

});

// test our API/Fetch functions

test('test API', async () => {

    const community = new functions.Community();
    
    community.createCity('Sao Paulo', -23.53, -46.62, 12176866);
    let data = await community.postData(url + 'clear');
    // data = await community.postData(url + 'add', community.cities[0]);
    // expect(data.status).toEqual(200);

    // data = await community.postData(url + 'all');
    // expect(data.status).toEqual(200);
    // expect(data.length).toBe(1);
    // expect(data[0].name).toBe("Sao Paulo");
   
    // community.createCity('London', 51.51, -0.12, 8987400);
   
    // console.log (community.cities);

   
    


    

});