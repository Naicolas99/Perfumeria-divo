// 1️⃣ Obtener carrito guardado
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// 2️⃣ Obtener elementos del HTML
let lista = document.getElementById("lista-carrito");
let totalElemento = document.getElementById("total");

let total = 0;

// 3️⃣ Recorrer productos guardados
carrito.forEach(producto => {

    let li = document.createElement("li");
    li.textContent = producto.nombre + " - $" + producto.precio;

    lista.appendChild(li);

    total += producto.precio;
});

// 4️⃣ Mostrar total
totalElemento.textContent = total;
function vaciarCarrito() {
    localStorage.removeItem("carrito");
    alert("Pedido eliminado");
    location.reload();
}
function confirmarPedido() {
    if (!localStorage.getItem("carrito")) {
        alert("No hay productos en el pedido.");
        return;
    }

    alert("Pedido registrado. Realiza el pago con el QR y envía el comprobante.");

    // Opcional: limpiar carrito después de confirmar
    localStorage.removeItem("carrito");
    location.reload();
}
    