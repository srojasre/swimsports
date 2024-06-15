document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const loginError = document.getElementById("loginError");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Credential auth 
        const validCredentials = {
            username: "testuser",
            password: "testpassword"
        };

        if (username === validCredentials.username && password === validCredentials.password) {
            loginError.textContent = "Login successful!";
            loginError.style.color = "green";
            // Redirect to home page user is logged in
        } else {
            loginError.textContent = "Invalid username or password.";
            loginError.style.color = "red";
        }
    });
});
