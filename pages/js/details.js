// import data from './amazing.js'
import { createDetails } from './funciones.js';

const $container = document.getElementById('mainDetails');

const queryString = location.search
const params = new URLSearchParams(queryString)
const beerID = params.get('id')
const detail = data.events.find (element => element._id == beerID )

console.log(detail)

createDetails(detail, $container)

