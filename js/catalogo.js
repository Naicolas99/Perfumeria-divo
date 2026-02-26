// ===== AGREGAR PRODUCTO AL CARRITO =====
function agregarProducto(nombre, precio) {

    // 1️⃣ Obtener carrito guardado
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // 2️⃣ Crear producto
    let producto = {
        nombre: nombre,
        precio: precio
    };

    // 3️⃣ Guardar producto en el carrito
    carrito.push(producto);

    // 4️⃣ Guardar carrito actualizado
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // 5️⃣ Mostrar mensaje
    alert(nombre + " agregado al pedido");

    // 6️⃣ ACTUALIZAR CONTADOR DEL NAVBAR ⭐
    actualizarContador();
}


// ===== CONTADOR DEL NAVBAR =====
function actualizarContador(){
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let contador = document.getElementById("contadorCarrito");

    if(contador){
        contador.innerText = carrito.length;
    }
}

// Ejecutar contador cuando carga la página
actualizarContador();
// ===== MOSTRAR TOTAL EN PEDIDO =====
function mostrarTotal(){
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
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
    alert("Carrito vaciado");
}

// ===== CONFIRMAR PEDIDO =====
function confirmarPedido(){
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if(carrito.length === 0){
        alert("No hay productos en el pedido");
        return;
    }

    alert("Pedido confirmado. Realiza el pago.");
}

// Ejecutar total al cargar página
mostrarTotal();
