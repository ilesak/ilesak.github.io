
/*db.collection("mails").doc("one").set({
    firstName: document.getElementById(firstName),
    lastName: document.getElementById(lastName),
    phone: document.getElementById(phone),
    email: document.getElementById(email),
    city: document.getElementById(city),
    message: document.getElementById(message) 
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});*/

function writeEmailData() {
    const obj = {
        firstName: document.getElementById('first_name').value,
        lastName: document.getElementById('last_name').value,
        telephone: document.getElementById('icon_telephone').value,
        email: document.getElementById('email').value,
        sex: document.querySelector('input[name="sex"]:checked').value,
        city: document.querySelector('.select-wrapper input').value,
        adult: document.getElementById('adult').checked,
        topic: document.getElementById('dis').value,
        text: document.getElementById('text_value').value,
    }

  firebase.database().ref().child('feedback').push().set({
    firstName: obj.firstName,
    lastName: obj.lastName,
    telephone: obj.telephone,
    email: obj.email,
    sex: obj.sex,
    city: obj.city,
    adult: obj.adult,
    topic: obj.topic,
    text: obj.text,
    date: Date.now(),
  })
  .then(() => alert('Письмо доставлено'))
  .catch(() => alert('Упс, произошла ошибка'));
}