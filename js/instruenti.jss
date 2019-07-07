//Блок чтения данных для страницы instrumenti.html
//Получение данных для карточки Легенда Эконом
var cardWB6404Name = document.getElementById("cardWB6404Name");
var cardWB6404NameRef = firebase.database().ref().child("instrumenti/WB6404/Name");
cardWB6404NameRef.on('value', function(datasnapshot){
	cardWB6404Name.innerText=datasnapshot.val();})

var cardWB6404Description = document.getElementById("cardWB6404Description");
var cardWB6404DescriptionRef = firebase.database().ref().child("instrumenti/WB6404/Description");
cardWB6404DescriptionRef.on('value', function(datasnapshot){
	cardWB6404Description.innerText=datasnapshot.val();})

var cardWB6404Prise = document.getElementById("cardWB6404Prise");
var cardWB6404PriseRef = firebase.database().ref().child("instrumenti/WB6404/Prise");
cardWB6404PriseRef.on('value', function(datasnapshot){
	cardWB6404Prise.innerText=datasnapshot.val();})


//Получение данных для карточки Легенда Эконом
var cardWB6203Name = document.getElementById("cardWB6203Name");
var cardWB6203NameRef = firebase.database().ref().child("instrumenti/WB6203/Name");
cardWB6203NameRef.on('value', function(datasnapshot){
	cardWB6203Name.innerText=datasnapshot.val();})

var cardWB6203Description = document.getElementById("cardWB6203Description");
var cardWB6203DescriptionRef = firebase.database().ref().child("instrumenti/WB6203/Description");
cardWB6203DescriptionRef.on('value', function(datasnapshot){
	cardWB6203Description.innerText=datasnapshot.val();})

var cardWB6203Prise = document.getElementById("cardWB6203Prise");
var cardWB6203PriseRef = firebase.database().ref().child("instrumenti/WB6203/Prise");
cardWB6203PriseRef.on('value', function(datasnapshot){
	cardWB6203Prise.innerText=datasnapshot.val();})

//Получение данных для карточки Легенда Эконом
var cardST608801Name = document.getElementById("cardST608801Name");
var cardST608801NameRef = firebase.database().ref().child("instrumenti/ST6088-01/Name");
cardST608801NameRef.on('value', function(datasnapshot){
	cardST608801Name.innerText=datasnapshot.val();})

var cardST608801Description = document.getElementById("cardST608801Description");
var cardST608801DescriptionRef = firebase.database().ref().child("instrumenti/ST6088-01/Description");
cardST608801DescriptionRef.on('value', function(datasnapshot){
	cardST608801Description.innerText=datasnapshot.val();})

var cardST608801Prise = document.getElementById("cardST608801Prise");
var cardST608801PriseRef = firebase.database().ref().child("instrumenti/ST608801/Prise");
cardST608801PriseRef.on('value', function(datasnapshot){
	cardST608801Prise.innerText=datasnapshot.val();})

//Получение данных для карточки Легенда Эконом
var cardST608104Name = document.getElementById("cardST608104Name");
var cardST608104NameRef = firebase.database().ref().child("instrumenti/ST6081-04/Name");
cardST608104NameRef.on('value', function(datasnapshot){
	cardST608104Name.innerText=datasnapshot.val();})

var cardST608104Description = document.getElementById("cardST608104Description");
var cardST608104DescriptionRef = firebase.database().ref().child("instrumenti/ST6081-04/Description");
cardST608104DescriptionRef.on('value', function(datasnapshot){
	cardST608104Description.innerText=datasnapshot.val();})

var cardST608104Prise = document.getElementById("cardST608104Prise");
var cardST608104PriseRef = firebase.database().ref().child("instrumenti/ST608104/Prise");
cardST608104PriseRef.on('value', function(datasnapshot){
	cardST608104Prise.innerText=datasnapshot.val();})

//Получение данных для карточки Легенда Эконом
var cardST609501Name = document.getElementById("cardST609501Name");
var cardST609501NameRef = firebase.database().ref().child("instrumenti/ST6095-01/Name");
cardST609501NameRef.on('value', function(datasnapshot){
	cardST609501Name.innerText=datasnapshot.val();})

var cardST609501Description = document.getElementById("cardST609501Description");
var cardST609501DescriptionRef = firebase.database().ref().child("instrumenti/ST6095-01/Description");
cardST609501DescriptionRef.on('value', function(datasnapshot){
	cardST609501Description.innerText=datasnapshot.val();})

var cardST609501Prise = document.getElementById("cardST609501Prise");
var cardST609501PriseRef = firebase.database().ref().child("instrumenti/ST609501/Prise");
cardST609501PriseRef.on('value', function(datasnapshot){
	cardST609501Prise.innerText=datasnapshot.val();})

