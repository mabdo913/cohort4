import functions from './citycommunity.js'

const controller = new functions.Community();

addCityButton.addEventListener('click', async () => {
    controller.createCity(
        document.getElementById('name').value,
        document.getElementById('latitudeInput').value,
        document.getElementById('long').value,
        parseInt(document.getElementById('pop').value),
        
        );
    const jumbo = document.getElementById("jumbotron");
    jumbo.appendChild(controller.createCard(controller.cities[controller.cities.length - 1]));
    console.log (controller.cities);
stats();


}
);


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
