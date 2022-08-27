 /**
     * * 1. Detectar dónde vamos a hacer el render de los elementos
     * * 2. Fetching de los datos
     * * 3. Mostrar en pantalla
     */
  
  function addProduct (id) {
    fetch("./data.json")
      .then(response => response.json())
      .then(products => {
        const addedProduct = products.find(element => element.id === id)
        // * Acá tenemos el producto que compramos
        /**
         * ! FALTA:
         * - Almacenar la cantidad de productos que hay agregdos al carrito (tanto subtotal de cada producto como el total)
         * - Poder modificar esas cantidades (poder sumar y restar productos)
         * - Poder saber qué productos tengo en el carrito
         */
        console.log(addedProduct)
      })
  }
  
  window.addEventListener("DOMContentLoaded", e => {
    const lista = document.getElementById("listado")
  
    fetch("./data.json")
      .then(response => response.json())
      .then(products => {
        products.forEach(product => {
          const { id, nombre, precio, foto } = product
          const item = document.createElement('div')
          item.classList.add('card')
          item.innerHTML = `
            <img src="img/${foto}" alt="" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${nombre}</h5>
              <p class="card-text">$${precio}</p>
              <a class="btn btn-primary buy-button" onClick="addProduct(${id})">Comprar</a>
            </div>
          `
          lista.append(item)
        })
      })
  })