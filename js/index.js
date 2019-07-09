
db.collection("mails").doc("").set({
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
});