import data from './amazing.js'
import { createCards, createCategories, createChecks, filterSearch, filterChecks, filterAndPrint } from './funciones.js';

const $container = document.getElementById('container');
const $checkbox = document.getElementById('btn-group1');
const $search = document.querySelector('input[placeholder="Search"]');

createCards(data.events, $container)

let categories = createCategories(data.events)

createChecks(categories, $checkbox)

$search.addEventListener('keyup', (e) => {
    let dataFilter = filterSearch(data.events, e.target.value)
    createCards(dataFilter, $container)
})

$checkbox.addEventListener('change', () => {
    let dataFilter = filterChecks(data.events)
    createCards(dataFilter, $container)
    filterChecks(data.events)
})

filterAndPrint(data.events)

