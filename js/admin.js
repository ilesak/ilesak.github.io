function x() {
    firebase.database().ref().child('feedback').on('value', function(datasnapshot) {
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
		const sex = document.createElement('p');
		sex.innerText = val[key].sex;
		node.append(sex);
		const city = document.createElement('p');
		city.innerText = val[key].city;
		node.append(city);
		const adult = document.createElement('p');
		adult.innerText = val[key].adult;
		node.append(adult);
		const topic = document.createElement('p');
		topic.innerText = val[key].topic;
		node.append(topic);
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