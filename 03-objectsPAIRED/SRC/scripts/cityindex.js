import functions from './citycommunity.js'

const url = 'http://localhost:5000/';

const controller = new functions.Community();
const jumbo = document.getElementById("jumbotron");

addCityButton.addEventListener('click', async () => {
    controller.createCity(
        document.getElementById('name').value,
        document.getElementById('latitudeInput').value,
        document.getElementById('long').value,
        parseInt(document.getElementById('pop').value),
        
        );

    jumbo.appendChild(controller.createCard(controller.cities[controller.cities.length - 1]));
    
    let data = await controller.postData(url + 'add', controller.cities[controller.cities.length - 1])
    
    stats();
});


function stats () {

    if (controller.cities.length > 0)
    {
        let northern = document.getElementById("mostNorth");
        northern.textContent = controller.getMostNorthern();

        let southern = document.getElementById("mostSouth");
        southern.textContent = controller.getMostSouthern();

        let total = document.getElementById("totPop");
        total.textContent = parseInt(controller.getPopulation());       

    }


}

 document.addEventListener('DOMContentLoaded', async (event) => {
    let data = await controller.postData(url + 'all', controller.cities[controller.cities.length - 1])  
           
    if (data.length>0) {
        data.forEach(city => {
            controller.createCity(city.name,city.lat,city.long,city.population);   
            jumbo.appendChild(controller.createCard(controller.cities[controller.cities.length - 1]));         
        }) 
    }
        
}); 