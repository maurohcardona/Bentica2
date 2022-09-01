let carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
document.getElementById("cantidadCarrito").innerHTML = carrito.length ?? 0;


productos = [
    {id: 1, nombre:"Shampoo sólido Rosa Mosqueta", precio:" $1000", imagen:`<img class="fotitos-productos" src="./imagenes/sahmpoo-seco.jpg">`},
    {id: 2, nombre:"Acondicionador sólido Rosa Mosqueta", precio:" $1000", imagen:`<img class="fotitos-productos" src="./imagenes/acondicionador-seco.jpg">`},
    {id: 3, nombre:"Shampoo sólido Aceite de almendras", precio:" $1200", imagen:`<img class="fotitos-productos" src="./imagenes/shampoo-normales.jpg">`},
    {id: 4, nombre:"Acondicionador sólido Aceite de almendras", precio:" $1200", imagen:`<img class="fotitos-productos" src="./imagenes/acondicionador-normales.jpg">`},
    {id: 5, nombre:"Shampoo sólido Té Verde", precio:" $1300", imagen:`<img class="fotitos-productos" src="./imagenes/shampoo-grasos.jpg">`},
    {id: 6, nombre:"Acondicionador sólido Té Verde", precio:" $1300", imagen:`<img class="fotitos-productos" src="./imagenes/acondicionador grasos.jpg">`},
        
]

let cards ="";

productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}`;
    document.getElementById("seccion-card").innerHTML += `<div class='card m-2'>
    <h5>${producto.nombre}</h5>
    ${producto.imagen}
    <h5>Precio: ${producto.precio}</h5> 
    <button class="boton" onclick="verProducto(${producto.id})">Comprar</button>
    </div>`
    
    });

    const verProducto = (id) => {
        const indiceProductos = productos.findIndex ((producto) => producto.id === id );
        localStorage.setItem('verProducto', JSON.stringify(productos[indiceProductos]))
        location.href = "verProducto.html"
    }

/*productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}`;
    document.getElementById(idButton).onclick = () => {
        alert(`Agregaste ${producto.nombre} al carrito`);
        carrito.push(producto);
        console.log(carrito);
        document.getElementById("cantidadCarrito").innerHTML = carrito.length;
    };

})*/

