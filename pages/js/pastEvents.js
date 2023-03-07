import data from './amazing.js'
import { createCardsUpcomingPast, createCategories, createChecks, filterSearch, filterChecks, filterAndPrint } from './funciones.js';

//---------- FILTRO PAST ---------------

const filterPast = data.events.filter(evento => data.currentDate > evento.date)

//---------FIN FILTRO PAST------------- 

const $container = document.getElementById('container');
const $checkbox = document.getElementById('btn-group1');
const $search = document.querySelector('input[placeholder="Search"]');

createCardsUpcomingPast(filterPast, $container)

let categories = createCategories(filterPast)

createChecks(categories, $checkbox)

$search.addEventListener('keyup', (e) => {
    let dataFilter = filterSearch(filterPast, e.target.value)
    createCards(dataFilter, $container)
})

$checkbox.addEventListener('change', () => {
    let dataFilter = filterChecks(filterPast)
    createCards(dataFilter, $container)
    filterChecks(filterPast)
})

filterAndPrint(filterPast)
