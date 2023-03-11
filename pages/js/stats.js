let data = []

async function getData() {
    let apiURL = "../../assets/amazing.json"
    fetch(apiURL)
        .then(res => res.json())
        .then(res => {
            data = res
            console.log(data);
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

            function tabla1(){
                let listaOrdPast="";
                listaOrdPast= arrayPast.filter(p=> p.percentage).sort((a,b)=> b.percentage - a.percentage)
                console.log("ordenados por % past",listaOrdPast);
                console.log(listaOrdPast[0])//mejor porcentaje de asistencia
                console.log(listaOrdPast[listaOrdPast.length-1])//ultimo de la lista 
            
                //Evento con mayor capacidad
                let listaOrdCapacidad = "";
                listaOrdCapacidad = data.events.filter(evento=>evento.capacity).sort((a,b)=> b.capacity - a.capacity)
                // console.log(listaOrdCapacidad);
                console.log(listaOrdCapacidad[0]);
            
                let templateTabla1=`
                        <tr>
                            <td>${listaOrdPast[0].name +" "+ listaOrdPast[0].percentage}%</td>
                            <td>${listaOrdPast[listaOrdPast.length-1].name +" "+ listaOrdPast[listaOrdPast.length-1].percentage}%</td>
                            <td>${listaOrdCapacidad[0].name +" capacity "+ listaOrdCapacidad[0].capacity }</td>
                        </tr>`
                document.querySelector('#tbodyT1').innerHTML = templateTabla1
                }
            tabla1()
        })
        .catch(err => console.log(err))
}
getData();