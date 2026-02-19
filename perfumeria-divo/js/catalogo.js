function agregarProducto(nombre, precio) {

    // 1️⃣ Obtener carrito actual del navegador
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

    // 5️⃣ Mensaje al usuario
    alert(nombre + " agregado al pedido");
}
