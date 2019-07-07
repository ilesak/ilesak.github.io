x("cardKkyDescription", "potato/KKY/Description")
x("cardKkyPrise", "potato/KKY/Prise")

x("cardKgoDescription", "potato/KGO/Description")
x("cardKgoPrise", "potato/KGO/Prise")

x("cardSpkDescription", "potato/SPK/Description")
x("cardSpkPrise", "potato/SPK/Prise")

x("cardKonDescription", "potato/KON/Description")
x("cardKonPrise", "potato/KON/Prise")

x("cardMbyDescription", "potato/MBY/Description")
x("cardMbyPrise", "potato/MBY/Prise")

x("cardMbyODescription", "potato/MBY(O)/Description")
x("cardMbyOPrise", "potato/MBY(O)/Prise")

x("cardApkDescription", "potato/APK/Description")
x("cardApkPrise", "potato/APK/Prise")

function x(x, x2) {
    firebase.database().ref().child(x2).on('value', function(datasnapshot) {
        document.getElementById(x).innerText = datasnapshot.val();
    })
}