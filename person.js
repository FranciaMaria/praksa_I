
//niz json objekata:

{
	"persons":[

		{
			"firstName": "Maria",
			"lastName": "Francia",	//json objekat
			"gender": "female"
		},
		{
			"firstName": "Marko",
			"lastName": "Mikic",
			"gender": "male"
		},
		{
			"firstName": "Mija",
			"lastName": "Miljic",
			"gender": "other"
		}
	]
}

function Person(firstName, lastName, gender){

	this.firstName = firstName,
	this.lastName = lastName,
	this.gender = gender

	this.speak = function(){
		return "French";
	}

	this.activity = function(){
		return "eat";
	}

	var sayHello = function(name){

	return function(){
		console.log('Hello ' + name + '!');
	}
}

}

Person.age = 50;

var person = new Person("Maria", "Francia", "female");
/*var person1 = new Person("Marko", "Mikic", "male");
var person2 = new Person("Mija", "Miljic", "other");*/

/*console.log('First Name :' + person1.firstName);
console.log('Last Name :' + person2.lastName);
console.log('Gender :' + person3.gender);*/



function Doctor(specialization){

	this.specialization = specialization;

	this.activity = function(){
		return "works in hospital";
	}
}

//nasledjivanje

Doctor.prototype = new Person("Milan", "Markovic", "male");

var doctor = new Doctor("cardiologist");

//callback

var sayHello = function(name){
	return function(){
		console.log('Hello ' + name + '!');
	}
}

var sayGreeting = sayHello(doctor.firstName);

sayGreeting();

//promise

/* ES5, using Bluebird */
var isDocHappy = false;

// Promise
var willIGetNewMedicine = new Promise(
    function (resolve, reject) {
        if (isDocHappy) {
            var medicine = {
                brand: 'Galenika',
                for: 'sleep'
            };
            resolve(medicine);
        } else {
            var reason = new Error('Doc is not happy');
            reject(reason);
        }

    }
);


// call our promise
var askDoc = function () {
    willIGetNewMedicine
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
        })
        .catch(function (error) {
            // ops, mom don't buy it
            console.log(error.message);
        });
}

askDoc();

console.log(doctor);
console.log(doctor.firstName);
console.log(doctor.lastName);
console.log(doctor.gender);
console.log(doctor.specialization);
console.log(doctor.age);
console.log(doctor.speak());
console.log(person.activity());
console.log(doctor.activity());
console.log(sayHello);