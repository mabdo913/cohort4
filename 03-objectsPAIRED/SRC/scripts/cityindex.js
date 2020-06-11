import functions from './citycommunity.js'

const community = new functions.Community.createCity();

addCityButton.addEventListener('click', async () => {
    community.createCity(
        document.getElementById('city').value,
        document.getElementById('lat').value,
        document.getElementById('long').value,
        document.getElementById('pop').value,
        );

},
console.log (community.cities)
)