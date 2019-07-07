x("cardEconomDescription", "odezhda/Ledenda_econom/Description")
x("cardEconomPrise", "odezhda/Ledenda_econom/Prise")

x("cardTimberDescription", "odezhda/Timber/Description")
x("cardTimberPrise", "odezhda/Timber/Prise")

x("cardInterDescription", "odezhda/Inter/Description")
x("cardInterPrise", "odezhda/Inter/Prise")

x("cardVivatDescription", "odezhda/Vivat/Description")
x("cardVivatPrise", "odezhda/Vivat/Prise")

x("cardVivatManDescription", "odezhda/Vivat man/Description")
x("cardVivatManPrise", "odezhda/Vivat man/Prise")

x("cardVivatWomenDescription", "odezhda/Vivat women/Description")
x("cardVivatWomenPrise", "odezhda/Vivat women/Prise")

x("cardNavigatorDescription", "odezhda/Navigator/Description")
x("cardNavigatorPrise", "odezhda/Navigator/Prise")

x("cardProfesionalDescription", "odezhda/Profesional/Description")
x("cardProfesionalPrise", "odezhda/Profesional/Prise")

function x(x, x2) {
    firebase.database().ref().child(x2).on('value', function(datasnapshot) {
        document.getElementById(x).innerText = datasnapshot.val();
    })
}