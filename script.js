// Arreglo para almacenar los productos en el carrito
let carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    mostrarCarrito();
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
    const listaCarrito = document.getElementById('carrito-lista');
    
    // Limpiar la lista antes de actualizar
    listaCarrito.innerHTML = '';

    // Si el carrito está vacío, mostrar un mensaje
    if (carrito.length === 0) {
        listaCarrito.innerHTML = '<li>No has añadido productos al carrito.</li>';
    } else {
        // Mostrar los productos en el carrito
        carrito.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            listaCarrito.appendChild(li);
        });
    }
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    mostrarCarrito();
}



