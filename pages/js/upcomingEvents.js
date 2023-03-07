import data from './amazing.js'
import { createCardsUpcomingPast, createCategories, createChecks, filterSearch, filterChecks, filterAndPrint } from './funciones.js';


//---------- FILTRO UPCOMING ---------------

const filterUpcoming = data.events.filter(evento => data.currentDate < evento.date)

//---------- FIN FILTRO UPCOMING -----------

const $container = document.getElementById('container');
const $checkbox = document.getElementById('btn-group1');
const $search = document.querySelector('input[placeholder="Search"]');

createCardsUpcomingPast(filterUpcoming, $container)

let categories = createCategories(filterUpcoming)

createChecks(categories, $checkbox)

$search.addEventListener('keyup', (e) => {
    let dataFilter = filterSearch(filterUpcoming, e.target.value)
    createCards(dataFilter, $container)
})

$checkbox.addEventListener('change', () => {
    let dataFilter = filterChecks(filterUpcoming)
    createCards(dataFilter, $container)
    filterChecks(filterUpcoming)
})

filterAndPrint(filterUpcoming)
