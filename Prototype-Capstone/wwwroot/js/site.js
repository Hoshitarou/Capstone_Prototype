// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function validateCredentials() {
    const credentials = document.getElementById('credentials').value.trim().toLowerCase();
    if (credentials === 'admin' || credentials === 'registrar') {
        alert('Welcome ' + credentials + '! Proceeding to the login page.');
        
        window.location.href = '~/Views/login.cshtml'; 
    } else {
        alert('Invalid credentials. Please enter "admin" or "registrar".');
    }
}
