document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de manera predeterminada

    // Obtener los valores del formulario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validación simple (esto puede cambiar según tus necesidades)
    if (username === "admin" && password === "admin_1") {
        // Guardar el nombre del usuario en localStorage (o sessionStorage)
        localStorage.setItem("username", username);
        
        // Redirigir a la página principal (index.html)
        window.location.href = "index.html";
    } else {
        // Si las credenciales son incorrectas, mostrar un mensaje de error
        alert("Usuario o contraseña incorrectos");
    }
});
