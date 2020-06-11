import functions from './citycommunity.js'

const controller = new functions.Community();

addCityButton.addEventListener('click', async () => {
    controller.createCity(
        document.getElementById('name').value,
        document.getElementById('lat').value,
        document.getElementById('long').value,
        document.getElementById('pop').value,
        );

},
console.log (controller.cities)
)