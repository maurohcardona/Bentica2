 carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
document.getElementById("cantidadCarrito").innerHTML = carrito.length ?? 0;




let cards ="";
let data =""

const ggg = async () =>{
   const response = await fetch('productos.json');
     data = await response.json();
    let acumulador =``;
    data.forEach((producto) => {
        acumulador += `<div class='card m-2'>
        <h5>${producto.nombre}</h5>
        <img class ="fotitos-productos" src="${producto.imagen}"/>
        <h5>Precio: ${producto.precio}</h5> 
        <button class="boton" onclick="verProducto(${producto.id})">Comprar</button>
        </div>`
    });
    document.getElementById("seccion-card").innerHTML = acumulador
}

ggg()





    const verProducto = (id) => {
        const indiceProductos = data.findIndex ((producto) => producto.id === id );
        localStorage.setItem('verProducto', JSON.stringify(data[indiceProductos]))
        location.href = "verProducto.html"
    }





