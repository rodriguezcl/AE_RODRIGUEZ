import data from './amazing.js'
import { createDetails } from './funciones.js';

const $container = document.getElementById('mainDetails');

createDetails(data.events, $container)

