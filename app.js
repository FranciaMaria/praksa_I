var helloStr = "world";

var sayHello = function(name){
	helloStr = "Maria";
	return function(){
		console.log('Hello ' + name + '!');
	}
}

var sayGreeting = sayHello(helloStr);

helloStr = 'Bob';
sayGreeting();
