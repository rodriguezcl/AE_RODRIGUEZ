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

$search.addEventListener('keyup', () => {
    let dataFilter = filterAndPrint(filterPast)
    createCardsUpcomingPast(dataFilter, $container)
})

$checkbox.addEventListener('change', () => {
    let dataFilter = filterAndPrint(filterPast)
    createCardsUpcomingPast(dataFilter, $container)
})