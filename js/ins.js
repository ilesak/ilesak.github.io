x("cardWB6404Name","instrumenti/WB6404/Name") 
x("cardWB6404Description","instrumenti/WB6404/Description")

x("cardWB6203Name","instrumenti/WB6203/Name") 
x("cardWB6203Description","instrumenti/WB6203/Description")

x("cardST608801Name","instrumenti/ST6088-01/Name") 
x("cardST608801Description","instrumenti/ST6088-01/Description")

x("cardST608104Name","instrumenti/ST6081-04/Name") 
x("cardST608104Description","instrumenti/ST6081-04/Description")

x("cardST609501Name","instrumenti/ST6095-01/Name") 
x("cardST609501Description","instrumenti/ST6095-01/Description")

x("card010808Name","instrumenti/010808/Name") 
x("card010808Description","instrumenti/010808/Description")

x("card010603Name","instrumenti/010603/Name") 
x("card010603Description","instrumenti/010603/Description")

x("card010625Name","instrumenti/010625/Name") 
x("card010625Description","instrumenti/010625/Description")

x("card010626Name","instrumenti/010626/Name") 
x("card010626Description","instrumenti/010626/Description")

x("card010627Name","instrumenti/010627/Name") 
x("card010627Description","instrumenti/010627/Description")


function x(x, x2){ 
firebase.database().ref().child(x2).on('value', function(datasnapshot){ 
document.getElementById(x).innerText=datasnapshot.val(); 
}) 
}

