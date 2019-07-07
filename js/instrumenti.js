x("cardWB6404Description", "instrumenti/WB6404/Description")
x("cardWB6404Prise", "instrumenti/WB6404/Prise")

x("cardWB6203Description", "instrumenti/WB6203/Description")
x("cardWB6203Prise", "instrumenti/WB6203/Prise")

x("cardST608801Description", "instrumenti/ST6088-01/Description")
x("cardST608801Prise", "instrumenti/ST6088-01/Prise")

x("cardST608104Description", "instrumenti/ST6081-04/Description")
x("cardST608104Prise", "instrumenti/ST6081-04/Prise")

x("cardST609501Description", "instrumenti/ST6095-01/Description")
x("cardST609501Prise", "instrumenti/ST6095-01/Prise")

x("card010808Description", "instrumenti/010808/Description")
x("card010808Prise", "instrumenti/010808/Prise")

x("card010603Description", "instrumenti/010603/Description")
x("card010603Prise", "instrumenti/010603/Prise")

x("card010625Description", "instrumenti/010625/Description")
x("card010625Prise", "instrumenti/010625/Prise")

x("card010626Description", "instrumenti/010626/Description")
x("card010626Prise", "instrumenti/010626/Prise")

x("card010627Description", "instrumenti/010627/Description")
x("card010627Prise", "instrumenti/010627/Prise")

function x(x, x2) {
    firebase.database().ref().child(x2).on('value', function(datasnapshot) {
        document.getElementById(x).innerText = datasnapshot.val();
    })
}