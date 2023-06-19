document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validación de campos vacíos
    if (username === '' || password === '') {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Validación de formato de usuario
    var usernameRegex = /^[a-zA-Z@]+$/;
    if (!usernameRegex.test(username)) {
        alert("El campo de usuario solo permite letras y el carácter '@'.");
        return;
    }

    // Validación de longitud mínima de la contraseña
    if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return;
    }

    // Si todas las validaciones pasan, puedes enviar los datos al servidor o realizar otras acciones necesarias
    alert("Inicio de sesión exitoso.");
});