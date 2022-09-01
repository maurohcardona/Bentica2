carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
document.getElementById("cantidadCarrito").innerHTML = carrito.length ?? 0;



const ProductoAMostrar = JSON.parse(localStorage.getItem('verProducto'))
document.getElementById('titulo').innerHTML = ProductoAMostrar.nombre;
document.getElementById('imagen').innerHTML = ProductoAMostrar.imagen;



const agregarAlCarrito = (producto) => {
    carrito.push(producto);
    console.log(carrito);
    document.getElementById("cantidadCarrito").innerHTML = carrito.length;
    localStorage.setItem('carrito', JSON.stringify(carrito))
    /*carrito.forEach((producto) => {
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
    
}




