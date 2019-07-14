function x() {
    firebase.database().ref().child('orders').on('value', function(datasnapshot) {
        element(datasnapshot.val(), document.getElementById('main-content'));
    })
}

function element(val, node) {
	Object.keys(val).map((key) => {
		const firstName = document.createElement('p');
		firstName.innerText = val[key].firstName;
		node.append(firstName);
		const lastName = document.createElement('p');
		lastName.innerText = val[key].lastName;
		node.append(lastName);
		const email = document.createElement('p');
		email.innerText = val[key].email;
		node.append(email);
		const telephone = document.createElement('p');
		telephone.innerText = val[key].telephone;
		node.append(telephone);
		const city = document.createElement('p');
		city.innerText = val[key].city;
		node.append(city);
		const text = document.createElement('p');
		text.innerText = val[key].text;
		node.append(text);
		const date = document.createElement('p');
		date.innerText = new Date(val[key].date);
		node.append(date);
		node.append(document.createElement('br'));
	})
}

x();

function writeOrder() {
    const obj = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        telephone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        city: document.getElementById('city').value,
        text: document.getElementById('message').value,
    }

  firebase.database().ref().child('orders').push().set({
    firstName: obj.firstName,
    lastName: obj.lastName,
    telephone: obj.telephone,
    email: obj.email,
    city: obj.city,
    text: obj.text,
    date: Date.now(),
  })
  .then(() => alert('Письмо доставлено'))
  .catch(() => alert('Упс, произошла ошибка'));
}