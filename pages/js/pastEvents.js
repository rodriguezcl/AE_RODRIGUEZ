// let container = document.getElementById("container")
// const fragment = document.createDocumentFragment();

// function checkPast(array, contenedor) {
//   for (let producto of array) {

//     let currentDate = data.currentDate;
//     let eventDate = producto.date;

//     if (currentDate > eventDate) {
//       let div = document.createElement('div');
//       div.innerHTML += `<div class="col">
//           <div class="card h-100">
//           <img src="${producto.image}" class="card-img-top" alt="...">
//                       <div class="card-body">
//                           <h5 class="card-title">${producto.name}</h5>
//                           <p class="card-text">Category: ${producto.category}</p>
//                       </div>
//                       <div class="card-footer">
//                           <small class="text-muted">Price: $${producto.price}</small>
//                           <a type="button" class="btn btn-primary btn-sm" href="./details.html">See more</a>
//                       </div>
//                       </div>
//                   </div>
//                   `
//       fragment.appendChild(div)

//     }
//   }
//   contenedor.appendChild(fragment)
// }
// checkPast(data.events, container)


//Higher Order Function - .filter()

let container = document.getElementById("container")
const fragment = document.createDocumentFragment();

function imprimirCards(array, contenedor) {
  array.forEach((evento)=>{
    let div = document.createElement('div');
    div.innerHTML += `<div class="col">
        <div class="card h-100">
        <img src="${evento.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${evento.name}</h5>
                        <p class="card-text">Category: ${evento.category}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Price: $${evento.price}</small>
                        <a type="button" class="btn btn-primary btn-sm" href="./details.html">See more</a>
                    </div>
                    </div>
                </div>
                `
    fragment.appendChild(div)
  })
  contenedor.appendChild(fragment)
}

const filterPast = data.events.filter(evento => data.currentDate > evento.date)
console.log(filterPast)

imprimirCards(filterPast, container)