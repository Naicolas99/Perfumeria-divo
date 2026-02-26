// ===== OBTENER CARRITO =====
function obtenerCarrito(){
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

// ===== MOSTRAR PRODUCTOS EN LISTA =====
function mostrarProductos(){
    let carrito = obtenerCarrito();
    let lista = document.getElementById("listaCarrito");

    if(!lista) return;

    lista.innerHTML = "";

    carrito.forEach((producto, index) => {
        let li = document.createElement("li");
        li.innerHTML = producto.nombre + " - $" + producto.precio +
        " <button onclick='eliminarProducto(" + index + ")'>❌</button>";
        lista.appendChild(li);
    });
}

// ===== MOSTRAR TOTAL =====
function mostrarTotal(){
    let carrito = obtenerCarrito();
    let total = 0;

    carrito.forEach(producto => {
        total += producto.precio;
    });

    let totalElemento = document.getElementById("total");
    if(totalElemento){
        totalElemento.innerText = total;
    }
}

// ===== VACIAR CARRITO =====
function vaciarCarrito(){
    localStorage.removeItem("carrito");
    actualizarContador();
    mostrarTotal();
    mostrarProductos();
    alert("Carrito vaciado");
}

// ===== ELIMINAR PRODUCTO INDIVIDUAL ⭐
function eliminarProducto(index){
    let carrito = obtenerCarrito();
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarProductos();
    mostrarTotal();
    actualizarContador();
}

// ===== CONFIRMAR PEDIDO =====
function confirmarPedido(){
    let carrito = obtenerCarrito();

    if(carrito.length === 0){
        alert("No hay productos en el pedido");
        return;
    }

    alert("Pedido confirmado. Realiza el pago.");
}

// ===== CONTADOR NAVBAR =====
function actualizarContador(){
    let carrito = obtenerCarrito();
    let contador = document.getElementById("contadorCarrito");

    if(contador){
        contador.innerText = carrito.length;
    }
}

// ===== EJECUTAR AL CARGAR =====
mostrarProductos();
mostrarTotal();
actualizarContador();
