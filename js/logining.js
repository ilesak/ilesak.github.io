firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;

        document.getElementById('vhod').innerText = "Выйти из аккаунта " + email
        document.getElementById('vhod').removeAttribute('style')
        document.getElementById('vhod').removeAttribute('href')
        document.getElementById('vhod').setAttribute("onclick", "vihod()")
    } else { document.getElementById('vhod').removeAttribute('style') }
})


function vihod() {
    firebase.auth().signOut()
    document.getElementById('vhod').innerText = "Войти"
    document.getElementById('vhod').setAttribute("href", "auth.html")
}