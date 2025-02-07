document.addEventListener('DOMContentLoaded', function () {
    // Check if there are stored credentials
    const storedUsername = localStorage.getItem('rememberedUsername');
    const storedPassword = localStorage.getItem('rememberedPassword');
    const rememberMe = localStorage.getItem('rememberMe');

    if (rememberMe === 'true' && storedUsername && storedPassword) {
        document.getElementById('username').value = storedUsername;
        document.getElementById('password').value = storedPassword;
        document.getElementById('rememberMe').checked = true;
    }

    // Select the button and remove buttonloading class initially
    const theButton = document.querySelector(".button");
    if (theButton) {
        theButton.classList.remove("buttonloading"); // Ensure it does not start with buttonloading
        theButton.addEventListener("click", () => {
            theButton.classList.add("buttonloading"); // Activate loading on click
        });
    } else {
        console.error("Button with class 'button' not found.");
    }
});

function validateSignIn(event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    const loginResponse = document.getElementById('loginResponse');
    const signInButton = document.getElementById('signInButton');
    const theButton = document.querySelector(".button");

    // Basic validation for empty fields
    if (!username || !password) {
        alert('Please fill in all fields');
        if (theButton) theButton.classList.remove("buttonloading"); // Stop loading if fields are empty
        return false;
    }

    // Store credentials if remember me is checked
    if (rememberMe) {
        localStorage.setItem('rememberedUsername', username);
        localStorage.setItem('rememberedPassword', password);
        localStorage.setItem('rememberMe', 'true');
    } else {
        localStorage.removeItem('rememberedUsername');
        localStorage.removeItem('rememberedPassword');
        localStorage.setItem('rememberMe', 'false');
    }

    // Make API request to Google Apps Script
    const url = `https://script.google.com/macros/s/AKfycbx9LqW7xoWB6_qKUeTMwlgTnz8jJw_1eZXFYNuEJ6PVnH5p99WuS98awDPWYsMzQ-SW/exec?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;

    fetch(url)
        .then(response => response.text())
        .then(data => {
            loginResponse.style.color = 'rgb(22, 123, 52)';
            loginResponse.innerText = data;
            loginResponse.style.display = 'block';

            if (data.includes('Success')) {
                setTimeout(() => {
                    window.open('form.html', '_blank');

                    // Remove buttonloading class after page shifts
                    if (theButton) theButton.classList.remove("buttonloading");
                }, 1000);
            } else {
                // Stop loading if invalid credentials
                if (theButton) theButton.classList.remove("buttonloading");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            loginResponse.innerText = 'Invalid Credentials!';
            loginResponse.style.color = 'rgb(255, 0, 0)';
            loginResponse.style.display = 'block';

            // Stop loading if API fails (invalid credentials or error)
            if (theButton) theButton.classList.remove("buttonloading");
        })
        .finally(() => {
            signInButton.disabled = false;
        });
}

// Password visibility toggle functionality
const passwordInput = document.getElementById('password');
const passwordToggle = document.getElementById('password-toggle');

if (passwordInput && passwordToggle) {
    passwordToggle.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type');
        passwordInput.setAttribute('type', type === 'password' ? 'text' : 'password');
        passwordToggle.innerHTML = type === 'password' ? '👁️‍🗨️' : '👁️';
    });
} else {
    console.error('Password input or toggle button not found!');
}
