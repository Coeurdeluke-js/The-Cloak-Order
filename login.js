// login.js
document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.querySelector('input[placeholder="Nombre de usuario"]');
    const passwordInput = document.querySelector('input[placeholder="Contraseña"]');
    const loginButton = document.querySelector('button');
    const messageDiv = document.getElementById("register-message");

    loginButton.addEventListener('click', function () {
        const username = usernameInput.value;
        const password = passwordInput.value;

        auth.signInWithEmailAndPassword(username + "@yourdomain.com", password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('User signed in:', user);
                messageDiv.textContent = 'Login successful!';
                // Redirect to a member page or perform other actions
                window.location.href = "member.html";
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage);
                messageDiv.textContent = errorMessage; // Display error message
            });
    });
});