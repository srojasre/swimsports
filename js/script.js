document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const loginError = document.getElementById("loginError");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Aquí se simula la validación de credenciales con datos ficticios.
        const validCredentials = {
            username: "testuser",
            password: "testpassword"
        };

        if (username === validCredentials.username && password === validCredentials.password) {
            loginError.textContent = "Login successful!";
            loginError.style.color = "green";
            // Aquí puedes redirigir al usuario a otra página o realizar alguna otra acción.
        } else {
            loginError.textContent = "Invalid username or password.";
            loginError.style.color = "red";
        }
    });
});
