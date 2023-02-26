let container = document.getElementById("mainDetails")
const fragment = document.createDocumentFragment();

function verDetails(array, contenedor) {
  for (let producto of array) {
    let div = document.createElement('div');
    div.innerHTML += `
    
    <div class="col">
        <div class="card h-100">
            <img src="${producto.image}" id="img-details" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.name}</h5>
                <p class="card-text">Category: ${producto.category}</p>
                <p class="card-text">Date: ${producto.date}</p>
                <p class="card-text">Description: ${producto.description}</p>
                <p class="card-text">Category: ${producto.category}</p>
                <p class="card-text">Place: ${producto.place}</p>
                <p class="card-text">Capacity: ${producto.capacity}</p>
                <p class="card-text">Assistance: ${producto.assistance}</p>

            </div>
            <div class="card-footer">
                <small class="text-muted">Price: $${producto.price}</small>
            </div>
        </div>
    </div>
                `
    fragment.appendChild(div)
  }
  contenedor.appendChild(fragment)
}
verDetails(data.events, container)