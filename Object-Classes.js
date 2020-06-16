//Set up a class

class Rectangle {
	constructor(height,width) {
		this.height = height;
		this.width = width;
	}
}
//calling the class

const newRect = new Rectangle(400,800);


//ex

class Animal {
	constructor(name) {
		this.name = name;
	}
	
	speak() {
		console.log(`%{this.name} says, 'Hello'`);
	}
}

class Dog extends Animal { // must extend to parent to get properties
	constructor(name) {
		super(name); //important to get the properties from parent 
	}
	
	speak() {
		console.log(`&{this.nam} barks`);
	}
}

const bowWow = new Dog('Grizzly');
bowWow.speak();


// Converting constructors with .prototype into Classes


//old way with prototypes to build a constructor and give it methods
function Person(attributes) {
	this.age = attributes.age;
	this.name = attributes.name;
	this.homeTown = attributes.homeTown;
	}
	Person.prototype.speak = function() {
		return `Hello, my name is ${this.name}`;
	};
	
//making the same thing with a class 

class Person {
	constructor(attributes) {
		this.age = attributes.age;
		this.name = attributes.name;
		this.homeTown = attributes.homeTown;
	}
	speak() { //instead of the difficult prototype syntax we can directly add methods like this!
		return `Hello, my name is ${this.name}`;
	}
}
	
	//the real benefit with classes though comes from the inheritance
	
	//example of previous way of writing a child with prototypes
	
	function Child(childAttrs) {
		Person.call(this, childAttrs);
		this.isChild = childAttrs.isChild;
	}
	
	Child.prototype.checkIfChild = function() {
		if(this.isChild) {
			console.log(`${this.speak} and I am a child object`);
		}
	};
	
	// inheritance with classes
	 
 class Child extends Parent {
 	constructor(childAttrs) {
 		super(childAttrs); // <------ AGAIN YOU MUST HAVE SUPER TO EXTEND PARENT ATTRIBUTES
 		this.isChild = childAttrs.isChild; //<----special child attributes
 	}
 	checkIfChild() {
 		if(this.isChild) {
 			console.log(`${this.speak} and I am a child object`);
 		}
 	}
 }