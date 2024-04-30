$(document).ready(function(){
    $('main').scrollspy({ target: '#navbar-container' });
});

var loginErrorTimeout;
function showLoginError() {
    var loginErrorAlert = document.getElementById("loginErrorAlert");
    
    if (loginErrorTimeout) {
        clearTimeout(loginErrorTimeout);
        loginErrorAlert.style.display = "none";
    }

    loginErrorAlert.style.display = "block";

    loginErrorTimeout = setTimeout(function() {
        loginErrorAlert.style.display = "none";
    }, 5000);
}