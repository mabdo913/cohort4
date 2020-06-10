import functions from './citycommunity.js';

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