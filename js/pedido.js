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

    // Formato pesos colombianos
    let totalFormateado = total.toLocaleString("es-CO");

    let totalElemento = document.getElementById("total");
    if(totalElemento){
        totalElemento.innerText = totalFormateado + " COP";
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

// ===== ELIMINAR PRODUCTO INDIVIDUAL =====
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

    let mensaje = "Hola! Quiero hacer el siguiente pedido:%0A%0A";
    let total = 0;

    carrito.forEach(producto => {
        mensaje += "• " + producto.nombre + " - $" + producto.precio + "%0A";
        total += producto.precio;
    });

    mensaje += "%0ATotal: $" + total.toLocaleString("es-CO") + " COP";
    mensaje += "%0A%0AEnvío comprobante ahora 🙌";

    let telefono = "573138556802";

    window.open("https://wa.me/" + telefono + "?text=" + mensaje);

    alert("🎉 Pedido confirmado 🎉");

    localStorage.removeItem("carrito");
    mostrarProductos();
    mostrarTotal();
    actualizarContador();
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
