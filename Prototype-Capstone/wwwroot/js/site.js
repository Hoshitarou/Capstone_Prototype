// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function validateCredentials() {
    const credentials = document.getElementById('credentials').value;
    if (credentials) {
        alert('Credentials entered: ' + credentials);
        // Here you can add more validation or redirection
    } else {
        alert('Please enter your credentials');
    }
}
