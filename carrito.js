carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
document.getElementById("cantidadCarrito").innerHTML = carrito.length ?? 0;





    

 
  



/*const pCarrito = carrito.forEach((producto) => {
    
    const idButton = `add-cart${producto.id}`;
    document.getElementById("seccion-carrito").innerHTML += `<div class='card m-2'>
    <p>${producto.nombre}</p>
    <p><img class="fotocarrito"${producto.imagen}</p>
    <div><input id="contador${producto.id}" class="cantidadcarrito" type="number" value ="1">
    <button onclick="sumar(${producto.id})"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
  </svg></button>
  <button onclick="restar(${producto.id})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
</svg></button>
  </div>
    <p>Precio: ${producto.precio}</p> 
    <button onclick="sacarDelCarrito(${producto.id})" id="sacar${producto.id}">Sacar del carrito</button>
    </div>`
    
})*/

    

function sumar(id) {
    var i = document.getElementById("contador"+id);
    i.value++;
    
    
}
function restar(id) {
    var i = document.getElementById("contador"+id);
    i.value--;
}

function sacarDelCarrito(id) {
    carrito = carrito.filter((producto) => producto.id !== id)
    
    document.getElementById("cantidadCarrito").innerHTML = carrito.length ?? 0;
    localStorage.setItem('carrito', JSON.stringify(carrito))
    document.getElementById("seccion-carrito").innerHTML = `<div></div>`
    carrito.forEach((producto) => {
    
        const idButton = `add-cart${producto.id}`;
        document.getElementById("seccion-carrito").innerHTML += `<div class='card m-2'>
        <p>${producto.nombre}</p>
        <p><img class="fotocarrito"${producto.imagen}</p>
        <div><input id="contador${producto.id}" class="cantidadcarrito" type="number" value ="1">
        <button onclick="sumar(${producto.id})"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
      </svg></button>
      <button onclick="restar(${producto.id})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
    </svg></button>
      </div>
        <p>Precio: ${producto.precio}</p> 
        <button onclick="sacarDelCarrito(${producto.id})" id="sacar${producto.id}">Sacar del carrito</button>
        </div>`
        
    })
    
}
    
 

function vaciarcarrito() {
    for(let i = carrito.length; i > 0; i--) {
        carrito.pop()
        document.getElementById("cantidadCarrito").innerHTML = carrito.length ?? 0;
        document.getElementById("seccion-carrito").innerHTML = `<div>Carrito vacio</div>`
        localStorage.removeItem('carrito')
    }
    
}

