// Objects: Part 1

// 1. Objects Person

const person = {
    name: "Joe",
    age: 30,
    occupation: "Dole scum"
};

for (const properties in person) {
    console.log(properties, person[properties]);
};


// 2. Get Values

const getValues = param => Object.values(person);


console.log(getValues(person));


// 3. Add A Method 

let newPerson = {
    firstName: "Janine",
    lastName: "Butcher",
    job: "Scammer",
    age: 34,
    city: "London",
    returnValues: function() {
        return this.firstName + " " + this.lastName + " is a " + this.age + " year old " + this.job + " from " + this.city;

        // return ´${this.firstName} + ${this.lastName} + " is a " + ${this.age} + "year old" + ${this.job} + "from" + ${this.city}´;

        // return Object.values(this).toString;
    }
};

console.log(newPerson.returnValues());
console.log(newPerson["returnValues"]());

console.log(Math.random);

// Bonus Questions:

// 1. Convert keys and values into an array

const myObject = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
};

function objectToArray(param) {
    return Object.entries(param);
};

console.log(objectToArray(myObject));



// 2. List Properties

const myProperties = {
    item: "Broom",
    colour: "brown",
    length: "150cm",
    price: "$5"
}



const returnProperties = insertObject => Object.keys(insertObject);

console.log(returnProperties(myProperties));


// 3, Merge 


let myObjectExperiment1 = {
    time: "13.43",
    day: "Monday",
    colour: "blue"
}

let myObjectExperiment2 = {
    weather: "bad",
    temperature: "okay",
    colour: "purple"
}

/* 
function objectMerge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}

Above didnt work ... why ? */


const newObject = function(obj1, obj2) {
    return Object.assign(obj1, obj2);
}

console.log(newObject(myObjectExperiment1, myObjectExperiment2));


/* If the same property is used twice, the last instance of the value as read by JS will be the value that is ultimately printed.

Switch obj1 + ob2 around as parameters to check this for reference */


// 4. Switch Keys and Values

let confused = {
    1: "one",
    2: "two",
    3: "three",
    "test": 4
};

function swap(obj){
    let newConfused = {};
    for(let newKey in obj){
      newConfused[obj[newKey]] = newKey;
    }
    return newConfused;
  }
  
console.log(swap(confused));

// The above I just stole from the internet.............


// 5. Return Keys and Values

const groupKeysandGroupValues = param => {
    let arrayOfKeys = Object.keys(confused);
    let arrayOfValues = Object.values(confused);

    let newArray = [];
    newArray.push(arrayOfKeys, arrayOfValues);

    return (newArray);
    
   
};

console.log(groupKeysandGroupValues());