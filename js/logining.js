firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;

        document.getElementById('vhod').innerText = "Аккаунт " + email
        document.getElementById('vhod').removeAttribute('style')
        document.getElementById('vhod').removeAttribute('href')
        if (firebase.auth().currentUser.email === 'admin@admin.com') {
            document.getElementById('admin-menu').setAttribute('style', 'display: block');
            document.getElementById('orders').setAttribute('style', 'display: block');
        } else {
            document.getElementById('admin-menu').setAttribute('style', 'display: none');
            document.getElementById('orders').setAttribute('style', 'display: none');
        }
        document.getElementById('vhod').setAttribute("onclick", "account()")
        document.getElementById('quit').setAttribute("onclick", "quit()")
        document.getElementById('quickstart-sign-in').disabled = true;
        document.getElementById('quit').disabled = false;

        if (window.location.href.substr('auth')) {
            document.getElementById('quickstart-sign-up').setAttribute('disabled', true);
        } else {
            document.getElementById('quickstart-sign-up').setAttribute('disabled', false);
        }
    } else {
        document.getElementById('admin-menu').setAttribute('style', 'display: none');
        document.getElementById('orders').setAttribute('style', 'display: none');
        document.getElementById('vhod').removeAttribute('style')
        document.getElementById('quickstart-sign-in').setAttribute("onclick", "toggleSignIn()")
        document.getElementById('quickstart-sign-up').setAttribute("onclick", "handleSignUp()")
        document.getElementById('quickstart-sign-in').disabled = false;
        document.getElementById('quickstart-sign-up').disabled = false;
        document.getElementById('quit').disabled = true;
    }
})


function account() {
    window.location.href = './auth.html';
}

function quit() {
    firebase.auth().signOut()
    document.getElementById('vhod').innerText = "Войти"
    document.getElementById('vhod').setAttribute("href", "auth.html")
    document.getElementById('quickstart-sign-up').setAttribute('disabled', false);
}