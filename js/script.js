document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene que el formulario se envíe

    // Obtener valores de los campos
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validar credenciales (esto es solo un ejemplo, deberías validar con tu base de datos)
    var validUsername = 'usuario';
    var validPassword = 'contraseña';

    if (username === validUsername && password === validPassword) {
        alert('Usuario correcto');
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});

