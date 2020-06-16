// .map()

const data = [
	{"city" : "seattle", "state" : "WA", "population" : "652405", "land_area":"83.9"},
	{"city" : "new york", "state" : "NY", "population" : "8405837", "land_area":"302.6"},
	{"city" : "boston", "state" : "MA", "population" : "645966", "land_area":"48.3"},
	{"city" : "kansas city", "state" : "MO", "population" : "467007", "land_area":"315"},
];
//returning an array of just the cities and states

//only vanilla JS
const cityStates = [];
for(let i = 0; i <data.length; i++){
	let mappedObj = {};
	mappedObj.city = data[i].city;
	mappedObj.state = data[i].state;
	cityStates.push(mappedObj);//pushes new object into array
	mappedObj = {};//resets object to get the next object in the array
	}

//using .map
const mappedCityStates = data.map((state) => {//state is set to the OBJECT in the array 
	return{'city':state.city, 'state':state.state};
});

// .filter() -returns a new array 
//- calls back element , index and returns each in turn 
//-takes a callback that runs a truth test. If true ,returns the element ,else ignores. 
//-used for filtering out an array of elements by a specific condition

//only with vanilla js
const largeStates = [];
for(let i =0; i <data.length; i++){
	if (data[i].population >= 650000){
		largeStates.push(data[i]);
	}
}

//using .filter()
const filterLargeStates = data.filter((state) => {
	return state.population >= 650000;
});


// .reduce()
// returns a new array of elements 
// Takes a callback which is a reducer function
// reducer function takes a previous value and a next value , known as accumulator and currentValue
//accumulator is the thing that you will return and update
//used for manipulating or reshaping data into a single value ex. averages 

//vanilla js
let statePopulations = 0;
for(let i =0; i< data.length; i++){
	statePopulations += data[i].population;
}

//reduce()
const reduceStatePopulations = data.reduce((total,state) => {
	return total += state.population;
}, 0); //reduce actually takes another argument the actual start value, if it was not defined it would take the value of the first object
 
 
 //practice
 //map
 //return an array of just the population of each city
 const mappedCityPop = data.map((state) => {
	return state.population;
});
console.log(mappedCityPop);

//with arrow functions you dont even need the return statement!
const arrayOfPops = data.map(state => state.population);
console.log(arrayOfPops);

// use .filter to find states whose land units are larger than 50 units

const filteredLand = data.filter((state) => {
 return state.land_area >= 50; // cycles through every object and checks if land area is greater than returns that object in a new array
 
	});
console.log(filteredLand);

//reduce the land area of these states to find the mean average of all the states combined

const states = data.length;
let pop= data.reduce((acc , currentValue) => {
	return acc += currentValue.population;
}, 0);
console.log(pop/4);

//more Pratctice !
/* 
  In this file you have a nice data set that is designed to help you get used to using 
  common JS array methods. We're going to re-use this data across multiple problems.
  Before looking into the problems go ahead and familiarize yourself with the data provided.
  This exercise will prepare you for important web development tactics in the future. 
  Before beginning a problem I always look at the data I'm dealing with first. 

  Lets consider this scenario. You have a boss that is trying to articulate some data that has been given to him.
  The following data set is just too much for your bosses eye's to comprehend. So we need to change the model.
  Your needy boss is looking for few very specific data sets that only you can provide.
  You tell him you're the right person for the job and get to work!
*/
const animals = [
  {
    type: 'mouse',
    size: 'small',
    weight: 1
  },
  {
    type: 'dog',
    size: 'small',
    weight: 10
  },
  {
    type: 'lion',
    size: 'medium',
    weight: 150
  },
  {
    type: 'elephant',
    size: 'big',
    weight: 5000
  },
  {
    type: 'tiger',
    size: 'medium',
    weight: 400
  },
  {
    type: 'bat',
    size: 'small',
    weight: 8
  },
  {
    type: 'pig',
    size: 'small',
    weight: 40
  }
];

/*
  Problem 1: Map the data.
  Give me an array that only has the animal 'type's in it.
  Give me an array full of 'obects' of all the animal's weights and sizes. 
  We're looking for two new arrays here.
*/

// Code for problem 1 goes here
  const animalType = animals.map((type) => {
     return type.type;
      });
  console.log(animalType);
const weightSize = animals.map((ws) => {
	//return `${weight.weight}, ${size.size}`;
	return{"weight":ws.weight, "size":ws.size};
});
console.log(weightSize);
/*

// Code for problem 1 goes here

/*
  Problem 2: Filter the data.
  Lets say you wanted to provide yourself with a few 'sample' sets of data that you can use for some research.
  Well lets get rid of the items in this array that you don't need so you can focus on what's important.
  Give me an array of the data where the animals are 'size' small
  Give me an array of the data where the animals are of weight 'less than' 100.
  Give me an array of the data where the animals are of weight 'greater than' 100.
*/

// Code for problem 2 goes here
const smallAnimals = animals.filter((size) => {
	return size.size === "small";
});
console.log(smallAnimals);
const lightAnimals = animals.filter((weight) => {
	return weight.weight < 100;
});
console.log(lightAnimals);
const heavyAnimals = animals.filter((weight) => {
	return weight.weight >100 ;
});
console.log(heavyAnimals);
/*
  Problem 3: Reduce the data.
  Reduce is awesome. 
  It's commonly used in functional JavaScript to take a data set and reduce that set down to a singlular representation of that data set.
  can you say `averages` anyone?
  Give me an array of all the 'weights of the animals' added up.
  Give me an array of all the 'mean average weights` of the animals. (this may have 2 steps)

*/
const allAnimalWeight = animals.reduce((total,type) => {
	 return total += type.weight;
}, 0); 
console.log(allAnimalWeight);

const allAnimalAverage = animals.reduce((acc, currentValue) => {
	return acc += currentValue.weight;
}, 0);
console.log(allAnimalAverage/animals.length);
// Code for problem 3 goes here
/*
let pop= data.reduce((acc , currentValue) => {
	return acc += currentValue.population;
}, 0);
console.log(pop/4);
*/
