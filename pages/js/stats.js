import { createCategories } from './funciones.js';

let data = []
let categories = [];

async function getData() {
    let apiURL = "../../assets/amazing.json"
    fetch(apiURL)
        .then(res => res.json())
        .then(res => {
            data = res
            // console.log(data);
            const filterUpcoming = data.events.filter(evento => data.currentDate < evento.date)
            // console.log(filterUpcoming);
            const filterPast = data.events.filter(evento => data.currentDate > evento.date)
            // console.log(filterPast);
            let arrayPast = [];
            filterPast.filter(evento => arrayPast.push(
                {
                    percentage: ((evento.assistance * 100) / evento.capacity).toFixed(1),
                    name: evento.name,
                    assistance: evento.assistance,
                    capacity: evento.capacity,
                    category: evento.category,
                    price: evento.price,
                    revenues: evento.assistance * evento.price
                }))
            // console.log("Eventos pasados %", arrayPast);
            let arrayUpcoming = [];
            filterUpcoming.filter(evento => arrayUpcoming.push(
                {
                    percentage: ((evento.estimate * 100) / evento.capacity).toFixed(1),
                    name: evento.name,
                    estimate: evento.estimate,
                    capacity: evento.capacity,
                    category: evento.category,
                    price: evento.price,
                    revenues: evento.estimate * evento.price
                }))
            // console.log("Eventos futuros %", arrayUpcoming);

            function printTablaInicial() {
                let listaOrdPast = "";
                listaOrdPast = arrayPast.filter(p => p.percentage).sort((a, b) => b.percentage - a.percentage)
                // console.log("ordenados por % past", listaOrdPast);
                // console.log(listaOrdPast[0]) //primero de la listas
                // console.log(listaOrdPast[listaOrdPast.length - 1]); //ultimo de la lista

                //Evento con mayor capacidad
                let listaOrdCapacidad = "";
                listaOrdCapacidad = data.events.filter(evento => evento.capacity).sort((a, b) => b.capacity - a.capacity)
                // console.log(listaOrdCapacidad);
                // console.log(listaOrdCapacidad[0]);

                let tablaParte1 = `                        
                            <td>${listaOrdPast[0].name + " " + "(" + listaOrdPast[0].percentage}%)</td>
                            <td>${listaOrdPast[listaOrdPast.length - 1].name + " " + "(" + listaOrdPast[listaOrdPast.length - 1].percentage}%)</td>
                            <td>${listaOrdCapacidad[0].name + " (Capacity: " + listaOrdCapacidad[0].capacity})</td>
                        `
                document.querySelector('#tablaParte1').innerHTML = tablaParte1
            }
            printTablaInicial()

            function printTablaUpcoming() {
                categories = createCategories(filterUpcoming)
                // console.log(categories);
                let porCategoriaUpc = [];
                let ingresosPorcentajes = [];
                categories.forEach(cat => {
                    porCategoriaUpc.push({
                        categoria: cat,
                        data: arrayUpcoming.filter(datos => datos.category == cat)
                    })
                })
                // console.log("AgrupadosPorCat(upc)", porCategoriaUpc);
                // console.log(porCategoriaUpc);
                porCategoriaUpc.map(datos => {//cada cat con sus datos
                    ingresosPorcentajes.push({
                        category: datos.categoria,
                        estimate: datos.data.map(item => item.estimate),
                        capacity: datos.data.map(item => item.capacity),
                        estimateRevenue: datos.data.map(item => item.estimate * item.price)
                    })
                })
                // console.log("datosPorCAT(upc)", ingresosPorcentajes);
                ingresosPorcentajes.forEach(cat => {
                    let totalEstimate = 0
                    cat.estimate.forEach(estimate => totalEstimate += Number(estimate)) //suma de assistencia
                    cat.estimate = totalEstimate

                    let totalCapacityFut = 0
                    cat.capacity.forEach(capacity => totalCapacityFut += Number(capacity)) //suma de capacity
                    cat.capacity = totalCapacityFut

                    let totalEstimateRevenue = 0
                    cat.estimateRevenue.forEach(estimateRevenue => totalEstimateRevenue += Number(estimateRevenue)) //suma de revenue
                    cat.estimateRevenue = totalEstimateRevenue

                    cat.porcentajeAttendace = ((totalEstimate * 100) / totalCapacityFut).toFixed(1) //le agregamos una nueva propiedad, el calculo de % assistencia total por categoria.
                })
                // console.log(ingresosPorcentajes)
                let listOrdCatUpc = ""
                listOrdCatUpc = ingresosPorcentajes.filter(cat => cat.porcentajeAttendace).sort((a, b) => b.porcentajeAttendace - a.porcentajeAttendace)
                // console.log("OrdenadosPorGanancia(upc)", listOrdCatUpc);

                let tablaParte2 = "";
                listOrdCatUpc.forEach(e => {
                    e.listOrdCatUpc
                    tablaParte2 += `
                    <tr>
                    <td>${e.category}</td>
                    <td>US$ ${e.estimateRevenue}</td>
                    <td>${e.porcentajeAttendace}%</td>
                  </tr>`
                    document.querySelector('#tablaParte2').innerHTML = tablaParte2
                })
            }
            printTablaUpcoming()

            function printTablaPast() {
                categories = createCategories(filterPast)
                // console.log(categories);
                let porCategoriaPast = [];
                let ingresosPorcentajes = [];
                categories.forEach(cat => {
                    porCategoriaPast.push({
                        categoria: cat,
                        data: arrayPast.filter(datos => datos.category == cat)
                    })
                })
                // console.log("AgrupadosPorCat(past)", porCategoriaPast);

                porCategoriaPast.map(datos => {//cada cat con sus datos
                    ingresosPorcentajes.push({
                        category: datos.categoria,
                        assistance: datos.data.map(item => item.assistance),
                        capacity: datos.data.map(item => item.capacity),
                        revenue: datos.data.map(item => item.assistance * item.price)
                    })
                })
                // console.log("datosPorCAT(past)", ingresosPorcentajes);
                ingresosPorcentajes.forEach(cat => {
                    let totalAssistance = 0
                    cat.assistance.forEach(assistance => totalAssistance += Number(assistance)) //suma de assistencia
                    cat.assistance = totalAssistance

                    let totalCapacity = 0
                    cat.capacity.forEach(capacity => totalCapacity += Number(capacity)) //suma de capacity
                    cat.capacity = totalCapacity

                    let totalRevenue = 0
                    cat.revenue.forEach(revenue => totalRevenue += Number(revenue)) //suma de revenue
                    cat.revenue = totalRevenue

                    cat.porcentajeAttendace = ((totalAssistance * 100) / totalCapacity).toFixed(2) //le agregamos una nueva propiedad, el calculo de % assistencia total por categoria.
                })
                // console.log(ingresosPorcentajes)
                let listOrdCatPast = ""
                listOrdCatPast = ingresosPorcentajes.filter(cat => cat.porcentajeAttendace).sort((a, b) => b.porcentajeAttendace - a.porcentajeAttendace)
                // console.log("OrdenadosPorGanancia(upc)", listOrdCatPast);

                let tablaParte3 = "";
                listOrdCatPast.forEach(e => {
                    e.listOrdCatUpc
                    tablaParte3 += `
                    <tr>
                    <td>${e.category}</td>
                    <td>US$ ${e.revenue}</td>
                    <td>${e.porcentajeAttendace}%</td>
                  </tr>`
                    document.querySelector('#tablaParte3').innerHTML = tablaParte3
                })
            }
            printTablaPast()


        })
        .catch(err => console.log(err))
}
getData();