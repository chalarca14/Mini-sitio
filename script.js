// Seleccionamos el botón por su id
const botonLogin = document.getElementById("btnLogin");

// Escuchamos el clic
botonLogin.addEventListener("click", (e) => {
    e.preventDefault(); // evita que el formulario se recargue

    // Guardamos el color original del botón
    const colorOriginal = botonLogin.style.background;

    // Cambiamos temporalmente el color a verde
    botonLogin.style.background = "linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)";

    // Esperamos 1 segundo y volvemos al color original
    setTimeout(() => {
        botonLogin.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    }, 1000);
});
