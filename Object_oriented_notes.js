/* 
-- The THIS key word --

* 'this' is not unique programming feature to js but js behaves very differently
* A pronoun to use in place of an object
* Gives you the objects context
* Nothing to do where the function is written , but where and when the function is called

* four principles which will help one determine 'what gets "this".

	1. Global Binding - when in the global scope , the value of "this" will be the window/console Object;
				ex. 
					function sayName(name) {
						console.log(this);
						return name;
						}
							sayName("D'Artagnan")
							
	2. Implicit Binding - Dealing with objects, and their specific context. called "methods"
			ex.
				const myObj = {
					greeting: 'Hello',
					sayHello: function(name) {
						console.log(`${this.greeting} my name is ${name}`);
						console.log(this);
						}
					 };
					myObj.sayHello('Ryan');   <-- Whenever a function is called by a preceding dot , the object left of the dot gets 'this'.
					
	3.New Binding - Actually creating a new Object and setting pre-determined properties with 'this'.
		ex.
			function CordialPerson(greeter) {
				this.greeting = 'Hello ';
				this.greeter = greeter;
				this.speak = function() {
					console.log(this.greeting + this.greeter);
					console.log(this);
					};
				}
				 
				 const jerry = new CordialPerson('Newman');
				 const newman = new CordialPerson('Jerry');
				 
				 jerry.speak();
				 newman.speak();  <----sort of built our own method!
				 
	 4. Explicit Binding- -	Whenever the JS call or apply methos is used , this is explicitly defined
	 		.call or apply define this explicitly.
	 		
	 		
	 		ex.
	 			const jerry = new CordialPerson('Newman');
				 const newman = new CordialPerson('Jerry');
				 
				 jerry.speak.call(newman);
				 newman.speak.apply(jerry);  <--- these two will actually switch what they console log.
				 
	*/
	const myObj = {
			greeting:'Hello',
			speak: function() {
			console.log('implicit this: === ', this); //implicit binding
			return `${this.greeting}, world!`
			}
	};
		myObj.speak(); 
		
	function Person(obj) {
		this.name = obj.name;
		this.age = obj.age;
		this.speak = functtion() {
				console.log(` This new binding `,this);  //new binding example.
				return `Hello , my name is ${this.name}, and I am %{this.age} years old!`;
		}
	}
	const daniel = new Person({name: 'Daniel', age: 26});  //creating your new person object
	const aiden = new Person ({name: 'Aiden', age: 3});
	daniel.speak();
	aiden.speak();
	
	// call and apply ex below
	
	daniel.speak.call(aiden);
	aiden.speak.apply(daniel); //this will over-ride this properties and make the two objects switch so to speak.
	
	
	
	
	
	/*
	Object Oriented Programming - OOP
	
		* Objects over functions 
		*Data over logic.
		*Logical procedure that takes in input data,processses it and returns it as output
		* JS is NOT a class based language by nature
		*Classes in JS are what we call Syntactic Sugar over the constructor pattern.
		* We have pseudo-classical inheritance (and a few others) that we can use to achieve OOP.
		
	Constructor Functions
		*Constructors are also known as Object Creator Functions
		*Their purpose is to recieve an Object , and produce a new Object.
		*Capitalized Functions :`function Person()`.
		*Instantiated with the 'new' keyword.
		*'this' keyword becomes the object which will be returned by 'new'
		
		Ex.
		function Animal(object) {
			this.name = object.name;
			}
			key-notes : -Animal is capitalized , we pass every constructor an *object*. and 'this' gets returned as the new object.
	 better Ex.
	 	function Person(attributes) {
	 		this.age = attributes.age;
	 		this.name = attributes.name;
	 		this.homeTown = attributes.homeTown;
	 		this.speak = function () {
	 			return `Hello , my name is ${this.name}`;
	 			};
	 		}
	 		
	 	const fred = new Person({
	 		age:32,
	 		name:'Fred',
	 		homeTown:'Bedrock'
	 		});
		fred.speak();
		
		
	The Object Prototype
		*the mechanism which all object can inherit properties from one another
		* allows ont to 'deliberatley' modify an object properties
		*helps to avoid memory problems
		*allows one to extend an objects properties to another object
		* Can be VERY dangerous , you can overwrite an objects methods.
		
		EX.
			 	function Person(attributes) {
	 		this.age = attributes.age;
	 		this.name = attributes.name;
	 		this.homeTown = attributes.homeTown;
	 		}
	 		//instead we will use prototype for the speak function
	 		Person.prototype.speak = function() {
	 		return `Hello, my name is ${this.name}`;
		};
		
		*Protoypal Inheritance*
			function Child(childAttributes) {
				Person.call(this,childAttributes); //binding this to Person
				this.isChild = childAttributes.isChild; // this will be a special attribute to child
				}
				
				Child.prototype = Object.create(Person.prototype);
				const pebbles = new Child({
					age:3,
					name:'Pebbles',
					homeTown:'Bedrock'
					});
					pebbles.speak(); -->Hello, my name is Pebbles
					
					
					
					Code pen using Prototypes!
function Fruit(attrs) {
  this.type = attrs.type;
  this.name = attrs.name;
  this.isRipe = attrs.isRipe;
  this.calories = attrs.calories;
}

Fruit.prototype.shipped = function(destination) {
  console.log(`Shipping ${this.name} to ${destination}`);
};

Fruit.prototype.calculateCals = function() {
  console.log(`Calories in ${this.name} are ${this.calories * 200}`);
};

function Banana(bananaAttrs) {
  Fruit.call(this, bananaAttrs);
  this.doMonkeysLikeIt = bananaAttrs.doMonkeysLikeIt;
}

Banana.prototype = Object.create(Fruit.prototype); // THIS IS HOW WE GET FULL FLEDGE INHERITANCE FROM PARENT

Banana.prototype.checkIfMonkeysLikeIt = function() {
  if(this.doMonkeysLikeIt) {
    return true;
  } else {
    return false;
  }
};

function Kiwi(kiwiAttrs) {
  Fruit.call(this, kiwiAttrs);
  this.isFuzzy = kiwiAttrs.isFuzzy;
}

Kiwi.prototype = Object.create(Fruit.prototype);

Kiwi.prototype.checkIfFuzzy = function() {
   if(this.isFuzzy) {
    return true;
  } else {
    return false;
  }
}

const newBanana = new Banana({
  doMonkeysLikeIt: true,
  type: 'Tree',
  name: 'Banana',
  isRipe: false,
  calories: 0.1
});
console.log(newBanana);
const newKiwi = new Kiwi({
  isFuzzy: true,
  type: 'Tree',
  name: 'Kiwi',
  isRipe: false,
  calories: 0.7
});

console.log(newBanana.shipped('Alaska'));
console.log(newKiwi.shipped('Colorado'));
console.log(newBanana.checkIfMonkeysLikeIt());
console.log(newKiwi.checkIfFuzzy());
console.log(newBanana.calculateCals());
console.log(newKiwi.calculateCals());
