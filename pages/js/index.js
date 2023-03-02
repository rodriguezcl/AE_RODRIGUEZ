//-------------- FUNCION IMPRIMIR CARDS ----------------

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

//---------- FIN FUNCION IMPRIMIR CARDS ---------


  imprimirCards(data.events, container) //<-------- IMPRIME LAS CARDS

  
//-------------- FUNCION IMPRIMIR CHECKS ----------------

let btnGroup = document.getElementById("btn-group1")

function imprimirChecks(array, contenedor) {
  array.forEach((evento)=>{
    let div = document.createElement('div');
    div.innerHTML += `<div class="category">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${evento}">
                    <label class="form-check-label" for="flexCheckDefault${evento}">
                        ${evento}
                    </label>

                </div>
                `
    fragment.appendChild(div)
  })
  contenedor.appendChild(fragment)
}

//------------FIN FUNCION IMPRIMIR CHECKS ---------------

//---------- FILTRO CHECKS ---------------

const categories = data.events.map(evento => evento.category);
const filterCategories = categories.filter((category, index) => categories.indexOf(category) === index);
console.log(filterCategories);

//-----------FIN FILTRO CHECKS ----------


imprimirChecks(filterCategories, btnGroup) //<------ IMPRIME LOS CHECKS

