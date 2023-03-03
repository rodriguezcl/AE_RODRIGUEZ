const $container = document.getElementById('container');
const fragment = document.createDocumentFragment();
const $checkbox = document.getElementById('btn-group1');
const $search = document.querySelector('input[placeholder="Search"]');

const createCards = (array, contenedor) => {
  contenedor.innerHTML = ""
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

createCards(data.events, $container)

//---------------------------------------------------------------------

const createCategories = (array) =>{
    let categories = array.map(category=> category.category)

    categories = categories.reduce((acumulador, elemento)=>{
        if(!acumulador.includes(elemento)){
            acumulador.push(elemento);
        }
        return acumulador
    }, [])
    return categories 
}
let categories = createCategories(data.events)

//---------------------------------------------------------------------

const createChecks = (array, container) => {
    array.forEach( category=>{
      let div = document.createElement('div');
          div.innerHTML += `<div class="category checks-container ${category.toLowerCase()}">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault ${category.toLowerCase()}">
                          <label class="form-check-label" for="flexCheckDefault ${category.toLowerCase()}">
                              ${category}
                          </label>
      
                      </div>
                      `
          fragment.appendChild(div)
        })
        container.appendChild(fragment)
      }
createChecks(categories, $checkbox)

//---------------------------------------------------------------------

const filterSearch = (array, value) => {
        let filteredArray = array.filter(element=> element.name.toLowerCase().includes(value.toLowerCase()))
            return filteredArray
}

const filterChecks = (array) => {
    let checked = document.querySelectorAll('input[type="checkbox"]:checked');
    console.log(checked)
    //  let filteredArray = array.filter(element => element.category.toLowerCase().includes(checked.id.toLowerCase()))
    //  return filteredArray
}

const filterAndPrint =  (array) =>{
    let arrayFiltered = filterSearch(array, $search.value)
    arrayFiltered = filterChecks(arrayFiltered)
    return arrayFiltered
}

 $search.addEventListener('keyup', (e) =>{
    let dataFilter = filterSearch(data.events, e.target.value)
    createCards(dataFilter, $container)
})

$checkbox.addEventListener('change', (e)=>{
    // let dataFilter = filterChecks(data.events)
    // createCards(dataFilter, $container)
    console.log(e);
    filterChecks (data.events)
}) 

