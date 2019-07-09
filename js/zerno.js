x("cardDaDescription", "zerno/KVERNELAND DA/Description")
x("cardDaPrise", "zerno/KVERNELAND DA/Prise")

x("cardDlDescription", "zerno/KVERNELAND DL/Description")
x("cardDlPrise", "zerno/KVERNELAND DL/Prise")

x("cardTlgDescription", "zerno/KVERNELAND TLG/Description")
x("cardTlgPrise", "zerno/KVERNELAND TLG/Prise")

x("cardPnDescription", "zerno/KVERNELAND PN - RN/Description")
x("cardPnPrise", "zerno/KVERNELAND PN - RN/Prise")

x("cardF20Description", "zerno/KVERNELAND F20/Description")
x("cardF20Prise", "zerno/KVERNELAND F20/Prise")

function x(x, x2) {
    firebase.database().ref().child(x2).on('value', function(datasnapshot) {
        document.getElementById(x).innerText = datasnapshot.val();
    })
}

