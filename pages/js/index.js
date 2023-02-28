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
                        <a type="button" class="btn btn-primary btn-sm" href="./pages/details.html">See more</a>
                    </div>
                    </div>
                </div>
                `
    fragment.appendChild(div)
  })
  contenedor.appendChild(fragment)
}
  imprimirCards(data.events, container)