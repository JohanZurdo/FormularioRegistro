// script.js

// Obtener los elementos del formulario
const formulario = document.getElementById("f2");
const nombre = document.getElementById("txtlogin");
const apellido = document.getElementById("txtnombres");
const correo = document.getElementById("txtclave");
const contraseña = document.getElementById("txtdocumento");
const boton = document.getElementById("boton");

// Agregar evento submit al formulario
formulario.addEventListener("submit", function(event) {
    // Evitar que se recargue la página
    event.preventDefault();
    
    // Validar los datos del usuario
    if (nombre.value === "" || apellido.value === "" || correo.value === "" || contraseña.value === "") {
        alert("Debes llenar todos los campos");
        return;
    }

    // Enviar los datos al servidor
    // Aquí se puede usar una función fetch o XMLHttpRequest para hacer una petición HTTP
    // Por simplicidad, solo se muestra un mensaje de éxito
    alert("Te has registrado correctamente");

    // Limpiar los campos del formulario
    nombre.value = "";
    apellido.value = "";
    correo.value = "";
    contraseña.value = "";
});
