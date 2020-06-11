import functions from './citycommunity.js'

const controller = new functions.Community();

addCityButton.addEventListener('click', async () => {
    controller.createCity(
        document.getElementById('name').value,
        document.getElementById('latitudeInput').value,
        document.getElementById('long').value,
        document.getElementById('pop').value,
        
        );
    const jumbo = document.getElementById("jumbotron");
    jumbo.appendChild(controller.createCard(controller.cities[controller.cities.length - 1]));
    
    
console.log (controller.cities)
},

)