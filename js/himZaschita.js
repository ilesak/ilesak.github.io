x("cardMAROLEXDescription", "himZaschita/MAROLEX Profession 5/Description")
x("cardMAROLEXPrise", "himZaschita/MAROLEX Profession 5/Prise")

x("cardTitanDescription", "himZaschita/MAROLEX Titan 12/Description")
x("cardTitanPrise", "himZaschita/MAROLEX Titan 12/Prise")

x("cardZhuk220Description", "himZaschita/Zhuk OP-220/Description")
x("cardZhuk220Prise", "himZaschita/Zhuk OP-220/Prise")

x("cardSTARTULDescription", "himZaschita/STARTUL GARDEN ST6021-30/Description")
x("cardSTARTULPrise", "himZaschita/STARTUL GARDEN ST6021-30/Prise")

x("cardKwazarDescription", "himZaschita/Kwazar/Description")
x("cardKwazarPrise", "himZaschita/Kwazar/Prise")

x("cardGARDENADescription", "himZaschita/GARDENA/Description")
x("cardGARDENAPrise", "himZaschita/GARDENA/Prise")
	
x("cardZhuk270Description", "himZaschita/Zhuk OP-270-Lux/Description")
x("cardZhuk270Prise", "himZaschita/Zhuk OP-270-Lux/Prise")

function x(x, x2) {
    firebase.database().ref().child(x2).on('value', function(datasnapshot) {
        document.getElementById(x).innerText = datasnapshot.val();
    })
}